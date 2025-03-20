package services

import (
	"MyTaskBoard/internal/board/models"
	"MyTaskBoard/internal/board/repository"

	"github.com/google/uuid"
)

type boardService struct {
	repo *repository.BoardRepository
}

func NewBoardService(r *repository.BoardRepository) BoardService {
	return &boardService{
		repo: r,
	}
}

// Create implements BoardService.
func (b *boardService) Create(board *models.Board) (*models.Board, error) {
	board.ID = uuid.NewString()
	return (*b.repo).Create(board, &[]string{})
}

// DeleteById implements BoardService.
func (b *boardService) DeleteById(id *string) (bool, error) {
	return (*b.repo).DeleteById(id, &[]string{})
}

// GetAll implements BoardService.
func (b *boardService) GetAll() (*[]models.Board, error) {
	return (*b.repo).GetAll(&[]string{})
}

// GetById implements BoardService.
func (b *boardService) GetById(id *string) (*models.Board, error) {
	return (*b.repo).GetById(id, &[]string{})
}

// UpdateById implements BoardService.
func (b *boardService) UpdateById(id *string, board *models.Board) (*models.Board, error) {
	return (*b.repo).UpdateById(id, board, &[]string{})
}
