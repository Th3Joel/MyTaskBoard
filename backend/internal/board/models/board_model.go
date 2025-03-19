package models

import "time"

type Board struct {
	ID          string `json:"id,omitempty" gorm:"primaryKey"`
	Name        string `json:"name,omitempty"`
	Description string `json:"description,omitempty"`

	CreatedAt *time.Time `json:"created_at,omitempty" gorm:"autoCreateTime"`
	UpdatedAt *time.Time `json:"updated_at,omitempty" gorm:"autoUpdateTime"`
}
