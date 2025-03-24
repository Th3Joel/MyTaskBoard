package models

type Task struct {
	ID          string `json:"id,omitempty" gorm:"primaryKey"`
	Title       string `json:"title,omitempty"`
	Description string `json:"description"`
	Icon        string `json:"icon"`
	Status      string `json:"status"`
}
