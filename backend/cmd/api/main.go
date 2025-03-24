package main

import (
	"MyTaskBoard/cmd/api/routes"
	"MyTaskBoard/configs"

	"github.com/gin-gonic/gin"
)

func main() {

	configs.ShowBanner()
	main := gin.New()
	main.Use(configs.Logger())

	main.GET("/health", func(ctx *gin.Context) {
		ctx.String(200, "Hola")
	})

	//Routes
	api := main.Group("/api")

	routes.BoardRouter(api)
	routes.TaskRouter(api)

	go func() {
		main.Run(":" + configs.Env().SERVER_PORT)
	}()

	select {}
}
