package handlers

import (
	"MyTaskBoard/internal/task/models"
	"MyTaskBoard/internal/task/service"

	"github.com/gin-gonic/gin"
)

type taskHandler struct {
	serv *service.TaskService
}

func NewTaskHandler(s *service.TaskService) TaskHandler {
	return &taskHandler{
		serv: s,
	}
}

// Create implements TaskHandler.
func (t *taskHandler) Create(g *gin.Context) {
	var newTask models.Task
	g.BindJSON(&newTask)
	task, err := (*t.serv).Create(&newTask)
	if err != nil {
		g.JSON(200, gin.H{
			"status": false,
			"code":   500,
			"msj":    "Internal server error",
		})
		return
	}
	if task == nil {
		g.JSON(200, gin.H{
			"status": false,
			"code":   204,
			"msj":    "An ocurred an error to create task",
		})
		return
	}
	g.JSON(200, gin.H{
		"status": true,
		"code":   200,
		"msj":    "Created successfully",
		"task":   *task,
	})
}

// DeleteById implements TaskHandler.
func (t *taskHandler) DeleteById(g *gin.Context) {
	id := g.Param("id")
	status, err := (*t.serv).DeleteById(&id)
	if err != nil {
		g.JSON(200, gin.H{
			"status": false,
			"code":   500,
			"msj":    "Internal server error",
		})
		return
	}
	if !status {
		g.JSON(200, gin.H{
			"status": false,
			"code":   204,
			"msj":    "Not found",
		})
		return
	}
	g.JSON(200, gin.H{
		"status": true,
		"code":   200,
		"msj":    "Deleted successfully",
	})
}

// GetAll implements TaskHandler.
func (t *taskHandler) GetAll(g *gin.Context) {
	tasks, err := (*t.serv).GetAll()
	if err != nil {
		g.JSON(200, gin.H{
			"status": false,
			"code":   500,
			"msj":    "Internal server error",
		})
		return
	}

	if tasks == nil {
		g.JSON(200, gin.H{
			"status": true,
			"code":   204,
			"msj":    "Not found",
		})
		return
	}

	g.JSON(200, gin.H{
		"status": true,
		"code":   200,
		"tasks":  *tasks,
	})
}

// GetById implements TaskHandler.
func (t *taskHandler) GetById(g *gin.Context) {
	id := g.Param("id")

	task, err := (*t.serv).GetById(&id)
	if err != nil {
		g.JSON(200, gin.H{
			"status": false,
			"code":   500,
			"msj":    "Internal server error",
		})
		return
	}

	if task == nil {
		g.JSON(200, gin.H{
			"status": false,
			"code":   204,
			"msj":    "No found",
		})
		return
	}

	g.JSON(200, gin.H{
		"status": true,
		"code":   200,
		"tasks":  *task,
	})
}

// UpdateById implements TaskHandler.
func (t *taskHandler) UpdateById(g *gin.Context) {
	id := g.Param("id")
	var task models.Task

	g.BindJSON(&task)

	taskUpdated, err := (*t.serv).UpdateById(&id, &task)
	if err != nil {
		g.JSON(200, gin.H{
			"status": false,
			"code":   500,
			"msj":    "Internal server error",
		})
		return
	}

	if taskUpdated == nil {
		g.JSON(200, gin.H{
			"status": false,
			"code":   204,
			"msj":    "No found or no field is modified",
		})
		return
	}
	g.JSON(200, gin.H{
		"status": true,
		"code":   200,
		"msj":    "Updated successfully",
		"task":   *taskUpdated,
	})
}
