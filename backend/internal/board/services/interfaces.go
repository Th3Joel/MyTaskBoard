package services

import "MyTaskBoard/internal/board/models"

type BoardService interface {
	GetAll() (*[]models.Board, error)
	GetById(id *string) (*models.Board, error)
	Create(board *models.Board) (*models.Board, error)
	UpdateById(id *string, board *models.Board) (*models.Board, error)
	DeleteById(id *string) (bool, error)
}
