/**
 * Generate a consistent color for a skill based on its name
 * Uses a hash function to ensure same skill always gets same color
 */
export function generateColorFromName(name: string): string {
  // Hash function to convert name to a number
  let hash = 0
  for (let i = 0; i < name.length; i++) {
    const char = name.charCodeAt(i)
    hash = (hash << 5) - hash + char
    hash = hash & hash // Convert to 32bit integer
  }

  // Predefined color palette - carefully selected, vibrant tech colors
  const colors = [
    "#F7DF1E", // JavaScript Yellow
    "#3178C6", // TypeScript Blue
    "#3776AB", // Python Blue
    "#007396", // Java Blue
    "#61DAFB", // React Cyan
    "#000000", // Next.js Black
    "#06B6D4", // Tailwind Cyan
    "#4FC08D", // Vue Green
    "#339933", // Node.js Green
    "#000000", // Express Black
    "#6DB33F", // Spring Green
    "#336791", // PostgreSQL Blue
    "#4479A1", // MySQL Blue
    "#F80000", // Oracle Red
    "#13AA52", // MongoDB Green
    "#F1502F", // Git Red
    "#2496ED", // Docker Blue
    "#FF9900", // AWS Orange
    "#000000", // Vercel Black
    "#FF6B6B", // Red
    "#4ECDC4", // Teal
    "#45B7D1", // Sky Blue
    "#96CEB4", // Sage Green
    "#FFEAA7", // Light Yellow
    "#DDA15E", // Tan
    "#BC6C25", // Brown
    "#6C5B7B", // Purple
    "#355C7D", // Dark Blue
    "#2A9D8F", // Turquoise
    "#E76F51", // Burnt Orange
    "#264653", // Dark Teal
    "#9D84B7", // Lavender
    "#A8DADC", // Light Blue
    "#457B9D", // Steel Blue
    "#1D3557", // Navy
    "#F4A261", // Light Orange
    "#E63946", // Crimson
    "#2A2E45", // Dark Slate
    "#9B59B6", // Purple
    "#3498DB", // Sky Blue
  ]

  // Use absolute value and modulo to get array index
  const index = Math.abs(hash) % colors.length
  return colors[index]
}

/**
 * Get color for a skill - use provided color or generate one
 */
export function getSkillColor(name: string, providedColor?: string): string {
  return providedColor || generateColorFromName(name)
}
