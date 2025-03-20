package repository

import "MyTaskBoard/internal/board/models"

type BoardRepository interface {
	GetAll(fields *[]string) (*[]models.Board, error)
	GetById(id *string, fields *[]string) (*models.Board, error)
	Create(board *models.Board, fields *[]string) (*models.Board, error)
	UpdateById(id *string, board *models.Board, fields *[]string) (*models.Board, error)
	DeleteById(id *string, fields *[]string) (bool, error)
}
