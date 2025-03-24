package repository

import "MyTaskBoard/internal/task/models"

type TaskRepository interface {
	GetAll(fields *[]string) (*[]models.Task, error)
	GetById(id *string, fields *[]string) (*models.Task, error)
	Create(task *models.Task, fields *[]string) (*models.Task, error)
	UpdateById(id *string, task *models.Task, fields *[]string) (*models.Task, error)
	DeleteById(id *string, fields *[]string) (bool, error)
}
