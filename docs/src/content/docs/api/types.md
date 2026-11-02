---
title: Types
description: Types API Documentation
---

## EmitterConfig
---

```luau
type EmitterConfig = {
	Adornee: BasePart | Attachment?,
	EmitterCFrame: CFrame?,
	EmitterSize: Vector3?,
	EmissionDirection: Enum.NormalId?,

	Shape: Enum.ParticleEmitterShape | (
        size: Vector3,
        style: Enum.ParticleEmitterShapeStyle,
        partial: number
    ) -> CFrame,

	ShapeStyle: Enum.ParticleEmitterShapeStyle?,
	ShapeInOut: Enum.ParticleEmitterShapeInOut?,
	ShapePartial: number?,
	
	Enabled: boolean?,
	Rate: number | NumberRange?,
	Amount: number | NumberRange?,
	TimeScale: number?,
    
	EmissionCullingEnabled: boolean?,
	AdaptiveEmissionEnabled: boolean?,
	MaxEmissionDistance: number?,

    Color: Color3 | ColorSequence?,
	Size: Vector3 | number | NumberSequence | {number | NumberSequence}?,
	Reflectance: number | NumberSequence?,
	Transparency: number | NumberSequence?,

	Directory: Instance?,
	Template: BasePart | Model | Attachment?,
	Emitter: Emitter?,
	Lifetime: number?,
	
	Speed: number | NumberRange?,
	Rotation: Vector3 | {NumberRange}?,
	RotSpeed: Vector3?,
	SpreadAngle: Vector2?,
	
	Acceleration: Vector3?,
	FaceVelocity: boolean?,
	LookAt: BasePart | Attachment | Camera | CFrame | Vector3?,
	LookAngle: CFrame?,
	LookStrength: number?,
	
	Drag: number?,
	RotDrag: number?,
	LockedToPart: boolean?,
	IgnoreAdorneeRotation: boolean?,
	VelocityInheritance: number?,
	WindAffectsDrag: boolean?,
	GravityInfluence: number?,
	
	CollisionsEnabled: boolean?,
	CollisionParams: RaycastParams?,
	Elasticity: number?,
	Friction: number?,
	
	OnUpdate: ((
		particle: Particle,
		deltaTime: number,
		cframe: CFrame,
		velocity: Vector3,
		size: Vector3 | number?
		) -> (CFrame | false?, Vector3 | false?, Vector3 | number | false?)
	)?,
	
	OnVisualUpdate: ((
		particle: Particle,
		deltaTime: number,
		color: Color3?,
		reflectance: number?,
		transparency: number?
		) -> (Color3 | false?, number | false?, number | false?)
	)?,
	
	ParticleCullingEnabled: boolean?,
	AdaptiveFramerateEnabled: boolean?,
	Framerate: number?,
	CacheEnabled: boolean?,
	OctreeExcluded: boolean?
}
```

Configuration parameters for new [Emitters](./emitter). Either `Adornee` or `EmitterCFrame` must be defined; All other properties are optional. Undefined properties will use default values (or read from the given `Template` instance where appropriate).

## ForceConfig

```luau
type ForceConfig = {
	Type: "Linear" | "Angular"?,
	Origin: BasePart | Vector3?,
	Strength: number?,
	Radius: number?,
	RadiusLimitEnabled: boolean?,
	EasingStyle: Enum.EasingStyle | NumberSequence | ((alpha: number) -> number)?,
	EasingDirection: Enum.EasingDirection?
}
```

Configuration parameters for new [Forces](./force).