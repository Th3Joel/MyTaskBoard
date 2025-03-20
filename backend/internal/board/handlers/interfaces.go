package handlers

import (
	"github.com/gin-gonic/gin"
)

type BoardHandler interface {
	GetAll(g *gin.Context)
	GetById(g *gin.Context)
	Create(g *gin.Context)
	UpdateById(g *gin.Context)
	DeleteById(g *gin.Context)
}
