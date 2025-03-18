package configs

import (
	"fmt"
	"time"

	"github.com/gin-gonic/gin"
)

func Logger() gin.HandlerFunc {
	return gin.LoggerWithFormatter(func(param gin.LogFormatterParams) string {
		var statusColor, methodColor, resetColor string
		if param.IsOutputColor() {
			statusColor = param.StatusCodeColor()
			methodColor = param.MethodColor()
			resetColor = param.ResetColor()
		}

		if param.Latency > time.Minute {
			param.Latency = param.Latency.Truncate(time.Second)
		}

		return fmt.Sprintf("-> %v |%s %3d %s| %10v | %13s |%s %-3s %s %#v <-\n%s",
			param.TimeStamp.Format("[02/01/2006 03:04 PM]"),
			statusColor, param.StatusCode, resetColor,
			param.Latency,
			param.ClientIP,
			methodColor, param.Method, resetColor,
			param.Path,
			param.ErrorMessage,
		)
	})
}

func ShowBanner() {
	gin.SetMode(gin.ReleaseMode)
	fmt.Println("\n┌       ----- Users Microservice TradeMaster Api -----      ┐")
	fmt.Printf("│       ******* Server running in port -> %s *******      │\n\n", Env().SERVER_PORT)
}
