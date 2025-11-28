"use client"

export default function AboutWindow() {
  return (
    <div className="space-y-4">
      <div>
        <h2 className="text-2xl font-bold mb-2">Shubham Kumar Jha</h2>
        <p className="text-sm text-muted-foreground mb-4">Software Engineer</p>
      </div>

      <div className="space-y-3 text-sm">
        <div>
          <h3 className="font-semibold mb-1">About Me</h3>
          <p>
            Passionate software engineer with expertise in full-stack web development, cloud technologies, and modern
            frameworks. I love building scalable applications and solving complex problems.
          </p>
        </div>

        <div className="grid grid-cols-3 gap-4">
          <div className="bg-primary/10 p-2 rounded">
            <div className="font-bold text-primary">5+</div>
            <div className="text-xs">Years Experience</div>
          </div>
          <div className="bg-accent/10 p-2 rounded">
            <div className="font-bold text-accent">20+</div>
            <div className="text-xs">Projects Completed</div>
          </div>
          <div className="bg-secondary/10 p-2 rounded">
            <div className="font-bold text-secondary">100%</div>
            <div className="text-xs">Client Satisfaction</div>
          </div>
        </div>

        <div>
          <h3 className="font-semibold mb-1">Education</h3>
          <p className="text-xs">B.Tech in Computer Science</p>
          <p className="text-xs text-muted-foreground">Indian Institute of Technology</p>
        </div>
      </div>
    </div>
  )
}
