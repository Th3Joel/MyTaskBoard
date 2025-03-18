package configs

import (
	"log"
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

var envInstance *env
var envOnce sync.Once

//var Env = envInit()

// Pattern singlenton
func Env() *env {
	envOnce.Do(func() {
		envInstance = &env{}
		envInstance.loadServer()
		envInstance.loadDatabase()
	})

	return envInstance
}

func (e *env) loadServer() {
	e.SERVER_PORT = getEnv("SERVER_PORT", "8080")
	e.SERVER_MODE = getEnv("SERVER_MODE", "env")
}

func (e *env) loadDatabase() {
	e.DB_HOST = getEnv("DB_HOST", "localhost")
	e.DB_USER = getEnv("DB_USER", "user")
	e.DB_PASSWORD = getEnv("DB_PASSWORD", "1234")
	e.DB_NAME = getEnv("DB_NAME", "database")
	e.DB_PORT = getEnv("DB_PORT", "1234")
}

func getEnv(key, defaultValue string) string {
	value := os.Getenv(key)
	if value == "" {
		if defaultValue == "" {
			log.Fatalf("Environment variable %s is required but not set", key)
		}
		return defaultValue
	}
	return value
}
