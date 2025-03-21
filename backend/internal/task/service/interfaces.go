package service

import "MyTaskBoard/internal/task/models"

type TaskService interface {
	GetAll() (*[]models.Task, error)
	GetById(id *string) (*models.Task, error)
	Create(task *models.Task) (*models.Task, error)
	UpdateById(id *string, task *models.Task) (*models.Task, error)
	DeleteById(id *string) (bool, error)
}
