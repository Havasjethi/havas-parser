
export type AccessModifier = 'public' | 'protected' | 'private' | 'default';
export type StaticModifier = 'static';
export type AbstractModifier = 'abstract';
export type ReadonlyModifier = 'readonly';

// export type MethodModifiers = AccessModifier | StaticModifier | AbstractModifier;
export type UnifiedModifier = AccessModifier | StaticModifier | ReadonlyModifier | AbstractModifier;
