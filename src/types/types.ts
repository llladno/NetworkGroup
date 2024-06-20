export interface Modification {
    id: number,
    title: string,
    description: string,
    info: ModificationInfo,
    img: ModificationImg
}

export interface ModificationInfo {
    downloads: string,
    status: 'HOT' | 'NEW' | 'NONE',
    tags: string[]
}

export interface ModificationImg{
    preview: string,
    other: string[]
}