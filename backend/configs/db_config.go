package configs

import (
	"MyTaskBoard/internal/board/models"
	"fmt"
	"log"
	"sync"
	"time"

	"gorm.io/driver/mysql"
	"gorm.io/gorm"
	"gorm.io/gorm/logger"
)

type db struct {
	gorm *gorm.DB
}

var dbInstance *db
var dbOnce sync.Once

func DB() *db {
	dbOnce.Do(func() {
		dbInstance = &db{}
		dbInstance.connect()
	})
	return dbInstance
}

func (db *db) connect() {
	//dsn := fmt.Sprintf("host=%s user=%s password=%s dbname=%s port=%s TimeZone=America/Managua", Env().DB_HOST, Env().DB_USER, Env().DB_PASSWORD, Env().DB_NAME, Env().DB_PORT)
	dsn := fmt.Sprintf("%s:%s@tcp(%s:%s)/%s?parseTime=true&tls=true", Env().DB_USER, Env().DB_PASSWORD, Env().DB_HOST, Env().DB_PORT, Env().DB_NAME)
	for {
		msgError := ""
		var err error
		db.gorm, err = gorm.Open(mysql.Open(dsn), &gorm.Config{
			Logger: func() logger.Interface {
				if Env().SERVER_MODE == "prod" {
					return logger.Default.LogMode(logger.Silent)
				}
				return logger.Default
			}(),
			PrepareStmt: true,
		})
		pool, err2 := db.gorm.DB()

		pool.SetMaxOpenConns(100)
		pool.SetMaxIdleConns(10)
		pool.SetConnMaxLifetime(time.Minute * 30)
		if err == nil && err2 == nil {
			break
		}

		if err != nil {
			msgError += fmt.Sprintf("Failure connect to database: %s \n", err)
		}

		if err2 != nil {
			msgError += fmt.Sprintf("Failure to pool connection: %s \n", err2)
		}

		msgError += "...retrying to connect to the database\n"
		time.Sleep(time.Second * 3)
	}
	fmt.Println("Connected to database")
	migrate()
}

func migrate() {
	var errors []error
	errors = append(errors, dbInstance.gorm.AutoMigrate(models.Board{}))

	for _, v := range errors {
		if v != nil {
			log.Fatal(v)
		}
	}
}
