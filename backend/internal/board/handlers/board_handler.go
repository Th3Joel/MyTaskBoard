package handlers

import (
	"MyTaskBoard/internal/board/models"
	"MyTaskBoard/internal/board/services"

	"github.com/gin-gonic/gin"
)

type boardHandler struct {
	serv *services.BoardService
}

func NewBoardHandler(s *services.BoardService) BoardHandler {
	return &boardHandler{
		serv: s,
	}
}

// Create implements BoardHandler.
func (b *boardHandler) Create(g *gin.Context) {
	var newBoard models.Board
	g.BindJSON(&newBoard)
	board, err := (*b.serv).Create(&newBoard)
	if err != nil {
		g.JSON(200, gin.H{
			"status": false,
			"code":   500,
			"msj":    "Internal server error",
		})
		return
	}
	if board == nil {
		g.JSON(200, gin.H{
			"status": false,
			"code":   204,
			"msj":    "An ocurred an error to create board",
		})
		return
	}
	g.JSON(200, gin.H{
		"status": true,
		"code":   200,
		"msj":    "Created successfully",
		"board":  *board,
	})
}

// DeleteById implements BoardHandler.
func (b *boardHandler) DeleteById(g *gin.Context) {
	id := g.Param("id")
	status, err := (*b.serv).DeleteById(&id)
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

// GetAll implements BoardHandler.
func (b *boardHandler) GetAll(g *gin.Context) {
	boards, err := (*b.serv).GetAll()
	if err != nil {
		g.JSON(200, gin.H{
			"status": false,
			"code":   500,
			"msj":    "Internal server error",
		})
		return
	}

	if boards == nil {
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
		"boards": *boards,
	})
}

// GetById implements BoardHandler.
func (b *boardHandler) GetById(g *gin.Context) {
	id := g.Param("id")

	board, err := (*b.serv).GetById(&id)
	if err != nil {
		g.JSON(200, gin.H{
			"status": false,
			"code":   500,
			"msj":    "Internal server error",
		})
		return
	}

	if board == nil {
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
		"boards": *board,
	})
}

// UpdateById implements BoardHandler.
func (b *boardHandler) UpdateById(g *gin.Context) {
	id := g.Param("id")
	var board models.Board

	g.BindJSON(&board)

	boardUpdated, err := (*b.serv).UpdateById(&id, &board)
	if err != nil {
		g.JSON(200, gin.H{
			"status": false,
			"code":   500,
			"msj":    "Internal server error",
		})
		return
	}

	if boardUpdated == nil {
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
		"board":  *boardUpdated,
	})
}
