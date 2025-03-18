package main

import (
	"MyTaskBoard/configs"

	"github.com/gin-gonic/gin"
)

func main() {
	configs.ShowBanner()
	main := gin.New()

	main.Use(configs.Logger())
	//Routes
	api := main.Group("/api/v1")
	api.GET("/", func(ctx *gin.Context) {
		ctx.String(200, "Hola")
	})

	go func() {
		main.Run(":" + configs.Env().SERVER_PORT)
	}()

	select {}
}
