export enum TaskTypeKey {
    HEALTH = 'HEALTH',
    WORK = 'WORK',
    FAMILY = 'FAMILY',
    PERSONAL = 'PERSONAL',
    OTHER = 'OTHER'
}

export const TaskType: { [key in TaskTypeKey]: { name: string, icon: string } } = {
    [TaskTypeKey.HEALTH]: { name: 'Health', icon: '💊' },
    [TaskTypeKey.WORK]: { name: 'Work', icon: '💼' },
    [TaskTypeKey.FAMILY]: { name: 'Family', icon: '🏠' },
    [TaskTypeKey.PERSONAL]: { name: 'Personal', icon: '👤' },
    [TaskTypeKey.OTHER]: { name: 'Other', icon: '📌' }
};

// Type for use in interfaces
export type TaskTypeValue = typeof TaskType[TaskTypeKey];
