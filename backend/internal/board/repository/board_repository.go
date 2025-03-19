package repository

import (
	"MyTaskBoard/internal/board/models"

	"gorm.io/gorm"
)

type boardRepositoryGorm struct {
	db *gorm.DB
}

func NewBoardRepositoryGorm(db *gorm.DB) BoardRepository {
	return &boardRepositoryGorm{
		db: db,
	}
}

// Create implements BoardRepository.
func (b *boardRepositoryGorm) Create(board *models.Board, fields *[]string) (*models.Board, error) {
	sql := b.db.Raw("INSERT INTO board (id, name, description) VALUES (?, ?, ?)", board.ID, board.Name, board.Description)

	if sql.RowsAffected < 1 {
		return nil, nil
	}

	if sql.Error != nil {
		return nil, sql.Error
	}

	return board, nil
}

// DeleteById implements BoardRepository.
func (b *boardRepositoryGorm) DeleteById(id *string, fields *[]string) (bool, error) {
	sql := b.db.Raw("DELETE FROM board WHERE id = ?", *id)
	if sql.RowsAffected < 1 {
		return false, nil
	}

	if sql.Error != nil {
		return false, sql.Error
	}
	return true, nil
}

// GetAll implements BoardRepository.
func (b *boardRepositoryGorm) GetAll(fields *[]string) (*[]models.Board, error) {
	var boards []models.Board

	sql := b.db.Raw("SELECT id, name, description FROm board").Scan(&boards)

	if sql.RowsAffected < 1 {
		return nil, nil
	}

	if sql.Error != nil {
		return nil, sql.Error
	}
	return &boards, nil
}

// GetById implements BoardRepository.
func (b *boardRepositoryGorm) GetById(id *string, fields *[]string) (*models.Board, error) {
	var board models.Board

	sql := b.db.Raw("SELECT id,name,description FROM board WHERE id = ?", *id).Scan(&board)

	if sql.RowsAffected < 1 {
		return nil, nil
	}

	if sql.Error != nil {
		return nil, sql.Error
	}

	return &board, nil
}

// UpdateById implements BoardRepository.
func (b *boardRepositoryGorm) UpdateById(id *string, board *models.Board, fields *[]string) (*models.Board, error) {

	sql := b.db.Raw("UPDATE board SET id = ?, name = ?, description = ? WHERE id = ?", board.ID, board.Name, board.Description)

	if sql.RowsAffected < 1 {
		return nil, nil
	}

	if sql.Error != nil {
		return nil, sql.Error
	}

	return board, nil

}
