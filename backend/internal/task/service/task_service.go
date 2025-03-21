package service

import (
	"MyTaskBoard/internal/task/models"
	"MyTaskBoard/internal/task/repository"
)

type taskService struct {
	serv *repository.TaskRepository
}

func NewTaskService(s *repository.TaskRepository) TaskService {
	return &taskService{
		serv: s,
	}
}

// Create implements TaskService.
func (t *taskService) Create(task *models.Task) (*models.Task, error) {
	return (*t.serv).Create(task, &[]string{})
}

// DeleteById implements TaskService.
func (t *taskService) DeleteById(id *string) (bool, error) {
	return (*t.serv).DeleteById(id, &[]string{})
}

// GetAll implements TaskService.
func (t *taskService) GetAll() (*[]models.Task, error) {
	return (*t.serv).GetAll(&[]string{})
}

// GetById implements TaskService.
func (t *taskService) GetById(id *string) (*models.Task, error) {
	return (*t.serv).GetById(id, &[]string{})
}

// UpdateById implements TaskService.
func (t *taskService) UpdateById(id *string, task *models.Task) (*models.Task, error) {
	return (*t.serv).UpdateById(id, task, &[]string{})
}
