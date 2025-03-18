package configs

import (
	"os"
	"sync"
)

type env struct {
	//Server
	SERVER_MODE string
	SERVER_PORT string
	//Database
	DB_HOST     string
	DB_USER     string
	DB_PASSWORD string
	DB_NAME     string
	DB_PORT     string
}

var singleInstance *env
var mutex sync.Mutex

//var Env = envInit()

// Pattern singlenton
func Env() *env {
	if singleInstance == nil {
		mutex.Lock()
		defer mutex.Unlock()
		if singleInstance == nil {
			singleInstance = &env{}
			singleInstance.loadServer()
			singleInstance.loadDatabase()
		}
	}
	return singleInstance
}

func (e *env) loadServer() {
	e.SERVER_PORT = os.Getenv("SERVER_PORT")
	e.SERVER_MODE = os.Getenv("SERVER_MODE")

	if e.SERVER_PORT == "" {
		e.SERVER_PORT = "8080"
	}

	if e.SERVER_MODE == "" {
		e.SERVER_MODE = "env"
	}
}

func (e *env) loadDatabase() {
	e.DB_HOST = os.Getenv("DB_HOST")
	e.DB_USER = os.Getenv("DB_USER")
	e.DB_PASSWORD = os.Getenv("DB_PASSWORD")
	e.DB_NAME = os.Getenv("DB_NAME")
	e.DB_PORT = os.Getenv("DB_PORT")

	if e.DB_HOST == "" {
		e.DB_HOST = "localhost"
	}

	if e.DB_USER == "" {
		e.DB_USER = "user"
	}

	if e.DB_PASSWORD == "" {
		e.DB_PASSWORD = "1234"
	}

	if e.DB_NAME == "" {
		e.DB_NAME = "database"
	}

	if e.DB_PORT == "" {
		e.DB_PORT = "1234"
	}
}
