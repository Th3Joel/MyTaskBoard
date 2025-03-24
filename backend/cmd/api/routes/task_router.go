package routes

import (
	"MyTaskBoard/configs"
	"MyTaskBoard/internal/task/handlers"
	"MyTaskBoard/internal/task/repository"
	"MyTaskBoard/internal/task/service"

	"github.com/gin-gonic/gin"
)

func TaskRouter(r *gin.RouterGroup) {
	taskRepository := repository.NewTaskRepositoryMysql(configs.DB().G)
	taskService := service.NewTaskService(&taskRepository)
	taskHandler := handlers.NewTaskHandler(&taskService)

	r.GET("/tasks", taskHandler.GetAll)
	r.GET("/tasks/:id", taskHandler.GetById)
	r.POST("/tasks", taskHandler.Create)
	r.PUT("/tasks/:id", taskHandler.UpdateById)
	r.DELETE("/tasks/:id", taskHandler.DeleteById)
}
