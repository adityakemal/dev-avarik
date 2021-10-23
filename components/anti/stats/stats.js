// ░█▀▀▄ ░█▀▀▀█ 　 ░█▄─░█ ░█▀▀▀█ ▀▀█▀▀ 　 ░█▀▀▀ ░█▀▀▄ ▀█▀ ▀▀█▀▀
// ░█─░█ ░█──░█ 　 ░█░█░█ ░█──░█ ─░█── 　 ░█▀▀▀ ░█─░█ ░█─ ─░█──
// ░█▄▄▀ ░█▄▄▄█ 　 ░█──▀█ ░█▄▄▄█ ─░█── 　 ░█▄▄▄ ░█▄▄▀ ▄█▄ ─░█──
// The component is made to be used flexibly. But if you REALLY MUST update edit the component,
// please add `-custom` on the change log file (e.g. `1.0.0-custom.md`) and log the changes

// ========================================================================================================================================
// Stats
// ========================================================================================================================================

import React from "react"
import PropTypes from "prop-types"

export const Stats = ({ stats }) => {
  return (
    <div className="stats">
      <div className="row row-3">
        {stats.map((stat, i) => {
          return (
            <div className="col-6" key={i}>
              <div className="stat-item center-down-sm">
                <span className="stat-number">{stat.value}</span>
                <span className="stat-label">{stat.label}</span>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

Stats.propTypes = {
  values: PropTypes.any, // Set stats value
}
