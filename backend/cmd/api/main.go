package main

import (
	"github.com/gin-gonic/gin"
)

func main() {
	main := gin.New()

	main.GET("/api/v1", func(ctx *gin.Context) {
		ctx.String(200, "Hola")
	})

	main.Run(":2000")
}
