package repository

import (
	"MyTaskBoard/internal/task/models"

	"gorm.io/gorm"
)

type taskRepositoryMysql struct {
	db *gorm.DB
}

func NewTaskRepositoryMysql(db *gorm.DB) TaskRepository {
	return &taskRepositoryMysql{
		db: db,
	}
}

// GetAll implements TaskRepository.
func (t *taskRepositoryMysql) GetAll(fields *[]string) (*[]models.Task, error) {
	var tasks []models.Task

	sql := t.db.Raw("SELECT id, title, description, icon, status FROM tasks").Scan(&tasks)

	if sql.RowsAffected < 1 {
		return nil, nil
	}
	if sql.Error != nil {
		return nil, sql.Error
	}

	return &tasks, nil
}

// GetById implements TaskRepository.
func (t *taskRepositoryMysql) GetById(id *string, fields *[]string) (*models.Task, error) {
	var task models.Task
	sql := t.db.Raw("SELECT id, title, description, icon, status FROM task WHERE id = ?", *id).Scan(&task)
	if sql.RowsAffected < 1 {
		return nil, nil
	}

	if sql.Error != nil {
		return nil, sql.Error
	}

	return &task, nil
}

// Create implements TaskRepository.
func (t *taskRepositoryMysql) Create(task *models.Task, fields *[]string) (*models.Task, error) {
	sql := t.db.Exec("INSERT INTO tasks (id, title, description, icon, status) VALUES (?, ?, ?, ?, ?)", task.ID, task.Title, task.Description, task.Icon, task.Status)
	if sql.RowsAffected < 1 {
		return nil, nil
	}

	if sql.Error != nil {
		return nil, sql.Error
	}

	return task, nil
}

// UpdateById implements TaskRepository.
func (t *taskRepositoryMysql) UpdateById(id *string, task *models.Task, fields *[]string) (*models.Task, error) {
	sql := t.db.Exec("UPDATE tasks SET title = ?, description = ?, icon = ?, status = ? WHERE id = ?", task.Title, task.Description, task.Icon, task.Status, task.ID)
	if sql.RowsAffected < 1 {
		return nil, nil
	}

	if sql.Error != nil {
		return nil, sql.Error
	}

	return task, nil
}

// DeleteById implements TaskRepository.
func (t *taskRepositoryMysql) DeleteById(id *string, fields *[]string) (bool, error) {
	sql := t.db.Exec("DELETE FROM tasks WHERE id = ?", *id)
	if sql.RowsAffected < 1 {
		return false, nil
	}

	if sql.Error != nil {
		return false, sql.Error
	}

	return true, nil
}
