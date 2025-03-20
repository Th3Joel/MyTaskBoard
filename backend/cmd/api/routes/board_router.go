package routes

import (
	"MyTaskBoard/configs"
	"MyTaskBoard/internal/board/handlers"
	"MyTaskBoard/internal/board/repository"
	"MyTaskBoard/internal/board/services"

	"github.com/gin-gonic/gin"
)

func BoardRouter(r *gin.RouterGroup) {
	boardRepository := repository.NewBoardRepositoryGorm(configs.DB().G)
	boardService := services.NewBoardService(&boardRepository)
	boardHandler := handlers.NewBoardHandler(&boardService)

	r.GET("/boards", boardHandler.GetAll)
	r.GET("/boards/:id", boardHandler.GetById)
	r.POST("/boards", boardHandler.Create)
	r.PUT("/boards/:id", boardHandler.UpdateById)
	r.DELETE("/boards/:id", boardHandler.DeleteById)
}
