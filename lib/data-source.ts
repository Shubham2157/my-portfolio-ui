/**
 * Data source tracking utility
 * Helps distinguish whether data was fetched from backend or loaded from config
 */

export type DataSource = "backend" | "config"

export interface DataWithSource<T> {
  data: T
  source: DataSource
}

/**
 * Wraps data with its source information
 */
export function wrapDataSource<T>(data: T, source: DataSource): DataWithSource<T> {
  return { data, source }
}

/**
 * Creates a data source tracker
 */
export class DataSourceTracker {
  private source: DataSource = "config"

  setSource(source: DataSource) {
    this.source = source
  }

  getSource(): DataSource {
    return this.source
  }

  isFromBackend(): boolean {
    return this.source === "backend"
  }

  isFromConfig(): boolean {
    return this.source === "config"
  }
}
