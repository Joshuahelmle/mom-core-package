export declare enum RARITY {
    COMMON = "COMMON",
    UNCOMMON = "UNCOMMON",
    RARE = "RARE",
    EPIC = "EPIC",
    LEGENDARY = "LEGENDARY",
    MYTHIC = "MYTHIC"
}
export interface outputRefConditional {
    conditions: GameDataInput[];
    output: {
        lootTableId: string;
    };
}
export interface GameDataInput {
    itemMatch: string[];
    operation: string;
    quantity: number;
}
export interface GameDataRecipe {
    activeWhen: string | null;
    canHire: boolean;
    category: string;
    cooldownSeconds: number;
    description: string;
    durationSeconds: number;
    hideUntil: number | null;
    id: string;
    image: string;
    inputs: GameDataInput[];
    keywords: string[];
    mode: string | null;
    name: string;
    outputRef: {
        lootTableId: string;
    };
    outputRefConditional: outputRefConditional[];
    recipients: {
        itemMatch: string[];
        who: string;
    }[];
    requirements: GameDataInput[];
}
export declare const GDRECIPES: GameDataRecipe[];
export declare const GDLOOTTABLES: ({
    data: {
        group: number;
        min: number;
        id: string;
        weight: number;
        bezier: null;
        step: number;
        _transform: null;
        max: number;
    }[];
    id: string;
} | {
    data: {
        _transform: null;
        min: number;
        group: number;
        step: number;
        bezier: null;
        max: number;
        weight: number;
        id: string;
    }[];
    id: string;
} | {
    id: string;
    data: {
        bezier: null;
        id: string;
        step: number;
        _transform: null;
        weight: number;
        min: number;
        group: number;
        max: number;
    }[];
} | {
    id: string;
    data: {
        max: number;
        step: number;
        min: number;
        id: string;
        group: number;
        bezier: null;
        _transform: null;
        weight: number;
    }[];
} | {
    id: string;
    data: {
        id: string;
        group: number;
        weight: number;
        bezier: null;
        max: number;
        _transform: null;
        min: number;
        step: number;
    }[];
} | {
    data: {
        id: string;
        group: number;
        _transform: null;
        step: number;
        max: number;
        min: number;
        bezier: null;
        weight: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        max: number;
        bezier: null;
        min: number;
        id: string;
        _transform: null;
        step: number;
        group: number;
        weight: number;
    }[];
} | {
    data: {
        _transform: null;
        max: number;
        weight: number;
        id: string;
        min: number;
        step: number;
        group: number;
        bezier: null;
    }[];
    id: string;
} | {
    id: string;
    data: {
        min: number;
        weight: number;
        max: number;
        step: number;
        id: string;
        group: number;
        _transform: null;
        bezier: null;
    }[];
} | {
    data: {
        step: number;
        weight: number;
        min: number;
        bezier: null;
        _transform: null;
        id: string;
        max: number;
        group: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        max: number;
        group: number;
        step: number;
        bezier: null;
        _transform: null;
        id: string;
        min: number;
        weight: number;
    }[];
} | {
    id: string;
    data: {
        _transform: null;
        max: number;
        group: number;
        id: string;
        step: number;
        min: number;
        bezier: null;
        weight: number;
    }[];
} | {
    id: string;
    data: {
        weight: number;
        id: string;
        group: number;
        max: number;
        step: number;
        _transform: null;
        bezier: null;
        min: number;
    }[];
} | {
    id: string;
    data: {
        group: number;
        step: number;
        id: string;
        _transform: null;
        max: number;
        min: number;
        weight: number;
        bezier: null;
    }[];
} | {
    id: string;
    data: {
        group: number;
        _transform: null;
        min: number;
        weight: number;
        step: number;
        bezier: null;
        id: string;
        max: number;
    }[];
} | {
    data: {
        min: number;
        bezier: null;
        step: number;
        group: number;
        _transform: null;
        max: number;
        weight: number;
        id: string;
    }[];
    id: string;
} | {
    id: string;
    data: {
        id: string;
        max: number;
        _transform: null;
        min: number;
        bezier: null;
        step: number;
        group: number;
        weight: number;
    }[];
} | {
    data: {
        id: string;
        bezier: null;
        min: number;
        max: number;
        _transform: null;
        weight: number;
        group: number;
        step: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        group: number;
        weight: number;
        bezier: null;
        id: string;
        _transform: null;
        step: number;
        max: number;
        min: number;
    }[];
} | {
    data: {
        step: number;
        max: number;
        _transform: null;
        weight: number;
        group: number;
        bezier: null;
        id: string;
        min: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        step: number;
        bezier: null;
        id: string;
        group: number;
        _transform: null;
        min: number;
        weight: number;
        max: number;
    }[];
} | {
    data: {
        bezier: null;
        id: string;
        min: number;
        step: number;
        max: number;
        group: number;
        weight: number;
        _transform: null;
    }[];
    id: string;
} | {
    data: {
        group: number;
        max: number;
        _transform: null;
        min: number;
        id: string;
        bezier: null;
        step: number;
        weight: number;
    }[];
    id: string;
} | {
    data: {
        min: number;
        weight: number;
        group: number;
        id: string;
        step: number;
        max: number;
        _transform: null;
        bezier: null;
    }[];
    id: string;
} | {
    id: string;
    data: {
        group: number;
        _transform: null;
        bezier: null;
        id: string;
        max: number;
        min: number;
        step: number;
        weight: number;
    }[];
} | {
    id: string;
    data: {
        id: string;
        weight: number;
        group: number;
        step: number;
        bezier: null;
        min: number;
        _transform: null;
        max: number;
    }[];
} | {
    id: string;
    data: {
        _transform: null;
        group: number;
        id: string;
        bezier: null;
        max: number;
        min: number;
        step: number;
        weight: number;
    }[];
} | {
    data: {
        group: number;
        weight: number;
        step: number;
        max: number;
        id: string;
        _transform: null;
        min: number;
        bezier: null;
    }[];
    id: string;
} | {
    id: string;
    data: {
        id: string;
        min: number;
        group: number;
        _transform: null;
        max: number;
        weight: number;
        step: number;
        bezier: null;
    }[];
} | {
    id: string;
    data: {
        _transform: null;
        group: number;
        min: number;
        id: string;
        step: number;
        max: number;
        weight: number;
        bezier: null;
    }[];
} | {
    id: string;
    data: {
        bezier: null;
        step: number;
        _transform: null;
        group: number;
        weight: number;
        id: string;
        min: number;
        max: number;
    }[];
} | {
    id: string;
    data: {
        bezier: null;
        min: number;
        step: number;
        id: string;
        _transform: null;
        weight: number;
        max: number;
        group: number;
    }[];
} | {
    id: string;
    data: {
        group: number;
        max: number;
        step: number;
        weight: number;
        bezier: null;
        _transform: null;
        min: number;
        id: string;
    }[];
} | {
    data: {
        max: number;
        min: number;
        weight: number;
        step: number;
        _transform: null;
        group: number;
        bezier: null;
        id: string;
    }[];
    id: string;
} | {
    id: string;
    data: ({
        max: number;
        min: number;
        weight: number;
        _transform: null;
        group: number;
        id: string;
        step: number;
        bezier: null;
        dynamicPoolId?: undefined;
    } | {
        group: number;
        bezier: null;
        id: string;
        min: number;
        _transform: null;
        weight: number;
        dynamicPoolId: string;
        max: number;
        step: number;
    })[];
} | {
    data: {
        min: number;
        bezier: null;
        _transform: null;
        step: number;
        weight: number;
        id: string;
        group: number;
        max: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        weight: number;
        id: string;
        step: number;
        group: number;
        bezier: null;
        min: number;
        _transform: null;
        max: number;
    }[];
} | {
    id: string;
    data: {
        weight: number;
        group: number;
        bezier: null;
        step: number;
        min: number;
        id: string;
        _transform: null;
        max: number;
    }[];
} | {
    id: string;
    data: {
        group: number;
        id: string;
        min: number;
        bezier: null;
        max: number;
        _transform: null;
        weight: number;
        step: number;
    }[];
} | {
    data: {
        bezier: null;
        _transform: null;
        weight: number;
        step: number;
        group: number;
        id: string;
        min: number;
        max: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        id: string;
        _transform: null;
        weight: number;
        step: number;
        max: number;
        bezier: null;
        min: number;
        group: number;
    }[];
} | {
    id: string;
    data: {
        id: string;
        max: number;
        weight: number;
        min: number;
        step: number;
        group: number;
        bezier: null;
        _transform: null;
    }[];
} | {
    data: {
        max: number;
        group: number;
        id: string;
        min: number;
        bezier: null;
        step: number;
        weight: number;
        _transform: null;
    }[];
    id: string;
} | {
    data: {
        _transform: null;
        group: number;
        min: number;
        id: string;
        step: number;
        bezier: null;
        max: number;
        weight: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        group: number;
        id: string;
        step: number;
        max: number;
        bezier: null;
        _transform: null;
        min: number;
        weight: number;
    }[];
} | {
    id: string;
    data: {
        bezier: null;
        _transform: null;
        min: number;
        group: number;
        weight: number;
        id: string;
        max: number;
        step: number;
    }[];
} | {
    id: string;
    data: {
        id: string;
        step: number;
        min: number;
        group: number;
        bezier: null;
        max: number;
        weight: number;
        _transform: null;
    }[];
} | {
    id: string;
    data: {
        bezier: null;
        min: number;
        max: number;
        _transform: null;
        step: number;
        group: number;
        weight: number;
        id: string;
    }[];
} | {
    id: string;
    data: {
        min: number;
        bezier: null;
        weight: number;
        group: number;
        step: number;
        _transform: null;
        id: string;
        max: number;
    }[];
} | {
    id: string;
    data: {
        group: number;
        max: number;
        id: string;
        min: number;
        step: number;
        _transform: null;
        weight: number;
        bezier: null;
    }[];
} | {
    data: {
        id: string;
        step: number;
        _transform: null;
        weight: number;
        group: number;
        max: number;
        min: number;
        bezier: null;
    }[];
    id: string;
} | {
    data: {
        max: number;
        bezier: null;
        group: number;
        min: number;
        weight: number;
        _transform: null;
        id: string;
        step: number;
    }[];
    id: string;
} | {
    data: {
        group: number;
        max: number;
        step: number;
        _transform: null;
        weight: number;
        id: string;
        min: number;
        bezier: null;
    }[];
    id: string;
} | {
    id: string;
    data: {
        weight: number;
        bezier: null;
        _transform: null;
        min: number;
        id: string;
        step: number;
        max: number;
        group: number;
    }[];
} | {
    id: string;
    data: {
        bezier: null;
        group: number;
        min: number;
        max: number;
        id: string;
        _transform: null;
        step: number;
        weight: number;
    }[];
} | {
    data: {
        _transform: null;
        max: number;
        min: number;
        id: string;
        step: number;
        bezier: null;
        weight: number;
        group: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        min: number;
        bezier: null;
        max: number;
        _transform: null;
        step: number;
        group: number;
        id: string;
        weight: number;
    }[];
} | {
    data: {
        weight: number;
        bezier: null;
        max: number;
        min: number;
        id: string;
        step: number;
        group: number;
        _transform: null;
    }[];
    id: string;
} | {
    data: {
        bezier: null;
        _transform: null;
        step: number;
        weight: number;
        id: string;
        group: number;
        max: number;
        min: number;
    }[];
    id: string;
} | {
    data: {
        id: string;
        _transform: null;
        step: number;
        max: number;
        group: number;
        min: number;
        weight: number;
        bezier: null;
    }[];
    id: string;
} | {
    data: {
        id: string;
        max: number;
        bezier: null;
        min: number;
        weight: number;
        group: number;
        _transform: null;
        step: number;
    }[];
    id: string;
} | {
    data: {
        _transform: null;
        id: string;
        bezier: null;
        max: number;
        weight: number;
        min: number;
        group: number;
        step: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        id: string;
        group: number;
        _transform: null;
        step: number;
        max: number;
        min: number;
        bezier: null;
        weight: number;
    }[];
} | {
    data: {
        min: number;
        step: number;
        id: string;
        group: number;
        bezier: null;
        _transform: null;
        max: number;
        weight: number;
    }[];
    id: string;
} | {
    data: ({
        group: number;
        step: number;
        weight: number;
        max: number;
        bezier: null;
        min: number;
        _transform: null;
        id: string;
        dynamicPoolId?: undefined;
    } | {
        group: number;
        max: number;
        _transform: null;
        dynamicPoolId: string;
        bezier: null;
        step: number;
        min: number;
        id: string;
        weight: number;
    })[];
    id: string;
} | {
    data: {
        id: string;
        group: number;
        bezier: null;
        weight: number;
        step: number;
        max: number;
        min: number;
        _transform: null;
    }[];
    id: string;
} | {
    id: string;
    data: {
        min: number;
        bezier: null;
        id: string;
        group: number;
        max: number;
        weight: number;
        _transform: null;
        step: number;
    }[];
} | {
    id: string;
    data: ({
        weight: number;
        group: number;
        min: number;
        _transform: null;
        bezier: null;
        id: string;
        step: number;
        max: number;
        dynamicPoolId?: undefined;
    } | {
        step: number;
        _transform: null;
        group: number;
        bezier: null;
        max: number;
        dynamicPoolId: string;
        id: string;
        min: number;
        weight: number;
    })[];
} | {
    data: {
        min: number;
        group: number;
        id: string;
        max: number;
        weight: number;
        step: number;
        bezier: null;
        _transform: null;
    }[];
    id: string;
} | {
    data: {
        group: number;
        _transform: null;
        id: string;
        step: number;
        weight: number;
        bezier: null;
        min: number;
        max: number;
    }[];
    id: string;
} | {
    id: string;
    data: ({
        group: number;
        weight: number;
        id: string;
        _transform: null;
        step: number;
        min: number;
        max: number;
        bezier: null;
        dynamicPoolId?: undefined;
    } | {
        group: number;
        id: string;
        weight: number;
        max: number;
        _transform: null;
        dynamicPoolId: string;
        min: number;
        bezier: null;
        step: number;
    })[];
} | {
    data: ({
        id: string;
        group: number;
        bezier: null;
        _transform: null;
        weight: number;
        step: number;
        min: number;
        max: number;
        dynamicPoolId?: undefined;
    } | {
        id: string;
        step: number;
        dynamicPoolId: string;
        bezier: null;
        group: number;
        _transform: null;
        weight: number;
        max: number;
        min: number;
    })[];
    id: string;
} | {
    data: ({
        bezier: null;
        max: number;
        min: number;
        group: number;
        weight: number;
        id: string;
        step: number;
        _transform: null;
        dynamicPoolId?: undefined;
    } | {
        _transform: null;
        min: number;
        group: number;
        step: number;
        dynamicPoolId: string;
        weight: number;
        bezier: null;
        id: string;
        max: number;
    })[];
    id: string;
} | {
    id: string;
    data: ({
        bezier: null;
        id: string;
        _transform: null;
        step: number;
        min: number;
        max: number;
        weight: number;
        group: number;
        dynamicPoolId?: undefined;
    } | {
        step: number;
        id: string;
        group: number;
        bezier: null;
        weight: number;
        dynamicPoolId: string;
        min: number;
        _transform: null;
        max: number;
    })[];
} | {
    id: string;
    data: ({
        bezier: null;
        max: number;
        weight: number;
        id: string;
        min: number;
        _transform: null;
        group: number;
        step: number;
        dynamicPoolId?: undefined;
    } | {
        group: number;
        bezier: null;
        id: string;
        _transform: null;
        step: number;
        min: number;
        dynamicPoolId: string;
        max: number;
        weight: number;
    })[];
} | {
    id: string;
    data: {
        bezier: null;
        weight: number;
        group: number;
        step: number;
        min: number;
        max: number;
        id: string;
        _transform: null;
    }[];
} | {
    data: {
        min: number;
        step: number;
        bezier: null;
        max: number;
        group: number;
        _transform: null;
        id: string;
        weight: number;
    }[];
    id: string;
} | {
    data: {
        group: number;
        weight: number;
        id: string;
        bezier: null;
        _transform: null;
        step: number;
        min: number;
        max: number;
    }[];
    id: string;
} | {
    data: {
        group: number;
        bezier: null;
        max: number;
        _transform: null;
        id: string;
        weight: number;
        min: number;
        step: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        _transform: null;
        weight: number;
        id: string;
        min: number;
        step: number;
        bezier: null;
        group: number;
        max: number;
    }[];
} | {
    data: {
        _transform: null;
        max: number;
        weight: number;
        min: number;
        group: number;
        bezier: null;
        step: number;
        id: string;
    }[];
    id: string;
} | {
    id: string;
    data: {
        id: string;
        _transform: null;
        bezier: null;
        min: number;
        weight: number;
        group: number;
        max: number;
        step: number;
    }[];
} | {
    data: {
        min: number;
        bezier: null;
        weight: number;
        step: number;
        id: string;
        group: number;
        max: number;
        _transform: null;
    }[];
    id: string;
} | {
    data: {
        id: string;
        bezier: null;
        step: number;
        min: number;
        weight: number;
        group: number;
        max: number;
        _transform: null;
    }[];
    id: string;
} | {
    id: string;
    data: {
        id: string;
        max: number;
        weight: number;
        bezier: null;
        _transform: null;
        group: number;
        min: number;
        step: number;
    }[];
} | {
    data: {
        step: number;
        bezier: null;
        min: number;
        group: number;
        id: string;
        weight: number;
        _transform: null;
        max: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        weight: number;
        min: number;
        id: string;
        step: number;
        bezier: null;
        max: number;
        _transform: null;
        group: number;
    }[];
} | {
    data: {
        step: number;
        group: number;
        id: string;
        min: number;
        weight: number;
        bezier: null;
        _transform: null;
        max: number;
    }[];
    id: string;
} | {
    id: string;
    data: ({
        group: number;
        id: string;
        _transform: null;
        step: number;
        min: number;
        bezier: null;
        max: number;
        weight: number;
        dynamicPoolId?: undefined;
    } | {
        weight: number;
        step: number;
        min: number;
        _transform: null;
        id: string;
        max: number;
        group: number;
        dynamicPoolId: string;
        bezier: null;
    })[];
} | {
    id: string;
    data: {
        bezier: null;
        id: string;
        _transform: null;
        max: number;
        group: number;
        weight: number;
        step: number;
        min: number;
    }[];
} | {
    data: {
        max: number;
        _transform: null;
        group: number;
        bezier: null;
        min: number;
        id: string;
        step: number;
        weight: number;
    }[];
    id: string;
} | {
    data: ({
        _transform: null;
        group: number;
        max: number;
        bezier: null;
        min: number;
        step: number;
        id: string;
        weight: number;
        dynamicPoolId?: undefined;
    } | {
        max: number;
        min: number;
        _transform: null;
        dynamicPoolId: string;
        group: number;
        weight: number;
        id: string;
        bezier: null;
        step: number;
    })[];
    id: string;
} | {
    data: {
        max: number;
        step: number;
        _transform: null;
        min: number;
        weight: number;
        bezier: null;
        group: number;
        id: string;
    }[];
    id: string;
} | {
    data: {
        bezier: null;
        weight: number;
        max: number;
        min: number;
        _transform: null;
        group: number;
        step: number;
        id: string;
    }[];
    id: string;
} | {
    data: ({
        id: string;
        weight: number;
        min: number;
        max: number;
        step: number;
        bezier: null;
        group: number;
        _transform: null;
        dynamicPoolId?: undefined;
    } | {
        dynamicPoolId: string;
        group: number;
        min: number;
        bezier: null;
        step: number;
        id: string;
        _transform: null;
        weight: number;
        max: number;
    })[];
    id: string;
} | {
    data: ({
        min: number;
        bezier: null;
        step: number;
        weight: number;
        group: number;
        _transform: null;
        max: number;
        id: string;
        dynamicPoolId?: undefined;
    } | {
        max: number;
        group: number;
        dynamicPoolId: string;
        id: string;
        min: number;
        weight: number;
        bezier: null;
        _transform: null;
        step: number;
    })[];
    id: string;
} | {
    data: ({
        group: number;
        max: number;
        min: number;
        step: number;
        bezier: null;
        weight: number;
        _transform: null;
        id: string;
        dynamicPoolId?: undefined;
    } | {
        id: string;
        bezier: null;
        step: number;
        max: number;
        _transform: null;
        min: number;
        group: number;
        dynamicPoolId: string;
        weight: number;
    })[];
    id: string;
} | {
    id: string;
    data: ({
        max: number;
        id: string;
        group: number;
        _transform: null;
        min: number;
        bezier: null;
        weight: number;
        step: number;
        dynamicPoolId?: undefined;
    } | {
        bezier: null;
        min: number;
        id: string;
        step: number;
        dynamicPoolId: string;
        _transform: null;
        max: number;
        weight: number;
        group: number;
    })[];
} | {
    id: string;
    data: ({
        bezier: null;
        _transform: null;
        min: number;
        weight: number;
        group: number;
        step: number;
        max: number;
        id: string;
        dynamicPoolId?: undefined;
    } | {
        dynamicPoolId: string;
        _transform: null;
        bezier: null;
        min: number;
        group: number;
        weight: number;
        max: number;
        step: number;
        id: string;
    })[];
} | {
    data: {
        id: string;
        step: number;
        _transform: null;
        max: number;
        bezier: null;
        weight: number;
        group: number;
        min: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        step: number;
        max: number;
        _transform: null;
        weight: number;
        min: number;
        id: string;
        bezier: null;
        group: number;
    }[];
} | {
    id: string;
    data: {
        bezier: null;
        group: number;
        min: number;
        step: number;
        weight: number;
        _transform: null;
        id: string;
        max: number;
    }[];
} | {
    data: {
        _transform: null;
        weight: number;
        max: number;
        id: string;
        step: number;
        min: number;
        bezier: null;
        group: number;
    }[];
    id: string;
} | {
    data: {
        weight: number;
        dynamicPoolId: string;
        min: number;
        bezier: null;
        max: number;
        step: number;
        group: number;
        id: string;
        _transform: null;
    }[];
    id: string;
} | {
    id: string;
    data: {
        _transform: null;
        group: number;
        id: string;
        bezier: null;
        max: number;
        weight: number;
        step: number;
        dynamicPoolId: string;
        min: number;
    }[];
} | {
    id: string;
    data: {
        weight: number;
        bezier: null;
        step: number;
        _transform: null;
        group: number;
        dynamicPoolId: string;
        max: number;
        min: number;
        id: string;
    }[];
} | {
    id: string;
    data: {
        bezier: null;
        _transform: null;
        dynamicPoolId: string;
        min: number;
        group: number;
        weight: number;
        step: number;
        id: string;
        max: number;
    }[];
} | {
    id: string;
    data: {
        group: number;
        bezier: null;
        weight: number;
        id: string;
        _transform: null;
        dynamicPoolId: string;
        step: number;
        max: number;
        min: number;
    }[];
} | {
    id: string;
    data: {
        min: number;
        dynamicPoolId: string;
        max: number;
        weight: number;
        bezier: null;
        _transform: null;
        step: number;
        group: number;
        id: string;
    }[];
} | {
    id: string;
    data: {
        dynamicPoolId: string;
        bezier: null;
        group: number;
        _transform: null;
        weight: number;
        id: string;
        max: number;
        min: number;
        step: number;
    }[];
} | {
    id: string;
    data: {
        dynamicPoolId: string;
        group: number;
        bezier: null;
        max: number;
        id: string;
        _transform: null;
        weight: number;
        step: number;
        min: number;
    }[];
} | {
    id: string;
    data: {
        dynamicPoolId: string;
        min: number;
        group: number;
        _transform: null;
        step: number;
        bezier: null;
        max: number;
        weight: number;
        id: string;
    }[];
} | {
    data: {
        group: number;
        min: number;
        weight: number;
        dynamicPoolId: string;
        max: number;
        step: number;
        _transform: null;
        bezier: null;
        id: string;
    }[];
    id: string;
} | {
    id: string;
    data: {
        min: number;
        max: number;
        weight: number;
        bezier: null;
        dynamicPoolId: string;
        step: number;
        group: number;
        id: string;
        _transform: null;
    }[];
} | {
    id: string;
    data: {
        weight: number;
        id: string;
        group: number;
        _transform: null;
        min: number;
        bezier: null;
        dynamicPoolId: string;
        max: number;
        step: number;
    }[];
} | {
    id: string;
    data: {
        min: number;
        _transform: null;
        weight: number;
        step: number;
        dynamicPoolId: string;
        bezier: null;
        max: number;
        group: number;
        id: string;
    }[];
} | {
    data: {
        step: number;
        max: number;
        weight: number;
        group: number;
        bezier: null;
        min: number;
        dynamicPoolId: string;
        _transform: null;
        id: string;
    }[];
    id: string;
} | {
    id: string;
    data: {
        weight: number;
        min: number;
        step: number;
        id: string;
        _transform: null;
        dynamicPoolId: string;
        bezier: null;
        group: number;
        max: number;
    }[];
} | {
    id: string;
    data: {
        _transform: null;
        dynamicPoolId: string;
        min: number;
        step: number;
        bezier: null;
        weight: number;
        group: number;
        id: string;
        max: number;
    }[];
} | {
    data: {
        group: number;
        dynamicPoolId: string;
        weight: number;
        _transform: null;
        step: number;
        bezier: null;
        max: number;
        id: string;
        min: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        step: number;
        dynamicPoolId: string;
        _transform: null;
        max: number;
        bezier: null;
        min: number;
        group: number;
        id: string;
        weight: number;
    }[];
} | {
    id: string;
    data: {
        bezier: null;
        step: number;
        max: number;
        _transform: null;
        weight: number;
        dynamicPoolId: string;
        id: string;
        group: number;
        min: number;
    }[];
} | {
    id: string;
    data: {
        bezier: null;
        id: string;
        min: number;
        step: number;
        group: number;
        dynamicPoolId: string;
        max: number;
        _transform: null;
        weight: number;
    }[];
} | {
    data: {
        group: number;
        bezier: null;
        _transform: null;
        step: number;
        min: number;
        weight: number;
        id: string;
        max: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        step: number;
        bezier: null;
        id: string;
        _transform: null;
        min: number;
        group: number;
        weight: number;
        max: number;
    }[];
} | {
    id: string;
    data: {
        id: string;
        group: number;
        _transform: null;
        bezier: null;
        min: number;
        max: number;
        step: number;
        weight: number;
    }[];
} | {
    id: string;
    data: {
        group: number;
        _transform: null;
        max: number;
        weight: number;
        step: number;
        min: number;
        id: string;
        bezier: null;
    }[];
} | {
    data: {
        min: number;
        group: number;
        _transform: null;
        weight: number;
        step: number;
        max: number;
        bezier: null;
        id: string;
    }[];
    id: string;
} | {
    id: string;
    data: ({
        id: string;
        group: number;
        max: number;
        weight: number;
        bezier: null;
        _transform: null;
        min: number;
        step: number;
        dynamicPoolId?: undefined;
    } | {
        group: number;
        bezier: null;
        dynamicPoolId: string;
        _transform: null;
        id: string;
        min: number;
        step: number;
        weight: number;
        max: number;
    })[];
} | {
    data: {
        min: number;
        bezier: null;
        step: number;
        _transform: null;
        max: number;
        weight: number;
        id: string;
        group: number;
    }[];
    id: string;
} | {
    data: {
        id: string;
        bezier: null;
        _transform: null;
        group: number;
        min: number;
        weight: number;
        step: number;
        max: number;
    }[];
    id: string;
} | {
    data: ({
        max: number;
        min: number;
        id: string;
        bezier: null;
        group: number;
        _transform: null;
        weight: number;
        step: number;
        dynamicPoolId?: undefined;
    } | {
        group: number;
        bezier: null;
        min: number;
        step: number;
        max: number;
        _transform: null;
        weight: number;
        id: string;
        dynamicPoolId: string;
    })[];
    id: string;
} | {
    id: string;
    data: {
        min: number;
        weight: number;
        group: number;
        _transform: null;
        max: number;
        step: number;
        bezier: null;
        id: string;
    }[];
} | {
    data: {
        weight: number;
        max: number;
        group: number;
        _transform: null;
        step: number;
        min: number;
        bezier: null;
        id: string;
    }[];
    id: string;
} | {
    data: ({
        bezier: null;
        _transform: null;
        min: number;
        step: number;
        group: number;
        id: string;
        weight: number;
        max: number;
        dynamicPoolId?: undefined;
    } | {
        group: number;
        _transform: null;
        bezier: null;
        id: string;
        weight: number;
        max: number;
        min: number;
        dynamicPoolId: string;
        step: number;
    })[];
    id: string;
} | {
    id: string;
    data: ({
        group: number;
        _transform: null;
        bezier: null;
        max: number;
        step: number;
        min: number;
        id: string;
        weight: number;
        dynamicPoolId?: undefined;
    } | {
        id: string;
        step: number;
        weight: number;
        _transform: null;
        dynamicPoolId: string;
        group: number;
        bezier: null;
        min: number;
        max: number;
    })[];
} | {
    id: string;
    data: ({
        group: number;
        step: number;
        max: number;
        weight: number;
        bezier: null;
        _transform: null;
        min: number;
        id: string;
        dynamicPoolId?: undefined;
    } | {
        weight: number;
        bezier: null;
        group: number;
        min: number;
        id: string;
        dynamicPoolId: string;
        _transform: null;
        max: number;
        step: number;
    })[];
} | {
    data: ({
        _transform: null;
        group: number;
        weight: number;
        max: number;
        id: string;
        bezier: null;
        step: number;
        min: number;
        dynamicPoolId?: undefined;
    } | {
        group: number;
        _transform: null;
        weight: number;
        step: number;
        bezier: null;
        id: string;
        min: number;
        max: number;
        dynamicPoolId: string;
    })[];
    id: string;
} | {
    data: ({
        group: number;
        bezier: null;
        id: string;
        min: number;
        step: number;
        _transform: null;
        max: number;
        weight: number;
        dynamicPoolId?: undefined;
    } | {
        group: number;
        min: number;
        weight: number;
        step: number;
        dynamicPoolId: string;
        max: number;
        bezier: null;
        id: string;
        _transform: null;
    })[];
    id: string;
} | {
    id: string;
    data: {
        _transform: null;
        id: string;
        min: number;
        max: number;
        bezier: null;
        weight: number;
        step: number;
        group: number;
    }[];
} | {
    id: string;
    data: {
        group: number;
        bezier: null;
        id: string;
        step: number;
        _transform: null;
        max: number;
        min: number;
        weight: number;
    }[];
} | {
    data: {
        weight: number;
        group: number;
        min: number;
        bezier: null;
        step: number;
        id: string;
        max: number;
        _transform: null;
    }[];
    id: string;
} | {
    id: string;
    data: {
        bezier: null;
        group: number;
        id: string;
        weight: number;
        step: number;
        max: number;
        _transform: null;
        min: number;
    }[];
} | {
    data: {
        weight: number;
        _transform: null;
        bezier: null;
        group: number;
        step: number;
        id: string;
        min: number;
        max: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        bezier: null;
        weight: number;
        min: number;
        _transform: null;
        max: number;
        step: number;
        id: string;
        group: number;
    }[];
} | {
    id: string;
    data: {
        min: number;
        step: number;
        weight: number;
        max: number;
        id: string;
        group: number;
        bezier: null;
        _transform: null;
    }[];
} | {
    data: {
        weight: number;
        step: number;
        min: number;
        group: number;
        bezier: null;
        _transform: null;
        max: number;
        id: string;
    }[];
    id: string;
} | {
    data: {
        bezier: null;
        step: number;
        id: string;
        min: number;
        weight: number;
        _transform: null;
        max: number;
        group: number;
    }[];
    id: string;
} | {
    id: string;
    data: ({
        id: string;
        step: number;
        min: number;
        bezier: null;
        max: number;
        weight: number;
        _transform: null;
        group: number;
        dynamicPoolId?: undefined;
    } | {
        weight: number;
        group: number;
        dynamicPoolId: string;
        min: number;
        bezier: null;
        step: number;
        max: number;
        id: string;
        _transform: null;
    })[];
} | {
    id: string;
    data: {
        _transform: null;
        bezier: null;
        id: string;
        min: number;
        group: number;
        max: number;
        weight: number;
        step: number;
    }[];
} | {
    id: string;
    data: {
        bezier: null;
        min: number;
        id: string;
        _transform: null;
        group: number;
        step: number;
        max: number;
        weight: number;
    }[];
} | {
    id: string;
    data: ({
        group: number;
        step: number;
        min: number;
        bezier: null;
        max: number;
        _transform: null;
        weight: number;
        id: string;
        dynamicPoolId?: undefined;
    } | {
        group: number;
        _transform: null;
        id: string;
        max: number;
        bezier: null;
        step: number;
        dynamicPoolId: string;
        min: number;
        weight: number;
    })[];
} | {
    id: string;
    data: {
        bezier: null;
        min: number;
        step: number;
        weight: number;
        _transform: null;
        id: string;
        max: number;
        group: number;
    }[];
} | {
    id: string;
    data: {
        group: number;
        _transform: null;
        min: number;
        bezier: null;
        max: number;
        weight: number;
        id: string;
        step: number;
    }[];
} | {
    data: ({
        id: string;
        max: number;
        _transform: null;
        min: number;
        step: number;
        group: number;
        bezier: null;
        weight: number;
        dynamicPoolId?: undefined;
    } | {
        min: number;
        bezier: null;
        weight: number;
        id: string;
        group: number;
        _transform: null;
        max: number;
        dynamicPoolId: string;
        step: number;
    })[];
    id: string;
} | {
    id: string;
    data: ({
        max: number;
        group: number;
        weight: number;
        id: string;
        bezier: null;
        _transform: null;
        step: number;
        min: number;
        dynamicPoolId?: undefined;
    } | {
        step: number;
        _transform: null;
        dynamicPoolId: string;
        min: number;
        group: number;
        weight: number;
        id: string;
        max: number;
        bezier: null;
    })[];
} | {
    id: string;
    data: ({
        id: string;
        max: number;
        _transform: null;
        group: number;
        step: number;
        weight: number;
        min: number;
        bezier: null;
        dynamicPoolId?: undefined;
    } | {
        _transform: null;
        step: number;
        dynamicPoolId: string;
        group: number;
        min: number;
        weight: number;
        bezier: null;
        max: number;
        id: string;
    })[];
} | {
    id: string;
    data: ({
        id: string;
        bezier: null;
        group: number;
        _transform: null;
        step: number;
        min: number;
        max: number;
        weight: number;
        dynamicPoolId?: undefined;
    } | {
        group: number;
        id: string;
        max: number;
        dynamicPoolId: string;
        step: number;
        weight: number;
        bezier: null;
        _transform: null;
        min: number;
    })[];
} | {
    data: ({
        id: string;
        step: number;
        weight: number;
        bezier: null;
        min: number;
        _transform: null;
        group: number;
        max: number;
        dynamicPoolId?: undefined;
    } | {
        bezier: null;
        min: number;
        weight: number;
        group: number;
        _transform: null;
        max: number;
        dynamicPoolId: string;
        id: string;
        step: number;
    })[];
    id: string;
} | {
    id: string;
    data: {
        bezier: null;
        step: number;
        id: string;
        weight: number;
        group: number;
        min: number;
        _transform: null;
        max: number;
    }[];
} | {
    id: string;
    data: {
        id: string;
        max: number;
        group: number;
        _transform: null;
        min: number;
        step: number;
        bezier: null;
        weight: number;
    }[];
} | {
    data: {
        min: number;
        max: number;
        bezier: null;
        weight: number;
        step: number;
        group: number;
        id: string;
        _transform: null;
    }[];
    id: string;
} | {
    id: string;
    data: {
        step: number;
        _transform: null;
        bezier: null;
        min: number;
        max: number;
        id: string;
        group: number;
        weight: number;
    }[];
} | {
    id: string;
    data: {
        _transform: null;
        bezier: null;
        group: number;
        step: number;
        dynamicPoolId: string;
        max: number;
        id: string;
        min: number;
        weight: number;
    }[];
} | {
    id: string;
    data: {
        group: number;
        max: number;
        id: string;
        step: number;
        _transform: null;
        bezier: null;
        weight: number;
        min: number;
        dynamicPoolId: string;
    }[];
} | {
    id: string;
    data: {
        dynamicPoolId: string;
        weight: number;
        id: string;
        _transform: null;
        bezier: null;
        step: number;
        min: number;
        max: number;
        group: number;
    }[];
} | {
    id: string;
    data: {
        _transform: null;
        weight: number;
        step: number;
        bezier: null;
        dynamicPoolId: string;
        max: number;
        group: number;
        min: number;
        id: string;
    }[];
} | {
    id: string;
    data: {
        _transform: null;
        group: number;
        step: number;
        bezier: null;
        min: number;
        dynamicPoolId: string;
        id: string;
        max: number;
        weight: number;
    }[];
} | {
    data: {
        max: number;
        weight: number;
        dynamicPoolId: string;
        step: number;
        id: string;
        group: number;
        bezier: null;
        _transform: null;
        min: number;
    }[];
    id: string;
} | {
    data: {
        dynamicPoolId: string;
        max: number;
        weight: number;
        bezier: null;
        _transform: null;
        step: number;
        id: string;
        min: number;
        group: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        weight: number;
        group: number;
        min: number;
        _transform: null;
        max: number;
        dynamicPoolId: string;
        bezier: null;
        id: string;
        step: number;
    }[];
} | {
    data: {
        min: number;
        step: number;
        _transform: null;
        group: number;
        weight: number;
        id: string;
        max: number;
        dynamicPoolId: string;
        bezier: null;
    }[];
    id: string;
} | {
    data: {
        bezier: null;
        step: number;
        id: string;
        weight: number;
        max: number;
        group: number;
        dynamicPoolId: string;
        _transform: null;
        min: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        weight: number;
        dynamicPoolId: string;
        bezier: null;
        _transform: null;
        id: string;
        step: number;
        group: number;
        min: number;
        max: number;
    }[];
} | {
    data: {
        bezier: null;
        weight: number;
        step: number;
        min: number;
        group: number;
        id: string;
        max: number;
        dynamicPoolId: string;
        _transform: null;
    }[];
    id: string;
} | {
    id: string;
    data: {
        min: number;
        max: number;
        weight: number;
        id: string;
        bezier: null;
        step: number;
        dynamicPoolId: string;
        group: number;
        _transform: null;
    }[];
} | {
    data: {
        max: number;
        _transform: null;
        dynamicPoolId: string;
        bezier: null;
        min: number;
        weight: number;
        group: number;
        step: number;
        id: string;
    }[];
    id: string;
} | {
    id: string;
    data: {
        id: string;
        bezier: null;
        _transform: null;
        weight: number;
        max: number;
        group: number;
        min: number;
        step: number;
        dynamicPoolId: string;
    }[];
} | {
    id: string;
    data: {
        min: number;
        group: number;
        dynamicPoolId: string;
        _transform: null;
        bezier: null;
        step: number;
        weight: number;
        id: string;
        max: number;
    }[];
} | {
    id: string;
    data: {
        step: number;
        min: number;
        max: number;
        dynamicPoolId: string;
        id: string;
        group: number;
        bezier: null;
        weight: number;
        _transform: null;
    }[];
} | {
    data: {
        id: string;
        _transform: null;
        min: number;
        weight: number;
        step: number;
        group: number;
        bezier: null;
        max: number;
        dynamicPoolId: string;
    }[];
    id: string;
} | {
    data: {
        weight: number;
        _transform: null;
        max: number;
        id: string;
        step: number;
        dynamicPoolId: string;
        min: number;
        group: number;
        bezier: null;
    }[];
    id: string;
} | {
    id: string;
    data: {
        group: number;
        _transform: null;
        min: number;
        dynamicPoolId: string;
        bezier: null;
        id: string;
        step: number;
        weight: number;
        max: number;
    }[];
} | {
    data: {
        _transform: null;
        step: number;
        group: number;
        min: number;
        weight: number;
        dynamicPoolId: string;
        bezier: null;
        id: string;
        max: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        bezier: null;
        min: number;
        id: string;
        _transform: null;
        weight: number;
        dynamicPoolId: string;
        max: number;
        group: number;
        step: number;
    }[];
} | {
    id: string;
    data: {
        min: number;
        group: number;
        bezier: null;
        _transform: null;
        dynamicPoolId: string;
        max: number;
        step: number;
        id: string;
        weight: number;
    }[];
} | {
    id: string;
    data: {
        max: number;
        id: string;
        group: number;
        min: number;
        weight: number;
        step: number;
        dynamicPoolId: string;
        _transform: null;
        bezier: null;
    }[];
} | {
    id: string;
    data: {
        step: number;
        bezier: null;
        weight: number;
        min: number;
        max: number;
        _transform: null;
        group: number;
        id: string;
        dynamicPoolId: string;
    }[];
} | {
    data: {
        id: string;
        min: number;
        group: number;
        bezier: null;
        weight: number;
        _transform: null;
        max: number;
        step: number;
        dynamicPoolId: string;
    }[];
    id: string;
} | {
    id: string;
    data: {
        dynamicPoolId: string;
        id: string;
        step: number;
        bezier: null;
        max: number;
        _transform: null;
        group: number;
        weight: number;
        min: number;
    }[];
} | {
    id: string;
    data: {
        dynamicPoolId: string;
        group: number;
        min: number;
        max: number;
        weight: number;
        step: number;
        _transform: null;
        bezier: null;
        id: string;
    }[];
} | {
    data: {
        _transform: null;
        bezier: null;
        group: number;
        max: number;
        id: string;
        weight: number;
        dynamicPoolId: string;
        step: number;
        min: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        dynamicPoolId: string;
        _transform: null;
        step: number;
        id: string;
        min: number;
        bezier: null;
        max: number;
        group: number;
        weight: number;
    }[];
} | {
    id: string;
    data: {
        step: number;
        group: number;
        weight: number;
        max: number;
        id: string;
        _transform: null;
        min: number;
        dynamicPoolId: string;
        bezier: null;
    }[];
} | {
    id: string;
    data: {
        max: number;
        dynamicPoolId: string;
        bezier: null;
        id: string;
        _transform: null;
        weight: number;
        step: number;
        min: number;
        group: number;
    }[];
} | {
    id: string;
    data: {
        dynamicPoolId: string;
        weight: number;
        _transform: null;
        max: number;
        id: string;
        bezier: null;
        min: number;
        group: number;
        step: number;
    }[];
} | {
    data: {
        max: number;
        bezier: null;
        dynamicPoolId: string;
        min: number;
        group: number;
        id: string;
        _transform: null;
        step: number;
        weight: number;
    }[];
    id: string;
} | {
    data: {
        weight: number;
        min: number;
        max: number;
        dynamicPoolId: string;
        _transform: null;
        step: number;
        group: number;
        bezier: null;
        id: string;
    }[];
    id: string;
} | {
    id: string;
    data: {
        max: number;
        _transform: null;
        min: number;
        group: number;
        dynamicPoolId: string;
        step: number;
        bezier: null;
        id: string;
        weight: number;
    }[];
} | {
    id: string;
    data: {
        group: number;
        step: number;
        max: number;
        weight: number;
        dynamicPoolId: string;
        min: number;
        _transform: null;
        bezier: null;
        id: string;
    }[];
} | {
    data: {
        min: number;
        max: number;
        weight: number;
        step: number;
        _transform: null;
        group: number;
        dynamicPoolId: string;
        id: string;
        bezier: null;
    }[];
    id: string;
} | {
    id: string;
    data: {
        min: number;
        step: number;
        group: number;
        id: string;
        bezier: null;
        max: number;
        _transform: null;
        dynamicPoolId: string;
        weight: number;
    }[];
} | {
    id: string;
    data: {
        _transform: null;
        dynamicPoolId: string;
        bezier: null;
        id: string;
        step: number;
        group: number;
        weight: number;
        min: number;
        max: number;
    }[];
} | {
    id: string;
    data: {
        group: number;
        max: number;
        min: number;
        bezier: null;
        _transform: null;
        id: string;
        step: number;
        weight: number;
    }[];
} | {
    id: string;
    data: {
        id: string;
        min: number;
        max: number;
        group: number;
        step: number;
        _transform: null;
        weight: number;
        bezier: null;
    }[];
} | {
    data: {
        _transform: null;
        group: number;
        min: number;
        bezier: null;
        weight: number;
        max: number;
        step: number;
        id: string;
    }[];
    id: string;
} | {
    id: string;
    data: {
        weight: number;
        group: number;
        id: string;
        _transform: null;
        step: number;
        min: number;
        bezier: null;
        max: number;
    }[];
} | {
    id: string;
    data: {
        id: string;
        group: number;
        min: number;
        step: number;
        max: number;
        weight: number;
        bezier: null;
        _transform: null;
    }[];
} | {
    id: string;
    data: ({
        group: number;
        min: number;
        weight: number;
        max: number;
        bezier: null;
        _transform: null;
        step: number;
        id: string;
        dynamicPoolId?: undefined;
    } | {
        bezier: null;
        max: number;
        id: string;
        _transform: null;
        weight: number;
        step: number;
        group: number;
        dynamicPoolId: string;
        min: number;
    })[];
} | {
    data: {
        bezier: null;
        id: string;
        min: number;
        max: number;
        weight: number;
        step: number;
        group: number;
        _transform: null;
    }[];
    id: string;
} | {
    id: string;
    data: {
        bezier: null;
        max: number;
        group: number;
        _transform: null;
        min: number;
        weight: number;
        id: string;
        step: number;
    }[];
} | {
    id: string;
    data: ({
        bezier: null;
        step: number;
        min: number;
        id: string;
        group: number;
        max: number;
        _transform: null;
        weight: number;
        dynamicPoolId?: undefined;
    } | {
        bezier: null;
        step: number;
        min: number;
        max: number;
        _transform: null;
        dynamicPoolId: string;
        group: number;
        id: string;
        weight: number;
    })[];
} | {
    id: string;
    data: {
        weight: number;
        group: number;
        max: number;
        bezier: null;
        _transform: null;
        step: number;
        min: number;
        id: string;
    }[];
} | {
    id: string;
    data: {
        weight: number;
        _transform: null;
        id: string;
        bezier: null;
        min: number;
        step: number;
        group: number;
        max: number;
    }[];
} | {
    id: string;
    data: ({
        group: number;
        min: number;
        max: number;
        bezier: null;
        weight: number;
        step: number;
        id: string;
        _transform: null;
        dynamicPoolId?: undefined;
    } | {
        weight: number;
        id: string;
        bezier: null;
        group: number;
        min: number;
        max: number;
        dynamicPoolId: string;
        _transform: null;
        step: number;
    })[];
} | {
    id: string;
    data: ({
        group: number;
        bezier: null;
        min: number;
        weight: number;
        id: string;
        _transform: null;
        max: number;
        step: number;
        dynamicPoolId?: undefined;
    } | {
        group: number;
        bezier: null;
        step: number;
        dynamicPoolId: string;
        min: number;
        max: number;
        _transform: null;
        weight: number;
        id: string;
    })[];
} | {
    id: string;
    data: ({
        min: number;
        bezier: null;
        _transform: null;
        max: number;
        weight: number;
        step: number;
        id: string;
        group: number;
        dynamicPoolId?: undefined;
    } | {
        max: number;
        min: number;
        group: number;
        _transform: null;
        weight: number;
        step: number;
        dynamicPoolId: string;
        id: string;
        bezier: null;
    })[];
} | {
    data: ({
        step: number;
        weight: number;
        _transform: null;
        id: string;
        max: number;
        group: number;
        bezier: null;
        min: number;
        dynamicPoolId?: undefined;
    } | {
        _transform: null;
        weight: number;
        group: number;
        id: string;
        min: number;
        max: number;
        dynamicPoolId: string;
        bezier: null;
        step: number;
    })[];
    id: string;
} | {
    data: ({
        bezier: null;
        id: string;
        max: number;
        weight: number;
        group: number;
        min: number;
        _transform: null;
        step: number;
        dynamicPoolId?: undefined;
    } | {
        id: string;
        _transform: null;
        group: number;
        weight: number;
        step: number;
        dynamicPoolId: string;
        min: number;
        max: number;
        bezier: null;
    })[];
    id: string;
} | {
    data: {
        group: number;
        _transform: null;
        max: number;
        bezier: null;
        min: number;
        weight: number;
        id: string;
        step: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        step: number;
        group: number;
        min: number;
        weight: number;
        bezier: null;
        max: number;
        _transform: null;
        id: string;
    }[];
} | {
    data: {
        min: number;
        id: string;
        _transform: null;
        group: number;
        step: number;
        weight: number;
        bezier: null;
        max: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        bezier: null;
        max: number;
        _transform: null;
        group: number;
        step: number;
        weight: number;
        min: number;
        id: string;
    }[];
} | {
    data: {
        bezier: null;
        weight: number;
        _transform: null;
        step: number;
        max: number;
        min: number;
        id: string;
        group: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        _transform: null;
        bezier: null;
        id: string;
        max: number;
        weight: number;
        step: number;
        group: number;
        min: number;
    }[];
} | {
    id: string;
    data: {
        bezier: null;
        step: number;
        weight: number;
        min: number;
        _transform: null;
        group: number;
        id: string;
        max: number;
    }[];
} | {
    id: string;
    data: {
        step: number;
        max: number;
        _transform: null;
        min: number;
        group: number;
        weight: number;
        bezier: null;
        id: string;
    }[];
} | {
    id: string;
    data: {
        bezier: null;
        min: number;
        id: string;
        step: number;
        _transform: null;
        max: number;
        group: number;
        weight: number;
    }[];
} | {
    id: string;
    data: ({
        group: number;
        id: string;
        bezier: null;
        _transform: null;
        step: number;
        weight: number;
        max: number;
        min: number;
        dynamicPoolId?: undefined;
    } | {
        step: number;
        max: number;
        id: string;
        bezier: null;
        weight: number;
        min: number;
        group: number;
        dynamicPoolId: string;
        _transform: null;
    })[];
} | {
    id: string;
    data: {
        min: number;
        bezier: null;
        weight: number;
        max: number;
        group: number;
        step: number;
        id: string;
        _transform: null;
    }[];
} | {
    id: string;
    data: {
        step: number;
        _transform: null;
        min: number;
        weight: number;
        group: number;
        bezier: null;
        max: number;
        id: string;
    }[];
} | {
    data: ({
        _transform: null;
        group: number;
        id: string;
        min: number;
        bezier: null;
        max: number;
        step: number;
        weight: number;
        dynamicPoolId?: undefined;
    } | {
        step: number;
        group: number;
        min: number;
        weight: number;
        bezier: null;
        id: string;
        _transform: null;
        max: number;
        dynamicPoolId: string;
    })[];
    id: string;
} | {
    id: string;
    data: {
        bezier: null;
        min: number;
        group: number;
        max: number;
        _transform: null;
        id: string;
        weight: number;
        step: number;
    }[];
} | {
    id: string;
    data: {
        _transform: null;
        step: number;
        max: number;
        bezier: null;
        group: number;
        id: string;
        min: number;
        weight: number;
    }[];
} | {
    data: ({
        step: number;
        max: number;
        min: number;
        id: string;
        _transform: null;
        group: number;
        bezier: null;
        weight: number;
        dynamicPoolId?: undefined;
    } | {
        weight: number;
        _transform: null;
        bezier: null;
        id: string;
        max: number;
        step: number;
        group: number;
        dynamicPoolId: string;
        min: number;
    })[];
    id: string;
} | {
    data: ({
        group: number;
        bezier: null;
        id: string;
        weight: number;
        step: number;
        max: number;
        _transform: null;
        min: number;
        dynamicPoolId?: undefined;
    } | {
        max: number;
        group: number;
        weight: number;
        dynamicPoolId: string;
        _transform: null;
        bezier: null;
        id: string;
        min: number;
        step: number;
    })[];
    id: string;
} | {
    id: string;
    data: ({
        bezier: null;
        min: number;
        id: string;
        _transform: null;
        weight: number;
        step: number;
        max: number;
        group: number;
        dynamicPoolId?: undefined;
    } | {
        group: number;
        min: number;
        max: number;
        step: number;
        weight: number;
        bezier: null;
        id: string;
        dynamicPoolId: string;
        _transform: null;
    })[];
} | {
    id: string;
    data: ({
        weight: number;
        min: number;
        bezier: null;
        id: string;
        _transform: null;
        step: number;
        max: number;
        group: number;
        dynamicPoolId?: undefined;
    } | {
        max: number;
        _transform: null;
        bezier: null;
        step: number;
        dynamicPoolId: string;
        min: number;
        group: number;
        id: string;
        weight: number;
    })[];
} | {
    data: ({
        id: string;
        min: number;
        weight: number;
        group: number;
        step: number;
        _transform: null;
        max: number;
        bezier: null;
        dynamicPoolId?: undefined;
    } | {
        dynamicPoolId: string;
        bezier: null;
        id: string;
        _transform: null;
        weight: number;
        min: number;
        group: number;
        step: number;
        max: number;
    })[];
    id: string;
} | {
    data: {
        group: number;
        max: number;
        min: number;
        bezier: null;
        weight: number;
        step: number;
        _transform: null;
        id: string;
    }[];
    id: string;
} | {
    data: {
        group: number;
        _transform: null;
        weight: number;
        step: number;
        bezier: null;
        min: number;
        max: number;
        id: string;
    }[];
    id: string;
} | {
    id: string;
    data: {
        weight: number;
        group: number;
        bezier: null;
        min: number;
        max: number;
        id: string;
        _transform: null;
        step: number;
    }[];
} | {
    id: string;
    data: {
        step: number;
        min: number;
        _transform: null;
        id: string;
        max: number;
        group: number;
        weight: number;
        bezier: null;
    }[];
} | {
    data: {
        id: string;
        _transform: null;
        min: number;
        group: number;
        step: number;
        weight: number;
        max: number;
        bezier: null;
    }[];
    id: string;
} | {
    data: {
        step: number;
        _transform: null;
        weight: number;
        max: number;
        group: number;
        min: number;
        id: string;
        bezier: null;
    }[];
    id: string;
} | {
    id: string;
    data: {
        group: number;
        bezier: null;
        weight: number;
        step: number;
        max: number;
        _transform: null;
        min: number;
        id: string;
    }[];
} | {
    id: string;
    data: {
        min: number;
        group: number;
        weight: number;
        id: string;
        step: number;
        _transform: null;
        bezier: null;
        max: number;
    }[];
} | {
    data: {
        min: number;
        bezier: null;
        group: number;
        max: number;
        step: number;
        _transform: null;
        id: string;
        weight: number;
    }[];
    id: string;
} | {
    data: ({
        min: number;
        _transform: null;
        id: string;
        step: number;
        weight: number;
        group: number;
        max: number;
        bezier: null;
        dynamicPoolId?: undefined;
    } | {
        group: number;
        dynamicPoolId: string;
        weight: number;
        min: number;
        step: number;
        _transform: null;
        max: number;
        id: string;
        bezier: null;
    })[];
    id: string;
} | {
    id: string;
    data: {
        max: number;
        _transform: null;
        min: number;
        group: number;
        bezier: null;
        weight: number;
        step: number;
        id: string;
    }[];
} | {
    data: {
        id: string;
        min: number;
        _transform: null;
        max: number;
        bezier: null;
        weight: number;
        group: number;
        step: number;
    }[];
    id: string;
} | {
    data: ({
        weight: number;
        group: number;
        step: number;
        min: number;
        id: string;
        max: number;
        _transform: null;
        bezier: null;
        dynamicPoolId?: undefined;
    } | {
        bezier: null;
        id: string;
        weight: number;
        dynamicPoolId: string;
        group: number;
        _transform: null;
        step: number;
        min: number;
        max: number;
    })[];
    id: string;
} | {
    data: {
        weight: number;
        step: number;
        group: number;
        min: number;
        max: number;
        bezier: null;
        id: string;
        _transform: null;
    }[];
    id: string;
} | {
    data: {
        id: string;
        max: number;
        group: number;
        step: number;
        _transform: null;
        weight: number;
        bezier: null;
        min: number;
    }[];
    id: string;
} | {
    data: ({
        min: number;
        group: number;
        max: number;
        step: number;
        _transform: null;
        bezier: null;
        weight: number;
        id: string;
        dynamicPoolId?: undefined;
    } | {
        id: string;
        min: number;
        dynamicPoolId: string;
        weight: number;
        max: number;
        _transform: null;
        bezier: null;
        step: number;
        group: number;
    })[];
    id: string;
} | {
    id: string;
    data: ({
        weight: number;
        step: number;
        min: number;
        bezier: null;
        _transform: null;
        max: number;
        group: number;
        id: string;
        dynamicPoolId?: undefined;
    } | {
        id: string;
        group: number;
        bezier: null;
        dynamicPoolId: string;
        min: number;
        max: number;
        weight: number;
        step: number;
        _transform: null;
    })[];
} | {
    data: ({
        max: number;
        bezier: null;
        min: number;
        _transform: null;
        weight: number;
        group: number;
        id: string;
        step: number;
        dynamicPoolId?: undefined;
    } | {
        weight: number;
        dynamicPoolId: string;
        bezier: null;
        max: number;
        step: number;
        group: number;
        min: number;
        _transform: null;
        id: string;
    })[];
    id: string;
} | {
    id: string;
    data: ({
        bezier: null;
        group: number;
        id: string;
        weight: number;
        _transform: null;
        step: number;
        max: number;
        min: number;
        dynamicPoolId?: undefined;
    } | {
        group: number;
        bezier: null;
        weight: number;
        _transform: null;
        max: number;
        min: number;
        dynamicPoolId: string;
        id: string;
        step: number;
    })[];
} | {
    id: string;
    data: ({
        _transform: null;
        step: number;
        bezier: null;
        id: string;
        max: number;
        group: number;
        weight: number;
        min: number;
        dynamicPoolId?: undefined;
    } | {
        dynamicPoolId: string;
        group: number;
        max: number;
        weight: number;
        bezier: null;
        min: number;
        id: string;
        step: number;
        _transform: null;
    })[];
} | {
    id: string;
    data: {
        weight: number;
        id: string;
        max: number;
        group: number;
        min: number;
        _transform: null;
        bezier: null;
        step: number;
    }[];
} | {
    data: {
        id: string;
        bezier: null;
        max: number;
        weight: number;
        group: number;
        min: number;
        _transform: null;
        step: number;
    }[];
    id: string;
} | {
    data: {
        weight: number;
        min: number;
        step: number;
        group: number;
        bezier: null;
        id: string;
        max: number;
        _transform: null;
    }[];
    id: string;
} | {
    data: {
        id: string;
        weight: number;
        group: number;
        min: number;
        bezier: null;
        _transform: null;
        max: number;
        step: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        min: number;
        bezier: null;
        id: string;
        _transform: null;
        weight: number;
        group: number;
        max: number;
        step: number;
    }[];
} | {
    data: {
        _transform: null;
        max: number;
        id: string;
        weight: number;
        bezier: null;
        group: number;
        min: number;
        step: number;
    }[];
    id: string;
} | {
    data: {
        bezier: null;
        step: number;
        max: number;
        group: number;
        id: string;
        min: number;
        _transform: null;
        weight: number;
    }[];
    id: string;
} | {
    data: {
        _transform: null;
        min: number;
        step: number;
        max: number;
        id: string;
        bezier: null;
        weight: number;
        group: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        min: number;
        group: number;
        id: string;
        max: number;
        bezier: null;
        _transform: null;
        weight: number;
        step: number;
    }[];
} | {
    data: ({
        bezier: null;
        step: number;
        group: number;
        weight: number;
        min: number;
        max: number;
        id: string;
        _transform: null;
        dynamicPoolId?: undefined;
    } | {
        group: number;
        _transform: null;
        max: number;
        weight: number;
        bezier: null;
        min: number;
        step: number;
        dynamicPoolId: string;
        id: string;
    })[];
    id: string;
} | {
    data: {
        id: string;
        max: number;
        step: number;
        bezier: null;
        min: number;
        group: number;
        weight: number;
        _transform: null;
    }[];
    id: string;
} | {
    data: {
        step: number;
        min: number;
        id: string;
        group: number;
        max: number;
        bezier: null;
        weight: number;
        _transform: null;
    }[];
    id: string;
} | {
    id: string;
    data: ({
        bezier: null;
        group: number;
        id: string;
        max: number;
        weight: number;
        _transform: null;
        min: number;
        step: number;
        dynamicPoolId?: undefined;
    } | {
        weight: number;
        max: number;
        step: number;
        bezier: null;
        group: number;
        _transform: null;
        dynamicPoolId: string;
        min: number;
        id: string;
    })[];
} | {
    id: string;
    data: {
        min: number;
        bezier: null;
        weight: number;
        step: number;
        max: number;
        group: number;
        _transform: null;
        id: string;
    }[];
} | {
    data: {
        _transform: null;
        max: number;
        min: number;
        weight: number;
        step: number;
        id: string;
        bezier: null;
        group: number;
    }[];
    id: string;
} | {
    data: ({
        id: string;
        _transform: null;
        min: number;
        bezier: null;
        step: number;
        weight: number;
        max: number;
        group: number;
        dynamicPoolId?: undefined;
    } | {
        _transform: null;
        min: number;
        id: string;
        max: number;
        step: number;
        bezier: null;
        weight: number;
        dynamicPoolId: string;
        group: number;
    })[];
    id: string;
} | {
    id: string;
    data: ({
        step: number;
        bezier: null;
        _transform: null;
        min: number;
        group: number;
        id: string;
        max: number;
        weight: number;
        dynamicPoolId?: undefined;
    } | {
        bezier: null;
        step: number;
        max: number;
        id: string;
        dynamicPoolId: string;
        group: number;
        _transform: null;
        min: number;
        weight: number;
    })[];
} | {
    id: string;
    data: ({
        bezier: null;
        _transform: null;
        weight: number;
        max: number;
        step: number;
        id: string;
        group: number;
        min: number;
        dynamicPoolId?: undefined;
    } | {
        group: number;
        min: number;
        step: number;
        id: string;
        _transform: null;
        max: number;
        weight: number;
        bezier: null;
        dynamicPoolId: string;
    })[];
} | {
    id: string;
    data: ({
        max: number;
        weight: number;
        bezier: null;
        min: number;
        _transform: null;
        step: number;
        group: number;
        id: string;
        dynamicPoolId?: undefined;
    } | {
        step: number;
        bezier: null;
        min: number;
        weight: number;
        _transform: null;
        dynamicPoolId: string;
        group: number;
        id: string;
        max: number;
    })[];
} | {
    id: string;
    data: ({
        group: number;
        bezier: null;
        step: number;
        weight: number;
        _transform: null;
        min: number;
        id: string;
        max: number;
        dynamicPoolId?: undefined;
    } | {
        group: number;
        min: number;
        id: string;
        max: number;
        weight: number;
        dynamicPoolId: string;
        _transform: null;
        bezier: null;
        step: number;
    })[];
} | {
    data: {
        step: number;
        weight: number;
        bezier: null;
        min: number;
        id: string;
        group: number;
        max: number;
        _transform: null;
    }[];
    id: string;
} | {
    data: {
        _transform: null;
        weight: number;
        step: number;
        id: string;
        min: number;
        group: number;
        bezier: null;
        max: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        min: number;
        group: number;
        step: number;
        bezier: null;
        weight: number;
        id: string;
        _transform: null;
        max: number;
    }[];
} | {
    data: {
        min: number;
        bezier: null;
        weight: number;
        step: number;
        max: number;
        id: string;
        group: number;
        _transform: null;
    }[];
    id: string;
} | {
    id: string;
    data: {
        dynamicPoolId: string;
        step: number;
        max: number;
        group: number;
        bezier: null;
        _transform: null;
        id: string;
        min: number;
        weight: number;
    }[];
} | {
    id: string;
    data: {
        id: string;
        bezier: null;
        _transform: null;
        max: number;
        group: number;
        dynamicPoolId: string;
        weight: number;
        min: number;
        step: number;
    }[];
} | {
    data: {
        id: string;
        _transform: null;
        step: number;
        max: number;
        weight: number;
        group: number;
        min: number;
        dynamicPoolId: string;
        bezier: null;
    }[];
    id: string;
} | {
    data: {
        id: string;
        group: number;
        min: number;
        max: number;
        step: number;
        dynamicPoolId: string;
        weight: number;
        bezier: null;
        _transform: null;
    }[];
    id: string;
} | {
    id: string;
    data: {
        max: number;
        weight: number;
        step: number;
        dynamicPoolId: string;
        bezier: null;
        id: string;
        group: number;
        _transform: null;
        min: number;
    }[];
} | {
    data: {
        group: number;
        dynamicPoolId: string;
        _transform: null;
        min: number;
        weight: number;
        id: string;
        step: number;
        bezier: null;
        max: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        weight: number;
        max: number;
        min: number;
        step: number;
        id: string;
        dynamicPoolId: string;
        _transform: null;
        group: number;
        bezier: null;
    }[];
} | {
    data: {
        id: string;
        max: number;
        step: number;
        min: number;
        _transform: null;
        group: number;
        weight: number;
        bezier: null;
        dynamicPoolId: string;
    }[];
    id: string;
} | {
    id: string;
    data: {
        group: number;
        _transform: null;
        min: number;
        step: number;
        weight: number;
        id: string;
        bezier: null;
        dynamicPoolId: string;
        max: number;
    }[];
} | {
    data: {
        min: number;
        weight: number;
        bezier: null;
        group: number;
        id: string;
        max: number;
        step: number;
        dynamicPoolId: string;
        _transform: null;
    }[];
    id: string;
} | {
    id: string;
    data: {
        weight: number;
        bezier: null;
        _transform: null;
        max: number;
        group: number;
        min: number;
        dynamicPoolId: string;
        step: number;
        id: string;
    }[];
} | {
    data: {
        bezier: null;
        min: number;
        weight: number;
        id: string;
        group: number;
        dynamicPoolId: string;
        _transform: null;
        max: number;
        step: number;
    }[];
    id: string;
} | {
    data: {
        group: number;
        min: number;
        step: number;
        dynamicPoolId: string;
        weight: number;
        id: string;
        _transform: null;
        bezier: null;
        max: number;
    }[];
    id: string;
} | {
    data: {
        min: number;
        bezier: null;
        max: number;
        group: number;
        _transform: null;
        dynamicPoolId: string;
        step: number;
        id: string;
        weight: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        max: number;
        group: number;
        id: string;
        step: number;
        bezier: null;
        min: number;
        dynamicPoolId: string;
        _transform: null;
        weight: number;
    }[];
} | {
    data: {
        bezier: null;
        min: number;
        group: number;
        step: number;
        max: number;
        id: string;
        _transform: null;
        weight: number;
        dynamicPoolId: string;
    }[];
    id: string;
} | {
    id: string;
    data: {
        bezier: null;
        _transform: null;
        step: number;
        dynamicPoolId: string;
        weight: number;
        id: string;
        min: number;
        group: number;
        max: number;
    }[];
} | {
    id: string;
    data: {
        _transform: null;
        weight: number;
        max: number;
        group: number;
        dynamicPoolId: string;
        bezier: null;
        id: string;
        step: number;
        min: number;
    }[];
} | {
    data: {
        weight: number;
        min: number;
        max: number;
        bezier: null;
        id: string;
        step: number;
        dynamicPoolId: string;
        group: number;
        _transform: null;
    }[];
    id: string;
} | {
    id: string;
    data: {
        bezier: null;
        step: number;
        group: number;
        _transform: null;
        id: string;
        dynamicPoolId: string;
        min: number;
        weight: number;
        max: number;
    }[];
} | {
    data: {
        group: number;
        bezier: null;
        _transform: null;
        min: number;
        weight: number;
        max: number;
        id: string;
        step: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        id: string;
        bezier: null;
        _transform: null;
        weight: number;
        group: number;
        min: number;
        max: number;
        step: number;
    }[];
} | {
    data: {
        min: number;
        group: number;
        _transform: null;
        step: number;
        id: string;
        bezier: null;
        weight: number;
        max: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        step: number;
        group: number;
        id: string;
        min: number;
        max: number;
        _transform: null;
        bezier: null;
        weight: number;
    }[];
} | {
    id: string;
    data: {
        bezier: null;
        _transform: null;
        id: string;
        weight: number;
        group: number;
        max: number;
        step: number;
        min: number;
    }[];
} | {
    id: string;
    data: ({
        bezier: null;
        group: number;
        max: number;
        step: number;
        weight: number;
        id: string;
        _transform: null;
        min: number;
        dynamicPoolId?: undefined;
    } | {
        bezier: null;
        weight: number;
        dynamicPoolId: string;
        step: number;
        max: number;
        id: string;
        group: number;
        _transform: null;
        min: number;
    })[];
} | {
    data: {
        bezier: null;
        group: number;
        id: string;
        weight: number;
        step: number;
        max: number;
        _transform: null;
        min: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        _transform: null;
        min: number;
        group: number;
        id: string;
        step: number;
        bezier: null;
        weight: number;
        max: number;
    }[];
} | {
    id: string;
    data: ({
        bezier: null;
        min: number;
        id: string;
        _transform: null;
        group: number;
        max: number;
        weight: number;
        step: number;
        dynamicPoolId?: undefined;
    } | {
        min: number;
        step: number;
        _transform: null;
        weight: number;
        id: string;
        max: number;
        dynamicPoolId: string;
        group: number;
        bezier: null;
    })[];
} | {
    id: string;
    data: {
        max: number;
        step: number;
        min: number;
        id: string;
        bezier: null;
        group: number;
        weight: number;
        _transform: null;
    }[];
} | {
    data: {
        _transform: null;
        min: number;
        step: number;
        weight: number;
        id: string;
        group: number;
        max: number;
        bezier: null;
    }[];
    id: string;
} | {
    data: ({
        group: number;
        step: number;
        min: number;
        bezier: null;
        max: number;
        id: string;
        weight: number;
        _transform: null;
        dynamicPoolId?: undefined;
    } | {
        group: number;
        _transform: null;
        max: number;
        bezier: null;
        step: number;
        id: string;
        min: number;
        weight: number;
        dynamicPoolId: string;
    })[];
    id: string;
} | {
    id: string;
    data: ({
        group: number;
        _transform: null;
        weight: number;
        max: number;
        step: number;
        id: string;
        min: number;
        bezier: null;
        dynamicPoolId?: undefined;
    } | {
        group: number;
        _transform: null;
        max: number;
        id: string;
        weight: number;
        min: number;
        step: number;
        dynamicPoolId: string;
        bezier: null;
    })[];
} | {
    id: string;
    data: ({
        _transform: null;
        bezier: null;
        step: number;
        group: number;
        id: string;
        min: number;
        weight: number;
        max: number;
        dynamicPoolId?: undefined;
    } | {
        group: number;
        step: number;
        dynamicPoolId: string;
        id: string;
        weight: number;
        bezier: null;
        max: number;
        _transform: null;
        min: number;
    })[];
} | {
    id: string;
    data: ({
        step: number;
        max: number;
        id: string;
        min: number;
        group: number;
        _transform: null;
        bezier: null;
        weight: number;
        dynamicPoolId?: undefined;
    } | {
        group: number;
        weight: number;
        dynamicPoolId: string;
        bezier: null;
        step: number;
        id: string;
        _transform: null;
        min: number;
        max: number;
    })[];
} | {
    id: string;
    data: ({
        max: number;
        id: string;
        min: number;
        _transform: null;
        group: number;
        step: number;
        weight: number;
        bezier: null;
        dynamicPoolId?: undefined;
    } | {
        dynamicPoolId: string;
        step: number;
        _transform: null;
        group: number;
        min: number;
        weight: number;
        max: number;
        id: string;
        bezier: null;
    })[];
} | {
    id: string;
    data: {
        bezier: null;
        min: number;
        step: number;
        group: number;
        id: string;
        weight: number;
        _transform: null;
        max: number;
    }[];
} | {
    id: string;
    data: {
        max: number;
        weight: number;
        step: number;
        _transform: null;
        bezier: null;
        id: string;
        min: number;
        group: number;
    }[];
} | {
    id: string;
    data: {
        id: string;
        max: number;
        bezier: null;
        min: number;
        _transform: null;
        group: number;
        step: number;
        weight: number;
    }[];
} | {
    id: string;
    data: {
        id: string;
        step: number;
        _transform: null;
        max: number;
        weight: number;
        group: number;
        bezier: null;
        min: number;
    }[];
} | {
    data: {
        id: string;
        max: number;
        _transform: null;
        group: number;
        bezier: null;
        step: number;
        weight: number;
        min: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        bezier: null;
        id: string;
        max: number;
        _transform: null;
        group: number;
        weight: number;
        step: number;
        min: number;
    }[];
} | {
    data: {
        max: number;
        bezier: null;
        weight: number;
        group: number;
        id: string;
        step: number;
        _transform: null;
        min: number;
    }[];
    id: string;
} | {
    data: {
        _transform: null;
        max: number;
        id: string;
        bezier: null;
        min: number;
        group: number;
        step: number;
        weight: number;
    }[];
    id: string;
} | {
    data: {
        weight: number;
        _transform: null;
        id: string;
        group: number;
        max: number;
        step: number;
        bezier: null;
        min: number;
    }[];
    id: string;
} | {
    data: ({
        max: number;
        bezier: null;
        step: number;
        _transform: null;
        weight: number;
        min: number;
        id: string;
        group: number;
        dynamicPoolId?: undefined;
    } | {
        id: string;
        step: number;
        bezier: null;
        min: number;
        dynamicPoolId: string;
        group: number;
        _transform: null;
        weight: number;
        max: number;
    })[];
    id: string;
} | {
    data: {
        weight: number;
        bezier: null;
        step: number;
        group: number;
        _transform: null;
        id: string;
        min: number;
        max: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        min: number;
        group: number;
        _transform: null;
        step: number;
        weight: number;
        bezier: null;
        max: number;
        id: string;
    }[];
} | {
    data: ({
        bezier: null;
        _transform: null;
        max: number;
        group: number;
        id: string;
        weight: number;
        step: number;
        min: number;
        dynamicPoolId?: undefined;
    } | {
        group: number;
        id: string;
        _transform: null;
        bezier: null;
        step: number;
        min: number;
        dynamicPoolId: string;
        max: number;
        weight: number;
    })[];
    id: string;
} | {
    data: {
        max: number;
        id: string;
        min: number;
        weight: number;
        bezier: null;
        _transform: null;
        step: number;
        group: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        weight: number;
        step: number;
        id: string;
        min: number;
        max: number;
        group: number;
        _transform: null;
        bezier: null;
    }[];
} | {
    data: ({
        max: number;
        min: number;
        weight: number;
        id: string;
        step: number;
        _transform: null;
        group: number;
        bezier: null;
        dynamicPoolId?: undefined;
    } | {
        weight: number;
        _transform: null;
        bezier: null;
        max: number;
        dynamicPoolId: string;
        id: string;
        group: number;
        min: number;
        step: number;
    })[];
    id: string;
} | {
    id: string;
    data: ({
        min: number;
        bezier: null;
        weight: number;
        _transform: null;
        step: number;
        group: number;
        id: string;
        max: number;
        dynamicPoolId?: undefined;
    } | {
        id: string;
        group: number;
        step: number;
        max: number;
        bezier: null;
        dynamicPoolId: string;
        min: number;
        _transform: null;
        weight: number;
    })[];
} | {
    id: string;
    data: ({
        step: number;
        _transform: null;
        min: number;
        id: string;
        weight: number;
        max: number;
        bezier: null;
        group: number;
        dynamicPoolId?: undefined;
    } | {
        max: number;
        weight: number;
        group: number;
        _transform: null;
        bezier: null;
        min: number;
        step: number;
        dynamicPoolId: string;
        id: string;
    })[];
} | {
    data: ({
        step: number;
        group: number;
        min: number;
        _transform: null;
        bezier: null;
        id: string;
        weight: number;
        max: number;
        dynamicPoolId?: undefined;
    } | {
        step: number;
        dynamicPoolId: string;
        bezier: null;
        _transform: null;
        group: number;
        id: string;
        min: number;
        max: number;
        weight: number;
    })[];
    id: string;
} | {
    id: string;
    data: ({
        max: number;
        bezier: null;
        weight: number;
        _transform: null;
        group: number;
        id: string;
        min: number;
        step: number;
        dynamicPoolId?: undefined;
    } | {
        weight: number;
        dynamicPoolId: string;
        min: number;
        group: number;
        max: number;
        _transform: null;
        bezier: null;
        id: string;
        step: number;
    })[];
} | {
    id: string;
    data: {
        _transform: null;
        group: number;
        max: number;
        bezier: null;
        id: string;
        weight: number;
        step: number;
        min: number;
    }[];
} | {
    id: string;
    data: {
        step: number;
        bezier: null;
        group: number;
        id: string;
        weight: number;
        _transform: null;
        min: number;
        max: number;
    }[];
} | {
    id: string;
    data: {
        _transform: null;
        id: string;
        min: number;
        weight: number;
        max: number;
        group: number;
        step: number;
        bezier: null;
    }[];
} | {
    id: string;
    data: {
        min: number;
        id: string;
        _transform: null;
        max: number;
        step: number;
        group: number;
        weight: number;
        bezier: null;
    }[];
} | {
    data: {
        group: number;
        max: number;
        step: number;
        id: string;
        weight: number;
        _transform: null;
        bezier: null;
        min: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        _transform: null;
        step: number;
        id: string;
        max: number;
        min: number;
        group: number;
        bezier: null;
        weight: number;
    }[];
} | {
    data: {
        bezier: null;
        _transform: null;
        id: string;
        max: number;
        group: number;
        weight: number;
        step: number;
        min: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        group: number;
        max: number;
        step: number;
        id: string;
        _transform: null;
        min: number;
        bezier: null;
        weight: number;
    }[];
} | {
    id: string;
    data: {
        weight: number;
        max: number;
        min: number;
        bezier: null;
        group: number;
        id: string;
        step: number;
        _transform: null;
    }[];
} | {
    id: string;
    data: ({
        bezier: null;
        group: number;
        min: number;
        id: string;
        max: number;
        weight: number;
        step: number;
        _transform: null;
        dynamicPoolId?: undefined;
    } | {
        weight: number;
        group: number;
        bezier: null;
        _transform: null;
        dynamicPoolId: string;
        max: number;
        id: string;
        min: number;
        step: number;
    })[];
} | {
    data: {
        id: string;
        _transform: null;
        min: number;
        max: number;
        weight: number;
        group: number;
        bezier: null;
        step: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        group: number;
        bezier: null;
        _transform: null;
        min: number;
        id: string;
        weight: number;
        step: number;
        max: number;
    }[];
} | {
    id: string;
    data: ({
        id: string;
        _transform: null;
        min: number;
        bezier: null;
        step: number;
        group: number;
        max: number;
        weight: number;
        dynamicPoolId?: undefined;
    } | {
        max: number;
        id: string;
        dynamicPoolId: string;
        group: number;
        bezier: null;
        weight: number;
        step: number;
        _transform: null;
        min: number;
    })[];
} | {
    data: {
        _transform: null;
        max: number;
        id: string;
        weight: number;
        group: number;
        min: number;
        step: number;
        bezier: null;
    }[];
    id: string;
} | {
    id: string;
    data: {
        min: number;
        max: number;
        step: number;
        id: string;
        weight: number;
        _transform: null;
        group: number;
        bezier: null;
    }[];
} | {
    data: ({
        id: string;
        max: number;
        min: number;
        group: number;
        bezier: null;
        weight: number;
        step: number;
        _transform: null;
        dynamicPoolId?: undefined;
    } | {
        weight: number;
        min: number;
        step: number;
        id: string;
        max: number;
        _transform: null;
        dynamicPoolId: string;
        group: number;
        bezier: null;
    })[];
    id: string;
} | {
    id: string;
    data: ({
        step: number;
        id: string;
        min: number;
        _transform: null;
        bezier: null;
        max: number;
        weight: number;
        group: number;
        dynamicPoolId?: undefined;
    } | {
        max: number;
        id: string;
        group: number;
        weight: number;
        bezier: null;
        min: number;
        step: number;
        dynamicPoolId: string;
        _transform: null;
    })[];
} | {
    data: ({
        weight: number;
        group: number;
        bezier: null;
        id: string;
        min: number;
        _transform: null;
        step: number;
        max: number;
        dynamicPoolId?: undefined;
    } | {
        bezier: null;
        _transform: null;
        max: number;
        weight: number;
        step: number;
        group: number;
        min: number;
        id: string;
        dynamicPoolId: string;
    })[];
    id: string;
} | {
    data: ({
        min: number;
        max: number;
        group: number;
        weight: number;
        step: number;
        id: string;
        bezier: null;
        _transform: null;
        dynamicPoolId?: undefined;
    } | {
        max: number;
        _transform: null;
        min: number;
        dynamicPoolId: string;
        weight: number;
        bezier: null;
        group: number;
        id: string;
        step: number;
    })[];
    id: string;
} | {
    data: ({
        group: number;
        _transform: null;
        weight: number;
        bezier: null;
        min: number;
        id: string;
        step: number;
        max: number;
        dynamicPoolId?: undefined;
    } | {
        group: number;
        dynamicPoolId: string;
        step: number;
        max: number;
        weight: number;
        bezier: null;
        id: string;
        _transform: null;
        min: number;
    })[];
    id: string;
} | {
    id: string;
    data: {
        max: number;
        weight: number;
        step: number;
        id: string;
        _transform: null;
        bezier: null;
        min: number;
        group: number;
    }[];
} | {
    id: string;
    data: {
        min: number;
        weight: number;
        max: number;
        bezier: null;
        step: number;
        group: number;
        id: string;
        _transform: null;
    }[];
} | {
    id: string;
    data: {
        bezier: null;
        min: number;
        _transform: null;
        max: number;
        id: string;
        step: number;
        weight: number;
        group: number;
    }[];
} | {
    data: {
        min: number;
        _transform: null;
        weight: number;
        step: number;
        max: number;
        id: string;
        group: number;
        bezier: null;
    }[];
    id: string;
} | {
    data: {
        id: string;
        group: number;
        min: number;
        weight: number;
        max: number;
        step: number;
        _transform: null;
        bezier: null;
        dynamicPoolId: string;
    }[];
    id: string;
} | {
    id: string;
    data: {
        weight: number;
        id: string;
        step: number;
        bezier: null;
        group: number;
        dynamicPoolId: string;
        max: number;
        _transform: null;
        min: number;
    }[];
} | {
    id: string;
    data: {
        step: number;
        dynamicPoolId: string;
        group: number;
        id: string;
        weight: number;
        min: number;
        bezier: null;
        max: number;
        _transform: null;
    }[];
} | {
    data: {
        _transform: null;
        step: number;
        bezier: null;
        weight: number;
        group: number;
        min: number;
        dynamicPoolId: string;
        max: number;
        id: string;
    }[];
    id: string;
} | {
    data: {
        min: number;
        step: number;
        group: number;
        dynamicPoolId: string;
        id: string;
        max: number;
        _transform: null;
        bezier: null;
        weight: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        min: number;
        max: number;
        weight: number;
        group: number;
        bezier: null;
        step: number;
        id: string;
        dynamicPoolId: string;
        _transform: null;
    }[];
} | {
    id: string;
    data: {
        bezier: null;
        dynamicPoolId: string;
        group: number;
        max: number;
        min: number;
        _transform: null;
        step: number;
        weight: number;
        id: string;
    }[];
} | {
    id: string;
    data: {
        bezier: null;
        id: string;
        max: number;
        min: number;
        step: number;
        _transform: null;
        group: number;
        dynamicPoolId: string;
        weight: number;
    }[];
} | {
    id: string;
    data: {
        bezier: null;
        weight: number;
        group: number;
        _transform: null;
        id: string;
        min: number;
        max: number;
        step: number;
        dynamicPoolId: string;
    }[];
} | {
    id: string;
    data: {
        max: number;
        step: number;
        min: number;
        dynamicPoolId: string;
        weight: number;
        id: string;
        group: number;
        _transform: null;
        bezier: null;
    }[];
} | {
    id: string;
    data: {
        dynamicPoolId: string;
        bezier: null;
        _transform: null;
        step: number;
        min: number;
        group: number;
        max: number;
        id: string;
        weight: number;
    }[];
} | {
    data: {
        dynamicPoolId: string;
        max: number;
        id: string;
        _transform: null;
        bezier: null;
        min: number;
        weight: number;
        step: number;
        group: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        min: number;
        max: number;
        weight: number;
        dynamicPoolId: string;
        group: number;
        step: number;
        _transform: null;
        bezier: null;
        id: string;
    }[];
} | {
    id: string;
    data: {
        group: number;
        max: number;
        dynamicPoolId: string;
        _transform: null;
        min: number;
        step: number;
        bezier: null;
        weight: number;
        id: string;
    }[];
} | {
    id: string;
    data: {
        step: number;
        group: number;
        id: string;
        max: number;
        dynamicPoolId: string;
        bezier: null;
        min: number;
        _transform: null;
        weight: number;
    }[];
} | {
    data: {
        id: string;
        step: number;
        min: number;
        _transform: null;
        group: number;
        dynamicPoolId: string;
        bezier: null;
        weight: number;
        max: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        weight: number;
        step: number;
        dynamicPoolId: string;
        _transform: null;
        max: number;
        group: number;
        id: string;
        bezier: null;
        min: number;
    }[];
} | {
    id: string;
    data: {
        max: number;
        dynamicPoolId: string;
        weight: number;
        _transform: null;
        group: number;
        min: number;
        step: number;
        bezier: null;
        id: string;
    }[];
} | {
    data: {
        step: number;
        weight: number;
        min: number;
        dynamicPoolId: string;
        max: number;
        group: number;
        id: string;
        bezier: null;
        _transform: null;
    }[];
    id: string;
} | {
    id: string;
    data: {
        max: number;
        bezier: null;
        id: string;
        weight: number;
        _transform: null;
        step: number;
        dynamicPoolId: string;
        min: number;
        group: number;
    }[];
} | {
    data: {
        weight: number;
        bezier: null;
        _transform: null;
        group: number;
        step: number;
        id: string;
        min: number;
        max: number;
    }[];
    id: string;
} | {
    data: {
        bezier: null;
        group: number;
        max: number;
        id: string;
        weight: number;
        _transform: null;
        min: number;
        step: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        _transform: null;
        id: string;
        min: number;
        weight: number;
        bezier: null;
        group: number;
        step: number;
        max: number;
    }[];
} | {
    data: {
        _transform: null;
        min: number;
        weight: number;
        group: number;
        bezier: null;
        max: number;
        id: string;
        step: number;
    }[];
    id: string;
} | {
    data: {
        group: number;
        max: number;
        min: number;
        weight: number;
        id: string;
        step: number;
        bezier: null;
        _transform: null;
    }[];
    id: string;
} | {
    id: string;
    data: {
        _transform: null;
        weight: number;
        dynamicPoolId: string;
        group: number;
        min: number;
        step: number;
        max: number;
        bezier: null;
        id: string;
    }[];
} | {
    id: string;
    data: {
        max: number;
        min: number;
        weight: number;
        group: number;
        bezier: null;
        id: string;
        _transform: null;
        step: number;
    }[];
} | {
    id: string;
    data: {
        _transform: null;
        max: number;
        id: string;
        step: number;
        bezier: null;
        group: number;
        min: number;
        weight: number;
    }[];
} | {
    id: string;
    data: ({
        id: string;
        step: number;
        _transform: null;
        group: number;
        max: number;
        dynamicPoolId: string;
        min: number;
        bezier: null;
        weight: number;
    } | {
        group: number;
        min: number;
        step: number;
        _transform: null;
        bezier: null;
        id: string;
        max: number;
        weight: number;
        dynamicPoolId?: undefined;
    })[];
} | {
    data: {
        min: number;
        id: string;
        max: number;
        weight: number;
        bezier: null;
        step: number;
        _transform: null;
        group: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        _transform: null;
        max: number;
        step: number;
        min: number;
        id: string;
        group: number;
        weight: number;
        bezier: null;
    }[];
} | {
    data: ({
        dynamicPoolId: string;
        id: string;
        bezier: null;
        max: number;
        group: number;
        min: number;
        _transform: null;
        weight: number;
        step: number;
    } | {
        weight: number;
        bezier: null;
        id: string;
        _transform: null;
        max: number;
        group: number;
        step: number;
        min: number;
        dynamicPoolId?: undefined;
    })[];
    id: string;
} | {
    id: string;
    data: ({
        _transform: null;
        group: number;
        weight: number;
        step: number;
        dynamicPoolId: string;
        max: number;
        bezier: null;
        id: string;
        min: number;
    } | {
        bezier: null;
        weight: number;
        id: string;
        _transform: null;
        min: number;
        step: number;
        max: number;
        group: number;
        dynamicPoolId?: undefined;
    })[];
} | {
    id: string;
    data: ({
        min: number;
        weight: number;
        dynamicPoolId: string;
        bezier: null;
        _transform: null;
        id: string;
        step: number;
        group: number;
        max: number;
    } | {
        group: number;
        _transform: null;
        weight: number;
        step: number;
        id: string;
        max: number;
        bezier: null;
        min: number;
        dynamicPoolId?: undefined;
    })[];
} | {
    data: ({
        bezier: null;
        dynamicPoolId: string;
        id: string;
        min: number;
        _transform: null;
        max: number;
        group: number;
        weight: number;
        step: number;
    } | {
        bezier: null;
        weight: number;
        max: number;
        min: number;
        step: number;
        id: string;
        group: number;
        _transform: null;
        dynamicPoolId?: undefined;
    })[];
    id: string;
} | {
    id: string;
    data: ({
        min: number;
        bezier: null;
        _transform: null;
        max: number;
        group: number;
        dynamicPoolId: string;
        weight: number;
        step: number;
        id: string;
    } | {
        step: number;
        id: string;
        min: number;
        group: number;
        weight: number;
        max: number;
        bezier: null;
        _transform: null;
        dynamicPoolId?: undefined;
    })[];
} | {
    data: {
        group: number;
        _transform: null;
        weight: number;
        bezier: null;
        step: number;
        min: number;
        id: string;
        max: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        weight: number;
        _transform: null;
        min: number;
        max: number;
        bezier: null;
        step: number;
        group: number;
        id: string;
    }[];
} | {
    data: {
        step: number;
        max: number;
        bezier: null;
        min: number;
        id: string;
        weight: number;
        group: number;
        _transform: null;
    }[];
    id: string;
} | {
    data: {
        group: number;
        bezier: null;
        min: number;
        max: number;
        id: string;
        weight: number;
        step: number;
        _transform: null;
    }[];
    id: string;
} | {
    id: string;
    data: {
        min: number;
        max: number;
        id: string;
        _transform: null;
        step: number;
        bezier: null;
        weight: number;
        group: number;
    }[];
} | {
    data: {
        bezier: null;
        min: number;
        weight: number;
        group: number;
        max: number;
        id: string;
        _transform: null;
        step: number;
    }[];
    id: string;
} | {
    data: {
        max: number;
        _transform: null;
        min: number;
        weight: number;
        group: number;
        bezier: null;
        id: string;
        step: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        min: number;
        group: number;
        step: number;
        bezier: null;
        id: string;
        _transform: null;
        weight: number;
        max: number;
    }[];
} | {
    id: string;
    data: {
        min: number;
        weight: number;
        max: number;
        step: number;
        id: string;
        _transform: null;
        bezier: null;
        group: number;
    }[];
} | {
    id: string;
    data: ({
        weight: number;
        max: number;
        group: number;
        min: number;
        bezier: null;
        _transform: null;
        step: number;
        id: string;
        dynamicPoolId?: undefined;
    } | {
        _transform: null;
        id: string;
        group: number;
        min: number;
        bezier: null;
        weight: number;
        step: number;
        dynamicPoolId: string;
        max: number;
    })[];
} | {
    data: {
        id: string;
        min: number;
        weight: number;
        step: number;
        group: number;
        _transform: null;
        max: number;
        bezier: null;
    }[];
    id: string;
} | {
    data: {
        _transform: null;
        bezier: null;
        step: number;
        id: string;
        max: number;
        group: number;
        weight: number;
        min: number;
    }[];
    id: string;
} | {
    id: string;
    data: ({
        id: string;
        weight: number;
        _transform: null;
        step: number;
        max: number;
        bezier: null;
        group: number;
        min: number;
        dynamicPoolId?: undefined;
    } | {
        weight: number;
        id: string;
        _transform: null;
        bezier: null;
        group: number;
        dynamicPoolId: string;
        max: number;
        step: number;
        min: number;
    })[];
} | {
    data: {
        step: number;
        bezier: null;
        group: number;
        max: number;
        weight: number;
        min: number;
        id: string;
        _transform: null;
    }[];
    id: string;
} | {
    id: string;
    data: {
        _transform: null;
        step: number;
        group: number;
        min: number;
        bezier: null;
        max: number;
        weight: number;
        id: string;
    }[];
} | {
    data: ({
        _transform: null;
        bezier: null;
        min: number;
        id: string;
        max: number;
        step: number;
        group: number;
        weight: number;
        dynamicPoolId?: undefined;
    } | {
        id: string;
        max: number;
        dynamicPoolId: string;
        min: number;
        step: number;
        bezier: null;
        weight: number;
        group: number;
        _transform: null;
    })[];
    id: string;
} | {
    data: ({
        _transform: null;
        min: number;
        max: number;
        group: number;
        step: number;
        id: string;
        bezier: null;
        weight: number;
        dynamicPoolId?: undefined;
    } | {
        dynamicPoolId: string;
        group: number;
        id: string;
        min: number;
        weight: number;
        step: number;
        max: number;
        bezier: null;
        _transform: null;
    })[];
    id: string;
} | {
    id: string;
    data: ({
        group: number;
        step: number;
        min: number;
        max: number;
        id: string;
        _transform: null;
        weight: number;
        bezier: null;
        dynamicPoolId?: undefined;
    } | {
        bezier: null;
        dynamicPoolId: string;
        max: number;
        id: string;
        _transform: null;
        group: number;
        step: number;
        min: number;
        weight: number;
    })[];
} | {
    id: string;
    data: ({
        id: string;
        group: number;
        bezier: null;
        _transform: null;
        min: number;
        step: number;
        max: number;
        weight: number;
        dynamicPoolId?: undefined;
    } | {
        group: number;
        id: string;
        max: number;
        bezier: null;
        min: number;
        weight: number;
        step: number;
        _transform: null;
        dynamicPoolId: string;
    })[];
} | {
    id: string;
    data: ({
        bezier: null;
        group: number;
        id: string;
        _transform: null;
        max: number;
        step: number;
        min: number;
        weight: number;
        dynamicPoolId?: undefined;
    } | {
        dynamicPoolId: string;
        bezier: null;
        id: string;
        max: number;
        min: number;
        weight: number;
        step: number;
        group: number;
        _transform: null;
    })[];
} | {
    id: string;
    data: {
        group: number;
        id: string;
        max: number;
        _transform: null;
        step: number;
        weight: number;
        bezier: null;
        min: number;
    }[];
} | {
    id: string;
    data: {
        step: number;
        group: number;
        _transform: null;
        min: number;
        bezier: null;
        max: number;
        weight: number;
        id: string;
    }[];
} | {
    data: {
        id: string;
        _transform: null;
        group: number;
        bezier: null;
        step: number;
        max: number;
        min: number;
        weight: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        id: string;
        max: number;
        group: number;
        _transform: null;
        weight: number;
        bezier: null;
        min: number;
        step: number;
    }[];
} | {
    data: {
        bezier: null;
        max: number;
        weight: number;
        group: number;
        id: string;
        step: number;
        min: number;
        _transform: null;
    }[];
    id: string;
} | {
    id: string;
    data: {
        group: number;
        _transform: null;
        max: number;
        bezier: null;
        min: number;
        weight: number;
        step: number;
        id: string;
    }[];
} | {
    data: {
        step: number;
        min: number;
        weight: number;
        id: string;
        max: number;
        group: number;
        bezier: null;
        _transform: null;
    }[];
    id: string;
} | {
    data: {
        step: number;
        _transform: null;
        bezier: null;
        id: string;
        min: number;
        group: number;
        max: number;
        weight: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        weight: number;
        max: number;
        bezier: null;
        group: number;
        _transform: null;
        id: string;
        step: number;
        min: number;
    }[];
} | {
    id: string;
    data: ({
        id: string;
        weight: number;
        step: number;
        bezier: null;
        min: number;
        _transform: null;
        max: number;
        group: number;
        dynamicPoolId?: undefined;
    } | {
        min: number;
        _transform: null;
        step: number;
        id: string;
        bezier: null;
        weight: number;
        dynamicPoolId: string;
        group: number;
        max: number;
    })[];
} | {
    id: string;
    data: {
        step: number;
        bezier: null;
        _transform: null;
        id: string;
        max: number;
        group: number;
        min: number;
        weight: number;
    }[];
} | {
    data: {
        step: number;
        _transform: null;
        min: number;
        max: number;
        bezier: null;
        id: string;
        weight: number;
        group: number;
    }[];
    id: string;
} | {
    id: string;
    data: ({
        _transform: null;
        group: number;
        weight: number;
        step: number;
        min: number;
        bezier: null;
        id: string;
        max: number;
        dynamicPoolId?: undefined;
    } | {
        group: number;
        max: number;
        id: string;
        min: number;
        weight: number;
        bezier: null;
        _transform: null;
        step: number;
        dynamicPoolId: string;
    })[];
} | {
    data: {
        min: number;
        bezier: null;
        max: number;
        _transform: null;
        weight: number;
        id: string;
        group: number;
        step: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        weight: number;
        group: number;
        bezier: null;
        min: number;
        id: string;
        _transform: null;
        step: number;
        max: number;
    }[];
} | {
    data: ({
        id: string;
        step: number;
        _transform: null;
        bezier: null;
        weight: number;
        group: number;
        max: number;
        min: number;
        dynamicPoolId?: undefined;
    } | {
        _transform: null;
        max: number;
        min: number;
        id: string;
        bezier: null;
        dynamicPoolId: string;
        group: number;
        weight: number;
        step: number;
    })[];
    id: string;
} | {
    data: ({
        group: number;
        _transform: null;
        id: string;
        weight: number;
        max: number;
        step: number;
        bezier: null;
        min: number;
        dynamicPoolId?: undefined;
    } | {
        max: number;
        id: string;
        min: number;
        weight: number;
        group: number;
        bezier: null;
        step: number;
        dynamicPoolId: string;
        _transform: null;
    })[];
    id: string;
} | {
    data: ({
        id: string;
        group: number;
        max: number;
        bezier: null;
        _transform: null;
        min: number;
        weight: number;
        step: number;
        dynamicPoolId?: undefined;
    } | {
        max: number;
        min: number;
        group: number;
        id: string;
        step: number;
        _transform: null;
        weight: number;
        bezier: null;
        dynamicPoolId: string;
    })[];
    id: string;
} | {
    data: ({
        bezier: null;
        min: number;
        _transform: null;
        step: number;
        group: number;
        id: string;
        max: number;
        weight: number;
        dynamicPoolId?: undefined;
    } | {
        step: number;
        group: number;
        id: string;
        max: number;
        bezier: null;
        min: number;
        dynamicPoolId: string;
        _transform: null;
        weight: number;
    })[];
    id: string;
} | {
    id: string;
    data: ({
        bezier: null;
        id: string;
        step: number;
        max: number;
        _transform: null;
        group: number;
        weight: number;
        min: number;
        dynamicPoolId?: undefined;
    } | {
        step: number;
        id: string;
        max: number;
        _transform: null;
        bezier: null;
        weight: number;
        group: number;
        dynamicPoolId: string;
        min: number;
    })[];
} | {
    id: string;
    data: {
        weight: number;
        group: number;
        max: number;
        _transform: null;
        step: number;
        bezier: null;
        id: string;
        min: number;
    }[];
} | {
    id: string;
    data: {
        max: number;
        group: number;
        bezier: null;
        weight: number;
        min: number;
        step: number;
        id: string;
        _transform: null;
    }[];
} | {
    id: string;
    data: {
        bezier: null;
        _transform: null;
        min: number;
        weight: number;
        step: number;
        group: number;
        id: string;
        max: number;
    }[];
} | {
    data: {
        id: string;
        _transform: null;
        step: number;
        group: number;
        max: number;
        weight: number;
        bezier: null;
        min: number;
    }[];
    id: string;
} | {
    data: {
        dynamicPoolId: string;
        _transform: null;
        max: number;
        step: number;
        bezier: null;
        id: string;
        weight: number;
        group: number;
        min: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        _transform: null;
        bezier: null;
        step: number;
        max: number;
        id: string;
        group: number;
        min: number;
        weight: number;
        dynamicPoolId: string;
    }[];
} | {
    id: string;
    data: {
        id: string;
        group: number;
        _transform: null;
        min: number;
        dynamicPoolId: string;
        step: number;
        weight: number;
        bezier: null;
        max: number;
    }[];
} | {
    data: {
        min: number;
        max: number;
        dynamicPoolId: string;
        bezier: null;
        group: number;
        step: number;
        id: string;
        _transform: null;
        weight: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        bezier: null;
        step: number;
        dynamicPoolId: string;
        _transform: null;
        max: number;
        weight: number;
        group: number;
        id: string;
        min: number;
    }[];
} | {
    data: {
        step: number;
        max: number;
        dynamicPoolId: string;
        id: string;
        _transform: null;
        min: number;
        group: number;
        bezier: null;
        weight: number;
    }[];
    id: string;
} | {
    data: {
        _transform: null;
        dynamicPoolId: string;
        bezier: null;
        step: number;
        min: number;
        max: number;
        group: number;
        id: string;
        weight: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        bezier: null;
        group: number;
        weight: number;
        min: number;
        max: number;
        dynamicPoolId: string;
        step: number;
        id: string;
        _transform: null;
    }[];
} | {
    id: string;
    data: {
        weight: number;
        group: number;
        _transform: null;
        dynamicPoolId: string;
        bezier: null;
        step: number;
        max: number;
        id: string;
        min: number;
    }[];
} | {
    id: string;
    data: {
        dynamicPoolId: string;
        min: number;
        _transform: null;
        id: string;
        bezier: null;
        step: number;
        max: number;
        weight: number;
        group: number;
    }[];
} | {
    data: {
        bezier: null;
        id: string;
        weight: number;
        dynamicPoolId: string;
        _transform: null;
        step: number;
        max: number;
        group: number;
        min: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        dynamicPoolId: string;
        bezier: null;
        min: number;
        _transform: null;
        group: number;
        max: number;
        weight: number;
        id: string;
        step: number;
    }[];
} | {
    data: {
        group: number;
        min: number;
        dynamicPoolId: string;
        max: number;
        weight: number;
        step: number;
        bezier: null;
        id: string;
        _transform: null;
    }[];
    id: string;
} | {
    data: {
        weight: number;
        _transform: null;
        min: number;
        step: number;
        dynamicPoolId: string;
        bezier: null;
        id: string;
        group: number;
        max: number;
    }[];
    id: string;
} | {
    data: {
        id: string;
        _transform: null;
        min: number;
        max: number;
        dynamicPoolId: string;
        bezier: null;
        group: number;
        weight: number;
        step: number;
    }[];
    id: string;
} | {
    data: {
        max: number;
        _transform: null;
        min: number;
        weight: number;
        group: number;
        id: string;
        step: number;
        dynamicPoolId: string;
        bezier: null;
    }[];
    id: string;
} | {
    data: {
        _transform: null;
        step: number;
        min: number;
        bezier: null;
        max: number;
        id: string;
        weight: number;
        dynamicPoolId: string;
        group: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        group: number;
        id: string;
        dynamicPoolId: string;
        step: number;
        _transform: null;
        min: number;
        weight: number;
        bezier: null;
        max: number;
    }[];
} | {
    id: string;
    data: {
        min: number;
        id: string;
        _transform: null;
        max: number;
        bezier: null;
        group: number;
        step: number;
        dynamicPoolId: string;
        weight: number;
    }[];
} | {
    id: string;
    data: {
        weight: number;
        bezier: null;
        id: string;
        dynamicPoolId: string;
        _transform: null;
        max: number;
        min: number;
        step: number;
        group: number;
    }[];
} | {
    data: {
        id: string;
        max: number;
        _transform: null;
        group: number;
        min: number;
        step: number;
        bezier: null;
        weight: number;
    }[];
    id: string;
} | {
    data: {
        step: number;
        group: number;
        bezier: null;
        min: number;
        id: string;
        max: number;
        weight: number;
        _transform: null;
    }[];
    id: string;
} | {
    data: {
        min: number;
        step: number;
        id: string;
        group: number;
        _transform: null;
        weight: number;
        bezier: null;
        max: number;
    }[];
    id: string;
} | {
    data: {
        id: string;
        group: number;
        bezier: null;
        _transform: null;
        step: number;
        min: number;
        weight: number;
        max: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        _transform: null;
        bezier: null;
        id: string;
        group: number;
        min: number;
        weight: number;
        max: number;
        step: number;
    }[];
} | {
    data: ({
        _transform: null;
        max: number;
        step: number;
        weight: number;
        group: number;
        bezier: null;
        min: number;
        id: string;
        dynamicPoolId?: undefined;
    } | {
        max: number;
        weight: number;
        dynamicPoolId: string;
        id: string;
        _transform: null;
        min: number;
        bezier: null;
        step: number;
        group: number;
    })[];
    id: string;
} | {
    data: {
        min: number;
        max: number;
        weight: number;
        bezier: null;
        id: string;
        group: number;
        _transform: null;
        step: number;
    }[];
    id: string;
} | {
    data: {
        _transform: null;
        step: number;
        max: number;
        group: number;
        bezier: null;
        weight: number;
        id: string;
        min: number;
    }[];
    id: string;
} | {
    id: string;
    data: ({
        bezier: null;
        _transform: null;
        weight: number;
        group: number;
        max: number;
        step: number;
        min: number;
        id: string;
        dynamicPoolId?: undefined;
    } | {
        group: number;
        step: number;
        bezier: null;
        max: number;
        id: string;
        weight: number;
        dynamicPoolId: string;
        _transform: null;
        min: number;
    })[];
} | {
    id: string;
    data: {
        max: number;
        min: number;
        group: number;
        bezier: null;
        step: number;
        id: string;
        weight: number;
        _transform: null;
    }[];
} | {
    id: string;
    data: {
        group: number;
        _transform: null;
        bezier: null;
        step: number;
        max: number;
        weight: number;
        id: string;
        min: number;
    }[];
} | {
    data: ({
        id: string;
        bezier: null;
        min: number;
        weight: number;
        max: number;
        group: number;
        _transform: null;
        step: number;
        dynamicPoolId?: undefined;
    } | {
        max: number;
        id: string;
        step: number;
        group: number;
        _transform: null;
        weight: number;
        min: number;
        dynamicPoolId: string;
        bezier: null;
    })[];
    id: string;
} | {
    data: ({
        step: number;
        max: number;
        bezier: null;
        _transform: null;
        weight: number;
        group: number;
        id: string;
        min: number;
        dynamicPoolId?: undefined;
    } | {
        id: string;
        weight: number;
        bezier: null;
        dynamicPoolId: string;
        _transform: null;
        min: number;
        group: number;
        step: number;
        max: number;
    })[];
    id: string;
} | {
    data: ({
        bezier: null;
        min: number;
        weight: number;
        step: number;
        _transform: null;
        id: string;
        max: number;
        group: number;
        dynamicPoolId?: undefined;
    } | {
        id: string;
        step: number;
        bezier: null;
        weight: number;
        group: number;
        max: number;
        dynamicPoolId: string;
        min: number;
        _transform: null;
    })[];
    id: string;
} | {
    id: string;
    data: ({
        group: number;
        min: number;
        step: number;
        _transform: null;
        weight: number;
        id: string;
        max: number;
        bezier: null;
        dynamicPoolId?: undefined;
    } | {
        step: number;
        group: number;
        _transform: null;
        id: string;
        bezier: null;
        max: number;
        weight: number;
        dynamicPoolId: string;
        min: number;
    })[];
} | {
    id: string;
    data: ({
        weight: number;
        id: string;
        step: number;
        min: number;
        _transform: null;
        max: number;
        group: number;
        bezier: null;
        dynamicPoolId?: undefined;
    } | {
        dynamicPoolId: string;
        _transform: null;
        group: number;
        bezier: null;
        weight: number;
        min: number;
        max: number;
        id: string;
        step: number;
    })[];
} | {
    id: string;
    data: {
        group: number;
        max: number;
        bezier: null;
        min: number;
        id: string;
        weight: number;
        _transform: null;
        step: number;
    }[];
} | {
    id: string;
    data: {
        group: number;
        _transform: null;
        weight: number;
        bezier: null;
        step: number;
        min: number;
        max: number;
        id: string;
    }[];
} | {
    id: string;
    data: {
        bezier: null;
        max: number;
        weight: number;
        step: number;
        group: number;
        _transform: null;
        min: number;
        id: string;
    }[];
} | {
    id: string;
    data: {
        group: number;
        _transform: null;
        max: number;
        min: number;
        step: number;
        bezier: null;
        weight: number;
        id: string;
    }[];
} | {
    data: {
        id: string;
        weight: number;
        max: number;
        _transform: null;
        min: number;
        step: number;
        bezier: null;
        group: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        group: number;
        _transform: null;
        id: string;
        min: number;
        max: number;
        weight: number;
        step: number;
        bezier: null;
    }[];
} | {
    data: {
        weight: number;
        step: number;
        bezier: null;
        max: number;
        id: string;
        min: number;
        group: number;
        _transform: null;
    }[];
    id: string;
} | {
    data: {
        group: number;
        id: string;
        weight: number;
        max: number;
        step: number;
        bezier: null;
        _transform: null;
        min: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        min: number;
        weight: number;
        max: number;
        bezier: null;
        group: number;
        step: number;
        id: string;
        _transform: null;
    }[];
} | {
    data: ({
        max: number;
        min: number;
        weight: number;
        id: string;
        group: number;
        _transform: null;
        step: number;
        bezier: null;
        dynamicPoolId?: undefined;
    } | {
        step: number;
        dynamicPoolId: string;
        bezier: null;
        weight: number;
        min: number;
        max: number;
        group: number;
        id: string;
        _transform: null;
    })[];
    id: string;
} | {
    id: string;
    data: {
        group: number;
        _transform: null;
        weight: number;
        max: number;
        min: number;
        id: string;
        bezier: null;
        step: number;
    }[];
} | {
    data: {
        min: number;
        group: number;
        bezier: null;
        _transform: null;
        weight: number;
        step: number;
        id: string;
        max: number;
    }[];
    id: string;
} | {
    id: string;
    data: ({
        weight: number;
        group: number;
        bezier: null;
        max: number;
        min: number;
        id: string;
        step: number;
        _transform: null;
        dynamicPoolId?: undefined;
    } | {
        dynamicPoolId: string;
        step: number;
        id: string;
        min: number;
        weight: number;
        bezier: null;
        group: number;
        _transform: null;
        max: number;
    })[];
} | {
    id: string;
    data: {
        min: number;
        max: number;
        bezier: null;
        step: number;
        weight: number;
        group: number;
        _transform: null;
        id: string;
    }[];
} | {
    id: string;
    data: {
        bezier: null;
        _transform: null;
        min: number;
        id: string;
        max: number;
        weight: number;
        step: number;
        group: number;
    }[];
} | {
    data: ({
        max: number;
        bezier: null;
        group: number;
        weight: number;
        min: number;
        step: number;
        _transform: null;
        id: string;
        dynamicPoolId?: undefined;
    } | {
        _transform: null;
        group: number;
        bezier: null;
        id: string;
        min: number;
        step: number;
        weight: number;
        dynamicPoolId: string;
        max: number;
    })[];
    id: string;
} | {
    data: ({
        bezier: null;
        max: number;
        id: string;
        step: number;
        weight: number;
        group: number;
        _transform: null;
        min: number;
        dynamicPoolId?: undefined;
    } | {
        max: number;
        weight: number;
        step: number;
        group: number;
        id: string;
        dynamicPoolId: string;
        _transform: null;
        bezier: null;
        min: number;
    })[];
    id: string;
} | {
    id: string;
    data: ({
        group: number;
        step: number;
        weight: number;
        bezier: null;
        _transform: null;
        min: number;
        id: string;
        max: number;
        dynamicPoolId?: undefined;
    } | {
        _transform: null;
        group: number;
        bezier: null;
        id: string;
        max: number;
        step: number;
        weight: number;
        min: number;
        dynamicPoolId: string;
    })[];
} | {
    data: ({
        min: number;
        group: number;
        id: string;
        _transform: null;
        weight: number;
        step: number;
        bezier: null;
        max: number;
        dynamicPoolId?: undefined;
    } | {
        id: string;
        weight: number;
        step: number;
        group: number;
        dynamicPoolId: string;
        _transform: null;
        min: number;
        max: number;
        bezier: null;
    })[];
    id: string;
} | {
    id: string;
    data: ({
        max: number;
        group: number;
        step: number;
        _transform: null;
        weight: number;
        bezier: null;
        min: number;
        id: string;
        dynamicPoolId?: undefined;
    } | {
        _transform: null;
        group: number;
        bezier: null;
        step: number;
        id: string;
        max: number;
        dynamicPoolId: string;
        min: number;
        weight: number;
    })[];
} | {
    data: {
        max: number;
        _transform: null;
        bezier: null;
        min: number;
        group: number;
        id: string;
        weight: number;
        step: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        group: number;
        step: number;
        max: number;
        id: string;
        weight: number;
        _transform: null;
        min: number;
        bezier: null;
    }[];
} | {
    id: string;
    data: {
        step: number;
        group: number;
        _transform: null;
        min: number;
        bezier: null;
        weight: number;
        max: number;
        id: string;
    }[];
} | {
    data: {
        id: string;
        min: number;
        step: number;
        bezier: null;
        group: number;
        max: number;
        _transform: null;
        weight: number;
    }[];
    id: string;
} | {
    data: {
        weight: number;
        step: number;
        group: number;
        bezier: null;
        id: string;
        _transform: null;
        min: number;
        max: number;
    }[];
    id: string;
} | {
    data: {
        _transform: null;
        min: number;
        max: number;
        weight: number;
        bezier: null;
        id: string;
        group: number;
        step: number;
    }[];
    id: string;
} | {
    data: {
        max: number;
        step: number;
        id: string;
        _transform: null;
        min: number;
        weight: number;
        group: number;
        bezier: null;
    }[];
    id: string;
} | {
    id: string;
    data: {
        group: number;
        _transform: null;
        min: number;
        bezier: null;
        weight: number;
        step: number;
        max: number;
        id: string;
    }[];
} | {
    id: string;
    data: {
        _transform: null;
        min: number;
        group: number;
        max: number;
        id: string;
        bezier: null;
        step: number;
        weight: number;
    }[];
} | {
    data: ({
        weight: number;
        min: number;
        step: number;
        group: number;
        bezier: null;
        id: string;
        max: number;
        _transform: null;
        dynamicPoolId?: undefined;
    } | {
        dynamicPoolId: string;
        id: string;
        group: number;
        min: number;
        max: number;
        bezier: null;
        weight: number;
        step: number;
        _transform: null;
    })[];
    id: string;
} | {
    data: {
        id: string;
        step: number;
        bezier: null;
        min: number;
        group: number;
        max: number;
        _transform: null;
        weight: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        min: number;
        group: number;
        max: number;
        weight: number;
        step: number;
        _transform: null;
        id: string;
        bezier: null;
    }[];
} | {
    data: ({
        id: string;
        bezier: null;
        group: number;
        _transform: null;
        min: number;
        max: number;
        weight: number;
        step: number;
        dynamicPoolId?: undefined;
    } | {
        group: number;
        id: string;
        max: number;
        min: number;
        _transform: null;
        step: number;
        dynamicPoolId: string;
        bezier: null;
        weight: number;
    })[];
    id: string;
} | {
    data: {
        bezier: null;
        id: string;
        step: number;
        group: number;
        max: number;
        _transform: null;
        weight: number;
        min: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        id: string;
        min: number;
        max: number;
        step: number;
        group: number;
        weight: number;
        _transform: null;
        bezier: null;
    }[];
} | {
    id: string;
    data: ({
        id: string;
        min: number;
        step: number;
        weight: number;
        max: number;
        bezier: null;
        _transform: null;
        group: number;
        dynamicPoolId?: undefined;
    } | {
        _transform: null;
        step: number;
        id: string;
        dynamicPoolId: string;
        min: number;
        max: number;
        bezier: null;
        group: number;
        weight: number;
    })[];
} | {
    id: string;
    data: ({
        weight: number;
        _transform: null;
        group: number;
        step: number;
        bezier: null;
        id: string;
        max: number;
        min: number;
        dynamicPoolId?: undefined;
    } | {
        _transform: null;
        dynamicPoolId: string;
        max: number;
        weight: number;
        min: number;
        step: number;
        bezier: null;
        id: string;
        group: number;
    })[];
} | {
    id: string;
    data: ({
        id: string;
        max: number;
        weight: number;
        bezier: null;
        step: number;
        min: number;
        group: number;
        _transform: null;
        dynamicPoolId?: undefined;
    } | {
        step: number;
        weight: number;
        group: number;
        min: number;
        bezier: null;
        max: number;
        _transform: null;
        dynamicPoolId: string;
        id: string;
    })[];
} | {
    data: ({
        id: string;
        weight: number;
        max: number;
        group: number;
        bezier: null;
        step: number;
        _transform: null;
        min: number;
        dynamicPoolId?: undefined;
    } | {
        max: number;
        bezier: null;
        _transform: null;
        weight: number;
        dynamicPoolId: string;
        id: string;
        group: number;
        min: number;
        step: number;
    })[];
    id: string;
} | {
    data: ({
        id: string;
        step: number;
        group: number;
        max: number;
        bezier: null;
        _transform: null;
        weight: number;
        min: number;
        dynamicPoolId?: undefined;
    } | {
        dynamicPoolId: string;
        step: number;
        bezier: null;
        weight: number;
        _transform: null;
        group: number;
        min: number;
        max: number;
        id: string;
    })[];
    id: string;
} | {
    data: {
        id: string;
        min: number;
        group: number;
        step: number;
        bezier: null;
        max: number;
        weight: number;
        _transform: null;
    }[];
    id: string;
} | {
    data: {
        id: string;
        weight: number;
        group: number;
        _transform: null;
        bezier: null;
        min: number;
        step: number;
        max: number;
    }[];
    id: string;
} | {
    data: {
        id: string;
        bezier: null;
        min: number;
        step: number;
        _transform: null;
        max: number;
        group: number;
        weight: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        min: number;
        group: number;
        step: number;
        max: number;
        weight: number;
        bezier: null;
        id: string;
        _transform: null;
    }[];
} | {
    id: string;
    data: {
        min: number;
        id: string;
        step: number;
        weight: number;
        group: number;
        max: number;
        bezier: null;
        _transform: null;
    }[];
} | {
    id: string;
    data: {
        bezier: null;
        weight: number;
        step: number;
        max: number;
        group: number;
        id: string;
        _transform: null;
        min: number;
    }[];
} | {
    id: string;
    data: {
        _transform: null;
        bezier: null;
        min: number;
        id: string;
        max: number;
        step: number;
        group: number;
        weight: number;
    }[];
} | {
    id: string;
    data: {
        _transform: null;
        weight: number;
        step: number;
        min: number;
        max: number;
        id: string;
        group: number;
        bezier: null;
    }[];
} | {
    id: string;
    data: {
        group: number;
        weight: number;
        id: string;
        _transform: null;
        bezier: null;
        max: number;
        min: number;
        step: number;
    }[];
} | {
    data: ({
        id: string;
        group: number;
        weight: number;
        bezier: null;
        min: number;
        max: number;
        _transform: null;
        step: number;
        dynamicPoolId?: undefined;
    } | {
        bezier: null;
        weight: number;
        min: number;
        _transform: null;
        dynamicPoolId: string;
        group: number;
        max: number;
        step: number;
        id: string;
    })[];
    id: string;
} | {
    id: string;
    data: {
        _transform: null;
        min: number;
        group: number;
        weight: number;
        id: string;
        step: number;
        bezier: null;
        max: number;
    }[];
} | {
    id: string;
    data: {
        _transform: null;
        min: number;
        id: string;
        step: number;
        group: number;
        weight: number;
        bezier: null;
        max: number;
    }[];
} | {
    data: ({
        weight: number;
        _transform: null;
        bezier: null;
        min: number;
        id: string;
        group: number;
        max: number;
        step: number;
        dynamicPoolId?: undefined;
    } | {
        step: number;
        min: number;
        _transform: null;
        dynamicPoolId: string;
        bezier: null;
        group: number;
        weight: number;
        max: number;
        id: string;
    })[];
    id: string;
} | {
    id: string;
    data: {
        max: number;
        weight: number;
        _transform: null;
        id: string;
        step: number;
        group: number;
        min: number;
        bezier: null;
    }[];
} | {
    data: {
        bezier: null;
        min: number;
        _transform: null;
        max: number;
        step: number;
        id: string;
        group: number;
        weight: number;
    }[];
    id: string;
} | {
    data: ({
        weight: number;
        _transform: null;
        min: number;
        step: number;
        id: string;
        max: number;
        bezier: null;
        group: number;
        dynamicPoolId?: undefined;
    } | {
        weight: number;
        step: number;
        id: string;
        _transform: null;
        max: number;
        bezier: null;
        dynamicPoolId: string;
        min: number;
        group: number;
    })[];
    id: string;
} | {
    id: string;
    data: ({
        group: number;
        weight: number;
        step: number;
        _transform: null;
        max: number;
        min: number;
        id: string;
        bezier: null;
        dynamicPoolId?: undefined;
    } | {
        dynamicPoolId: string;
        step: number;
        _transform: null;
        max: number;
        bezier: null;
        weight: number;
        group: number;
        id: string;
        min: number;
    })[];
} | {
    data: ({
        bezier: null;
        max: number;
        step: number;
        id: string;
        weight: number;
        group: number;
        min: number;
        _transform: null;
        dynamicPoolId?: undefined;
    } | {
        id: string;
        weight: number;
        step: number;
        group: number;
        min: number;
        dynamicPoolId: string;
        _transform: null;
        bezier: null;
        max: number;
    })[];
    id: string;
} | {
    id: string;
    data: ({
        bezier: null;
        id: string;
        min: number;
        step: number;
        _transform: null;
        weight: number;
        group: number;
        max: number;
        dynamicPoolId?: undefined;
    } | {
        bezier: null;
        dynamicPoolId: string;
        _transform: null;
        weight: number;
        group: number;
        min: number;
        id: string;
        step: number;
        max: number;
    })[];
} | {
    id: string;
    data: ({
        bezier: null;
        min: number;
        step: number;
        weight: number;
        id: string;
        max: number;
        group: number;
        _transform: null;
        dynamicPoolId?: undefined;
    } | {
        min: number;
        weight: number;
        bezier: null;
        max: number;
        id: string;
        dynamicPoolId: string;
        group: number;
        _transform: null;
        step: number;
    })[];
} | {
    data: {
        weight: number;
        group: number;
        min: number;
        _transform: null;
        id: string;
        max: number;
        step: number;
        bezier: null;
    }[];
    id: string;
} | {
    data: {
        max: number;
        weight: number;
        id: string;
        _transform: null;
        group: number;
        step: number;
        bezier: null;
        min: number;
    }[];
    id: string;
} | {
    data: {
        id: string;
        _transform: null;
        max: number;
        step: number;
        bezier: null;
        weight: number;
        min: number;
        group: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        min: number;
        bezier: null;
        id: string;
        _transform: null;
        step: number;
        max: number;
        group: number;
        weight: number;
    }[];
} | {
    id: string;
    data: {
        id: string;
        min: number;
        step: number;
        _transform: null;
        weight: number;
        bezier: null;
        max: number;
        group: number;
    }[];
} | {
    data: {
        bezier: null;
        max: number;
        _transform: null;
        step: number;
        id: string;
        group: number;
        min: number;
        weight: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        id: string;
        _transform: null;
        weight: number;
        min: number;
        bezier: null;
        group: number;
        step: number;
        max: number;
    }[];
} | {
    data: {
        id: string;
        group: number;
        bezier: null;
        max: number;
        weight: number;
        step: number;
        min: number;
        _transform: null;
    }[];
    id: string;
} | {
    data: {
        step: number;
        bezier: null;
        _transform: null;
        min: number;
        group: number;
        id: string;
        max: number;
        weight: number;
    }[];
    id: string;
} | {
    data: ({
        step: number;
        max: number;
        bezier: null;
        min: number;
        weight: number;
        id: string;
        _transform: null;
        group: number;
        dynamicPoolId?: undefined;
    } | {
        bezier: null;
        group: number;
        dynamicPoolId: string;
        weight: number;
        id: string;
        max: number;
        _transform: null;
        step: number;
        min: number;
    })[];
    id: string;
} | {
    data: {
        bezier: null;
        step: number;
        weight: number;
        _transform: null;
        max: number;
        id: string;
        min: number;
        group: number;
    }[];
    id: string;
} | {
    data: {
        min: number;
        group: number;
        max: number;
        step: number;
        bezier: null;
        _transform: null;
        weight: number;
        id: string;
    }[];
    id: string;
} | {
    data: ({
        id: string;
        min: number;
        step: number;
        group: number;
        max: number;
        weight: number;
        bezier: null;
        _transform: null;
        dynamicPoolId?: undefined;
    } | {
        _transform: null;
        group: number;
        bezier: null;
        step: number;
        id: string;
        weight: number;
        dynamicPoolId: string;
        min: number;
        max: number;
    })[];
    id: string;
} | {
    data: {
        max: number;
        step: number;
        id: string;
        weight: number;
        group: number;
        bezier: null;
        _transform: null;
        min: number;
    }[];
    id: string;
} | {
    data: {
        _transform: null;
        max: number;
        min: number;
        bezier: null;
        weight: number;
        group: number;
        step: number;
        id: string;
    }[];
    id: string;
} | {
    data: ({
        weight: number;
        bezier: null;
        _transform: null;
        min: number;
        id: string;
        max: number;
        group: number;
        step: number;
        dynamicPoolId?: undefined;
    } | {
        group: number;
        bezier: null;
        step: number;
        dynamicPoolId: string;
        _transform: null;
        weight: number;
        id: string;
        max: number;
        min: number;
    })[];
    id: string;
} | {
    data: ({
        min: number;
        step: number;
        bezier: null;
        id: string;
        _transform: null;
        max: number;
        group: number;
        weight: number;
        dynamicPoolId?: undefined;
    } | {
        id: string;
        weight: number;
        min: number;
        max: number;
        group: number;
        step: number;
        bezier: null;
        _transform: null;
        dynamicPoolId: string;
    })[];
    id: string;
} | {
    id: string;
    data: ({
        weight: number;
        bezier: null;
        group: number;
        id: string;
        min: number;
        step: number;
        max: number;
        _transform: null;
        dynamicPoolId?: undefined;
    } | {
        group: number;
        step: number;
        weight: number;
        _transform: null;
        min: number;
        max: number;
        dynamicPoolId: string;
        id: string;
        bezier: null;
    })[];
} | {
    data: ({
        group: number;
        max: number;
        min: number;
        step: number;
        _transform: null;
        id: string;
        bezier: null;
        weight: number;
        dynamicPoolId?: undefined;
    } | {
        id: string;
        group: number;
        max: number;
        step: number;
        weight: number;
        bezier: null;
        _transform: null;
        min: number;
        dynamicPoolId: string;
    })[];
    id: string;
} | {
    id: string;
    data: ({
        id: string;
        min: number;
        weight: number;
        group: number;
        max: number;
        step: number;
        bezier: null;
        _transform: null;
        dynamicPoolId?: undefined;
    } | {
        bezier: null;
        dynamicPoolId: string;
        group: number;
        weight: number;
        id: string;
        _transform: null;
        min: number;
        step: number;
        max: number;
    })[];
} | {
    id: string;
    data: {
        id: string;
        max: number;
        bezier: null;
        _transform: null;
        min: number;
        group: number;
        step: number;
        weight: number;
    }[];
} | {
    data: {
        weight: number;
        step: number;
        bezier: null;
        group: number;
        max: number;
        min: number;
        id: string;
        _transform: null;
    }[];
    id: string;
} | {
    data: {
        id: string;
        _transform: null;
        max: number;
        weight: number;
        bezier: null;
        min: number;
        group: number;
        step: number;
    }[];
    id: string;
} | {
    data: {
        _transform: null;
        id: string;
        group: number;
        bezier: null;
        max: number;
        weight: number;
        step: number;
        min: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        step: number;
        id: string;
        min: number;
        _transform: null;
        max: number;
        group: number;
        weight: number;
        bezier: null;
    }[];
} | {
    id: string;
    data: {
        bezier: null;
        group: number;
        min: number;
        id: string;
        max: number;
        step: number;
        weight: number;
        _transform: null;
    }[];
} | {
    id: string;
    data: ({
        step: number;
        bezier: null;
        _transform: null;
        max: number;
        min: number;
        id: string;
        group: number;
        weight: number;
        dynamicPoolId?: undefined;
    } | {
        group: number;
        bezier: null;
        _transform: null;
        id: string;
        max: number;
        step: number;
        min: number;
        weight: number;
        dynamicPoolId: string;
    })[];
} | {
    id: string;
    data: {
        step: number;
        weight: number;
        min: number;
        group: number;
        bezier: null;
        _transform: null;
        id: string;
        max: number;
    }[];
} | {
    id: string;
    data: {
        id: string;
        weight: number;
        min: number;
        _transform: null;
        max: number;
        group: number;
        step: number;
        bezier: null;
    }[];
} | {
    id: string;
    data: ({
        weight: number;
        id: string;
        min: number;
        max: number;
        _transform: null;
        bezier: null;
        step: number;
        group: number;
        dynamicPoolId?: undefined;
    } | {
        max: number;
        id: string;
        step: number;
        _transform: null;
        bezier: null;
        min: number;
        group: number;
        dynamicPoolId: string;
        weight: number;
    })[];
} | {
    data: {
        group: number;
        step: number;
        id: string;
        min: number;
        bezier: null;
        max: number;
        weight: number;
        _transform: null;
    }[];
    id: string;
} | {
    id: string;
    data: {
        bezier: null;
        group: number;
        max: number;
        _transform: null;
        weight: number;
        id: string;
        step: number;
        min: number;
    }[];
} | {
    data: ({
        max: number;
        id: string;
        weight: number;
        _transform: null;
        step: number;
        min: number;
        group: number;
        bezier: null;
        dynamicPoolId?: undefined;
    } | {
        step: number;
        id: string;
        _transform: null;
        bezier: null;
        group: number;
        weight: number;
        dynamicPoolId: string;
        min: number;
        max: number;
    })[];
    id: string;
} | {
    id: string;
    data: ({
        weight: number;
        group: number;
        step: number;
        min: number;
        max: number;
        bezier: null;
        id: string;
        _transform: null;
        dynamicPoolId?: undefined;
    } | {
        max: number;
        step: number;
        min: number;
        weight: number;
        id: string;
        group: number;
        bezier: null;
        dynamicPoolId: string;
        _transform: null;
    })[];
} | {
    id: string;
    data: ({
        max: number;
        _transform: null;
        weight: number;
        id: string;
        bezier: null;
        min: number;
        group: number;
        step: number;
        dynamicPoolId?: undefined;
    } | {
        weight: number;
        group: number;
        max: number;
        dynamicPoolId: string;
        _transform: null;
        bezier: null;
        step: number;
        id: string;
        min: number;
    })[];
} | {
    id: string;
    data: ({
        id: string;
        step: number;
        min: number;
        _transform: null;
        max: number;
        weight: number;
        bezier: null;
        group: number;
        dynamicPoolId?: undefined;
    } | {
        bezier: null;
        weight: number;
        min: number;
        step: number;
        dynamicPoolId: string;
        group: number;
        _transform: null;
        max: number;
        id: string;
    })[];
} | {
    data: ({
        _transform: null;
        min: number;
        weight: number;
        id: string;
        step: number;
        bezier: null;
        group: number;
        max: number;
        dynamicPoolId?: undefined;
    } | {
        group: number;
        min: number;
        dynamicPoolId: string;
        bezier: null;
        _transform: null;
        max: number;
        weight: number;
        step: number;
        id: string;
    })[];
    id: string;
} | {
    id: string;
    data: {
        min: number;
        max: number;
        bezier: null;
        id: string;
        weight: number;
        step: number;
        group: number;
        _transform: null;
    }[];
} | {
    id: string;
    data: {
        bezier: null;
        step: number;
        weight: number;
        id: string;
        _transform: null;
        max: number;
        group: number;
        min: number;
    }[];
} | {
    id: string;
    data: {
        id: string;
        weight: number;
        max: number;
        _transform: null;
        group: number;
        step: number;
        min: number;
        bezier: null;
    }[];
} | {
    id: string;
    data: {
        max: number;
        weight: number;
        step: number;
        bezier: null;
        id: string;
        min: number;
        group: number;
        _transform: null;
    }[];
} | {
    data: {
        max: number;
        id: string;
        min: number;
        step: number;
        group: number;
        weight: number;
        bezier: null;
        _transform: null;
    }[];
    id: string;
} | {
    id: string;
    data: {
        step: number;
        max: number;
        group: number;
        min: number;
        bezier: null;
        id: string;
        _transform: null;
        weight: number;
    }[];
} | {
    data: {
        id: string;
        group: number;
        _transform: null;
        min: number;
        max: number;
        bezier: null;
        weight: number;
        step: number;
    }[];
    id: string;
} | {
    data: {
        _transform: null;
        step: number;
        max: number;
        bezier: null;
        min: number;
        group: number;
        id: string;
        weight: number;
    }[];
    id: string;
} | {
    data: {
        id: string;
        group: number;
        min: number;
        _transform: null;
        bezier: null;
        step: number;
        max: number;
        weight: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        max: number;
        weight: number;
        step: number;
        _transform: null;
        bezier: null;
        min: number;
        id: string;
        group: number;
    }[];
} | {
    id: string;
    data: {
        weight: number;
        group: number;
        id: string;
        max: number;
        min: number;
        bezier: null;
        _transform: null;
        step: number;
    }[];
} | {
    id: string;
    data: {
        _transform: null;
        step: number;
        id: string;
        min: number;
        group: number;
        bezier: null;
        max: number;
        weight: number;
    }[];
} | {
    data: ({
        group: number;
        min: number;
        weight: number;
        max: number;
        step: number;
        _transform: null;
        bezier: null;
        id: string;
        dynamicPoolId?: undefined;
    } | {
        _transform: null;
        id: string;
        max: number;
        dynamicPoolId: string;
        min: number;
        bezier: null;
        step: number;
        group: number;
        weight: number;
    })[];
    id: string;
} | {
    id: string;
    data: {
        _transform: null;
        id: string;
        step: number;
        min: number;
        group: number;
        bezier: null;
        max: number;
        weight: number;
    }[];
} | {
    data: {
        id: string;
        min: number;
        _transform: null;
        group: number;
        bezier: null;
        weight: number;
        step: number;
        max: number;
    }[];
    id: string;
} | {
    id: string;
    data: ({
        step: number;
        group: number;
        id: string;
        _transform: null;
        bezier: null;
        max: number;
        weight: number;
        min: number;
        dynamicPoolId?: undefined;
    } | {
        group: number;
        weight: number;
        min: number;
        max: number;
        _transform: null;
        id: string;
        dynamicPoolId: string;
        bezier: null;
        step: number;
    })[];
} | {
    id: string;
    data: {
        group: number;
        min: number;
        max: number;
        id: string;
        bezier: null;
        _transform: null;
        step: number;
        weight: number;
    }[];
} | {
    data: {
        group: number;
        max: number;
        _transform: null;
        step: number;
        id: string;
        min: number;
        weight: number;
        bezier: null;
    }[];
    id: string;
} | {
    id: string;
    data: ({
        max: number;
        step: number;
        weight: number;
        group: number;
        bezier: null;
        id: string;
        _transform: null;
        min: number;
        dynamicPoolId?: undefined;
    } | {
        id: string;
        min: number;
        step: number;
        group: number;
        max: number;
        bezier: null;
        _transform: null;
        dynamicPoolId: string;
        weight: number;
    })[];
} | {
    id: string;
    data: ({
        min: number;
        max: number;
        step: number;
        bezier: null;
        id: string;
        _transform: null;
        group: number;
        weight: number;
        dynamicPoolId?: undefined;
    } | {
        _transform: null;
        dynamicPoolId: string;
        bezier: null;
        group: number;
        id: string;
        min: number;
        weight: number;
        max: number;
        step: number;
    })[];
} | {
    id: string;
    data: ({
        group: number;
        _transform: null;
        min: number;
        step: number;
        id: string;
        bezier: null;
        max: number;
        weight: number;
        dynamicPoolId?: undefined;
    } | {
        step: number;
        id: string;
        max: number;
        min: number;
        group: number;
        dynamicPoolId: string;
        weight: number;
        _transform: null;
        bezier: null;
    })[];
} | {
    id: string;
    data: ({
        bezier: null;
        id: string;
        max: number;
        weight: number;
        step: number;
        _transform: null;
        group: number;
        min: number;
        dynamicPoolId?: undefined;
    } | {
        id: string;
        max: number;
        dynamicPoolId: string;
        step: number;
        bezier: null;
        min: number;
        weight: number;
        _transform: null;
        group: number;
    })[];
} | {
    id: string;
    data: ({
        _transform: null;
        bezier: null;
        min: number;
        group: number;
        weight: number;
        max: number;
        id: string;
        step: number;
        dynamicPoolId?: undefined;
    } | {
        bezier: null;
        id: string;
        _transform: null;
        step: number;
        weight: number;
        dynamicPoolId: string;
        group: number;
        min: number;
        max: number;
    })[];
} | {
    id: string;
    data: {
        min: number;
        max: number;
        bezier: null;
        weight: number;
        group: number;
        id: string;
        _transform: null;
        step: number;
    }[];
} | {
    data: {
        min: number;
        step: number;
        weight: number;
        max: number;
        _transform: null;
        group: number;
        id: string;
        bezier: null;
    }[];
    id: string;
} | {
    data: {
        bezier: null;
        _transform: null;
        min: number;
        weight: number;
        step: number;
        id: string;
        max: number;
        group: number;
    }[];
    id: string;
} | {
    data: {
        min: number;
        weight: number;
        id: string;
        group: number;
        max: number;
        bezier: null;
        _transform: null;
        step: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        id: string;
        group: number;
        min: number;
        max: number;
        step: number;
        bezier: null;
        weight: number;
        _transform: null;
    }[];
} | {
    id: string;
    data: {
        min: number;
        id: string;
        max: number;
        weight: number;
        bezier: null;
        group: number;
        step: number;
        _transform: null;
    }[];
} | {
    data: {
        id: string;
        group: number;
        max: number;
        weight: number;
        _transform: null;
        min: number;
        step: number;
        bezier: null;
    }[];
    id: string;
} | {
    data: {
        bezier: null;
        min: number;
        max: number;
        id: string;
        group: number;
        weight: number;
        _transform: null;
        step: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        max: number;
        bezier: null;
        _transform: null;
        weight: number;
        min: number;
        id: string;
        group: number;
        step: number;
    }[];
} | {
    id: string;
    data: ({
        bezier: null;
        max: number;
        id: string;
        group: number;
        step: number;
        _transform: null;
        weight: number;
        min: number;
        dynamicPoolId?: undefined;
    } | {
        max: number;
        group: number;
        _transform: null;
        weight: number;
        dynamicPoolId: string;
        bezier: null;
        id: string;
        min: number;
        step: number;
    })[];
} | {
    data: {
        bezier: null;
        id: string;
        weight: number;
        step: number;
        _transform: null;
        group: number;
        min: number;
        max: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        bezier: null;
        step: number;
        id: string;
        _transform: null;
        weight: number;
        group: number;
        max: number;
        min: number;
    }[];
} | {
    id: string;
    data: ({
        weight: number;
        id: string;
        group: number;
        _transform: null;
        step: number;
        bezier: null;
        min: number;
        max: number;
        dynamicPoolId?: undefined;
    } | {
        id: string;
        bezier: null;
        dynamicPoolId: string;
        group: number;
        min: number;
        max: number;
        weight: number;
        step: number;
        _transform: null;
    })[];
} | {
    id: string;
    data: {
        bezier: null;
        step: number;
        group: number;
        min: number;
        _transform: null;
        id: string;
        max: number;
        weight: number;
    }[];
} | {
    data: {
        _transform: null;
        weight: number;
        id: string;
        max: number;
        bezier: null;
        group: number;
        min: number;
        step: number;
    }[];
    id: string;
} | {
    id: string;
    data: ({
        step: number;
        max: number;
        weight: number;
        bezier: null;
        _transform: null;
        group: number;
        min: number;
        id: string;
        dynamicPoolId?: undefined;
    } | {
        step: number;
        dynamicPoolId: string;
        id: string;
        min: number;
        weight: number;
        max: number;
        bezier: null;
        _transform: null;
        group: number;
    })[];
} | {
    id: string;
    data: ({
        max: number;
        _transform: null;
        min: number;
        step: number;
        bezier: null;
        group: number;
        id: string;
        weight: number;
        dynamicPoolId?: undefined;
    } | {
        max: number;
        group: number;
        id: string;
        weight: number;
        bezier: null;
        _transform: null;
        min: number;
        step: number;
        dynamicPoolId: string;
    })[];
} | {
    id: string;
    data: ({
        min: number;
        _transform: null;
        max: number;
        bezier: null;
        step: number;
        group: number;
        weight: number;
        id: string;
        dynamicPoolId?: undefined;
    } | {
        id: string;
        dynamicPoolId: string;
        _transform: null;
        bezier: null;
        min: number;
        max: number;
        group: number;
        step: number;
        weight: number;
    })[];
} | {
    data: ({
        max: number;
        group: number;
        id: string;
        _transform: null;
        bezier: null;
        weight: number;
        step: number;
        min: number;
        dynamicPoolId?: undefined;
    } | {
        max: number;
        min: number;
        bezier: null;
        id: string;
        dynamicPoolId: string;
        group: number;
        _transform: null;
        weight: number;
        step: number;
    })[];
    id: string;
} | {
    data: ({
        id: string;
        min: number;
        max: number;
        group: number;
        _transform: null;
        bezier: null;
        step: number;
        weight: number;
        dynamicPoolId?: undefined;
    } | {
        group: number;
        dynamicPoolId: string;
        id: string;
        max: number;
        weight: number;
        min: number;
        bezier: null;
        step: number;
        _transform: null;
    })[];
    id: string;
} | {
    data: {
        step: number;
        _transform: null;
        max: number;
        weight: number;
        id: string;
        bezier: null;
        min: number;
        group: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        group: number;
        bezier: null;
        max: number;
        step: number;
        weight: number;
        id: string;
        _transform: null;
        min: number;
    }[];
} | {
    data: {
        group: number;
        _transform: null;
        max: number;
        weight: number;
        step: number;
        id: string;
        bezier: null;
        min: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        bezier: null;
        id: string;
        max: number;
        min: number;
        weight: number;
        group: number;
        _transform: null;
        step: number;
    }[];
} | {
    data: {
        group: number;
        bezier: null;
        id: string;
        step: number;
        min: number;
        max: number;
        weight: number;
        _transform: null;
    }[];
    id: string;
} | {
    id: string;
    data: {
        _transform: null;
        bezier: null;
        min: number;
        id: string;
        max: number;
        group: number;
        step: number;
        weight: number;
    }[];
} | {
    id: string;
    data: {
        group: number;
        bezier: null;
        id: string;
        _transform: null;
        step: number;
        min: number;
        max: number;
        weight: number;
    }[];
} | {
    data: {
        weight: number;
        group: number;
        max: number;
        _transform: null;
        id: string;
        step: number;
        bezier: null;
        min: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        bezier: null;
        weight: number;
        id: string;
        min: number;
        max: number;
        group: number;
        _transform: null;
        step: number;
    }[];
} | {
    data: {
        bezier: null;
        max: number;
        step: number;
        group: number;
        dynamicPoolId: string;
        _transform: null;
        weight: number;
        min: number;
        id: string;
    }[];
    id: string;
} | {
    data: {
        min: number;
        step: number;
        group: number;
        bezier: null;
        max: number;
        id: string;
        dynamicPoolId: string;
        _transform: null;
        weight: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        group: number;
        min: number;
        _transform: null;
        id: string;
        bezier: null;
        max: number;
        step: number;
        weight: number;
    }[];
} | {
    data: {
        step: number;
        bezier: null;
        id: string;
        weight: number;
        _transform: null;
        min: number;
        group: number;
        max: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        bezier: null;
        min: number;
        group: number;
        step: number;
        id: string;
        _transform: null;
        max: number;
        weight: number;
    }[];
} | {
    id: string;
    data: {
        bezier: null;
        id: string;
        _transform: null;
        max: number;
        group: number;
        weight: number;
        step: number;
        min: number;
    }[];
} | {
    data: ({
        dynamicPoolId: string;
        _transform: null;
        max: number;
        weight: number;
        group: number;
        bezier: null;
        step: number;
        id: string;
        min: number;
    } | {
        weight: number;
        _transform: null;
        group: number;
        min: number;
        id: string;
        step: number;
        max: number;
        bezier: null;
        dynamicPoolId?: undefined;
    })[];
    id: string;
} | {
    id: string;
    data: ({
        bezier: null;
        max: number;
        id: string;
        min: number;
        step: number;
        weight: number;
        group: number;
        _transform: null;
        dynamicPoolId: string;
    } | {
        step: number;
        id: string;
        group: number;
        bezier: null;
        _transform: null;
        weight: number;
        min: number;
        max: number;
        dynamicPoolId?: undefined;
    })[];
} | {
    id: string;
    data: ({
        weight: number;
        step: number;
        group: number;
        bezier: null;
        _transform: null;
        id: string;
        min: number;
        max: number;
        dynamicPoolId: string;
    } | {
        min: number;
        _transform: null;
        id: string;
        group: number;
        step: number;
        bezier: null;
        max: number;
        weight: number;
        dynamicPoolId?: undefined;
    })[];
} | {
    data: ({
        id: string;
        _transform: null;
        weight: number;
        group: number;
        max: number;
        dynamicPoolId: string;
        bezier: null;
        min: number;
        step: number;
    } | {
        min: number;
        max: number;
        weight: number;
        bezier: null;
        group: number;
        id: string;
        _transform: null;
        step: number;
        dynamicPoolId?: undefined;
    })[];
    id: string;
} | {
    data: ({
        weight: number;
        dynamicPoolId: string;
        step: number;
        min: number;
        id: string;
        group: number;
        max: number;
        bezier: null;
        _transform: null;
    } | {
        step: number;
        bezier: null;
        max: number;
        _transform: null;
        id: string;
        group: number;
        weight: number;
        min: number;
        dynamicPoolId?: undefined;
    })[];
    id: string;
} | {
    id: string;
    data: ({
        _transform: null;
        bezier: null;
        min: number;
        weight: number;
        group: number;
        dynamicPoolId: string;
        max: number;
        step: number;
        id: string;
    } | {
        group: number;
        max: number;
        _transform: null;
        min: number;
        weight: number;
        step: number;
        bezier: null;
        id: string;
        dynamicPoolId?: undefined;
    })[];
} | {
    id: string;
    data: {
        min: number;
        bezier: null;
        weight: number;
        group: number;
        max: number;
        step: number;
        id: string;
        _transform: null;
    }[];
} | {
    data: {
        max: number;
        bezier: null;
        step: number;
        group: number;
        id: string;
        weight: number;
        min: number;
        _transform: null;
    }[];
    id: string;
} | {
    data: {
        bezier: null;
        group: number;
        min: number;
        step: number;
        id: string;
        _transform: null;
        max: number;
        weight: number;
    }[];
    id: string;
} | {
    data: {
        bezier: null;
        _transform: null;
        max: number;
        group: number;
        weight: number;
        id: string;
        step: number;
        min: number;
    }[];
    id: string;
} | {
    data: {
        step: number;
        group: number;
        id: string;
        _transform: null;
        min: number;
        max: number;
        weight: number;
        bezier: null;
    }[];
    id: string;
} | {
    id: string;
    data: {
        max: number;
        bezier: null;
        _transform: null;
        weight: number;
        min: number;
        group: number;
        id: string;
        step: number;
    }[];
} | {
    data: {
        weight: number;
        id: string;
        _transform: null;
        step: number;
        bezier: null;
        max: number;
        group: number;
        min: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        step: number;
        bezier: null;
        _transform: null;
        min: number;
        weight: number;
        max: number;
        group: number;
        id: string;
    }[];
} | {
    id: string;
    data: ({
        step: number;
        max: number;
        bezier: null;
        min: number;
        group: number;
        _transform: null;
        id: string;
        weight: number;
        dynamicPoolId?: undefined;
    } | {
        _transform: null;
        dynamicPoolId: string;
        step: number;
        id: string;
        group: number;
        max: number;
        bezier: null;
        weight: number;
        min: number;
    })[];
} | {
    id: string;
    data: {
        max: number;
        weight: number;
        id: string;
        group: number;
        _transform: null;
        bezier: null;
        min: number;
        step: number;
    }[];
} | {
    id: string;
    data: {
        min: number;
        max: number;
        group: number;
        id: string;
        step: number;
        weight: number;
        _transform: null;
        bezier: null;
    }[];
} | {
    id: string;
    data: ({
        max: number;
        weight: number;
        _transform: null;
        step: number;
        group: number;
        bezier: null;
        id: string;
        min: number;
        dynamicPoolId?: undefined;
    } | {
        id: string;
        max: number;
        step: number;
        dynamicPoolId: string;
        bezier: null;
        min: number;
        group: number;
        weight: number;
        _transform: null;
    })[];
} | {
    id: string;
    data: {
        group: number;
        bezier: null;
        id: string;
        max: number;
        min: number;
        weight: number;
        step: number;
        _transform: null;
    }[];
} | {
    id: string;
    data: {
        weight: number;
        id: string;
        bezier: null;
        max: number;
        min: number;
        group: number;
        _transform: null;
        step: number;
    }[];
} | {
    id: string;
    data: ({
        group: number;
        max: number;
        bezier: null;
        _transform: null;
        min: number;
        weight: number;
        id: string;
        step: number;
        dynamicPoolId?: undefined;
    } | {
        bezier: null;
        _transform: null;
        group: number;
        id: string;
        step: number;
        max: number;
        dynamicPoolId: string;
        min: number;
        weight: number;
    })[];
} | {
    id: string;
    data: ({
        id: string;
        step: number;
        max: number;
        bezier: null;
        min: number;
        weight: number;
        group: number;
        _transform: null;
        dynamicPoolId?: undefined;
    } | {
        _transform: null;
        max: number;
        id: string;
        bezier: null;
        min: number;
        dynamicPoolId: string;
        weight: number;
        group: number;
        step: number;
    })[];
} | {
    data: ({
        group: number;
        min: number;
        _transform: null;
        weight: number;
        step: number;
        max: number;
        bezier: null;
        id: string;
        dynamicPoolId?: undefined;
    } | {
        step: number;
        group: number;
        dynamicPoolId: string;
        id: string;
        bezier: null;
        min: number;
        max: number;
        weight: number;
        _transform: null;
    })[];
    id: string;
} | {
    id: string;
    data: ({
        bezier: null;
        weight: number;
        step: number;
        id: string;
        group: number;
        min: number;
        max: number;
        _transform: null;
        dynamicPoolId?: undefined;
    } | {
        group: number;
        id: string;
        min: number;
        max: number;
        dynamicPoolId: string;
        bezier: null;
        step: number;
        _transform: null;
        weight: number;
    })[];
} | {
    id: string;
    data: ({
        weight: number;
        group: number;
        id: string;
        step: number;
        min: number;
        bezier: null;
        max: number;
        _transform: null;
        dynamicPoolId?: undefined;
    } | {
        dynamicPoolId: string;
        _transform: null;
        weight: number;
        min: number;
        bezier: null;
        step: number;
        group: number;
        id: string;
        max: number;
    })[];
} | {
    id: string;
    data: {
        step: number;
        bezier: null;
        group: number;
        _transform: null;
        max: number;
        weight: number;
        id: string;
        min: number;
    }[];
} | {
    data: {
        _transform: null;
        step: number;
        bezier: null;
        id: string;
        min: number;
        max: number;
        group: number;
        weight: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        step: number;
        max: number;
        weight: number;
        min: number;
        bezier: null;
        id: string;
        _transform: null;
        group: number;
    }[];
} | {
    id: string;
    data: {
        min: number;
        weight: number;
        bezier: null;
        _transform: null;
        step: number;
        group: number;
        max: number;
        id: string;
    }[];
} | {
    id: string;
    data: {
        group: number;
        weight: number;
        id: string;
        step: number;
        min: number;
        max: number;
        bezier: null;
        _transform: null;
    }[];
} | {
    id: string;
    data: {
        _transform: null;
        step: number;
        group: number;
        weight: number;
        bezier: null;
        id: string;
        min: number;
        max: number;
    }[];
} | {
    data: {
        id: string;
        _transform: null;
        max: number;
        step: number;
        group: number;
        min: number;
        bezier: null;
        weight: number;
    }[];
    id: string;
} | {
    data: {
        min: number;
        group: number;
        weight: number;
        id: string;
        _transform: null;
        max: number;
        step: number;
        bezier: null;
    }[];
    id: string;
} | {
    id: string;
    data: {
        weight: number;
        id: string;
        group: number;
        max: number;
        step: number;
        _transform: null;
        bezier: null;
        min: number;
    }[];
} | {
    id: string;
    data: {
        group: number;
        id: string;
        min: number;
        bezier: null;
        step: number;
        _transform: null;
        weight: number;
        max: number;
    }[];
} | {
    data: {
        weight: number;
        group: number;
        max: number;
        step: number;
        bezier: null;
        id: string;
        _transform: null;
        min: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        bezier: null;
        min: number;
        step: number;
        max: number;
        _transform: null;
        id: string;
        weight: number;
        group: number;
    }[];
} | {
    id: string;
    data: ({
        max: number;
        group: number;
        bezier: null;
        id: string;
        dynamicPoolId: string;
        _transform: null;
        weight: number;
        step: number;
        min: number;
    } | {
        id: string;
        _transform: null;
        group: number;
        weight: number;
        max: number;
        min: number;
        bezier: null;
        step: number;
        dynamicPoolId?: undefined;
    })[];
} | {
    data: ({
        dynamicPoolId: string;
        bezier: null;
        weight: number;
        max: number;
        min: number;
        id: string;
        step: number;
        group: number;
        _transform: null;
    } | {
        group: number;
        bezier: null;
        id: string;
        min: number;
        step: number;
        max: number;
        _transform: null;
        weight: number;
        dynamicPoolId?: undefined;
    })[];
    id: string;
} | {
    id: string;
    data: ({
        _transform: null;
        bezier: null;
        step: number;
        id: string;
        min: number;
        weight: number;
        max: number;
        dynamicPoolId: string;
        group: number;
    } | {
        max: number;
        step: number;
        min: number;
        weight: number;
        bezier: null;
        _transform: null;
        id: string;
        group: number;
        dynamicPoolId?: undefined;
    })[];
} | {
    data: {
        min: number;
        max: number;
        _transform: null;
        bezier: null;
        id: string;
        step: number;
        dynamicPoolId: string;
        group: number;
        weight: number;
    }[];
    id: string;
} | {
    id: string;
    data: ({
        max: number;
        weight: number;
        group: number;
        bezier: null;
        dynamicPoolId: string;
        min: number;
        _transform: null;
        step: number;
        id: string;
    } | {
        id: string;
        min: number;
        bezier: null;
        group: number;
        _transform: null;
        max: number;
        weight: number;
        step: number;
        dynamicPoolId?: undefined;
    })[];
} | {
    data: ({
        _transform: null;
        group: number;
        weight: number;
        dynamicPoolId: string;
        min: number;
        max: number;
        id: string;
        step: number;
        bezier: null;
    } | {
        group: number;
        min: number;
        _transform: null;
        step: number;
        max: number;
        id: string;
        bezier: null;
        weight: number;
        dynamicPoolId?: undefined;
    })[];
    id: string;
} | {
    data: ({
        weight: number;
        _transform: null;
        dynamicPoolId: string;
        bezier: null;
        step: number;
        max: number;
        min: number;
        group: number;
        id: string;
    } | {
        max: number;
        weight: number;
        id: string;
        min: number;
        step: number;
        bezier: null;
        _transform: null;
        group: number;
        dynamicPoolId?: undefined;
    })[];
    id: string;
} | {
    id: string;
    data: {
        min: number;
        weight: number;
        _transform: null;
        id: string;
        bezier: null;
        step: number;
        dynamicPoolId: string;
        max: number;
        group: number;
    }[];
} | {
    data: {
        id: string;
        max: number;
        bezier: null;
        _transform: null;
        group: number;
        weight: number;
        step: number;
        min: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        id: string;
        bezier: null;
        weight: number;
        group: number;
        step: number;
        max: number;
        _transform: null;
        min: number;
    }[];
} | {
    id: string;
    data: {
        min: number;
        id: string;
        group: number;
        max: number;
        _transform: null;
        weight: number;
        step: number;
        bezier: null;
    }[];
} | {
    data: {
        max: number;
        weight: number;
        _transform: null;
        group: number;
        min: number;
        id: string;
        step: number;
        bezier: null;
    }[];
    id: string;
} | {
    id: string;
    data: {
        weight: number;
        max: number;
        min: number;
        id: string;
        step: number;
        _transform: null;
        bezier: null;
        group: number;
    }[];
} | {
    id: string;
    data: {
        bezier: null;
        min: number;
        step: number;
        _transform: null;
        weight: number;
        group: number;
        id: string;
        max: number;
    }[];
} | {
    data: {
        group: number;
        min: number;
        id: string;
        bezier: null;
        max: number;
        _transform: null;
        weight: number;
        step: number;
    }[];
    id: string;
} | {
    data: {
        max: number;
        min: number;
        _transform: null;
        step: number;
        bezier: null;
        weight: number;
        id: string;
        group: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        group: number;
        id: string;
        weight: number;
        max: number;
        min: number;
        bezier: null;
        _transform: null;
        step: number;
    }[];
} | {
    data: {
        min: number;
        _transform: null;
        id: string;
        max: number;
        weight: number;
        group: number;
        step: number;
        bezier: null;
    }[];
    id: string;
} | {
    id: string;
    data: {
        _transform: null;
        bezier: null;
        group: number;
        max: number;
        step: number;
        id: string;
        weight: number;
        min: number;
    }[];
} | {
    id: string;
    data: {
        group: number;
        id: string;
        min: number;
        _transform: null;
        max: number;
        weight: number;
        bezier: null;
        step: number;
    }[];
} | {
    id: string;
    data: ({
        weight: number;
        group: number;
        id: string;
        step: number;
        dynamicPoolId: string;
        _transform: null;
        bezier: null;
        min: number;
        max: number;
    } | {
        id: string;
        _transform: null;
        min: number;
        max: number;
        bezier: null;
        step: number;
        weight: number;
        group: number;
        dynamicPoolId?: undefined;
    })[];
} | {
    id: string;
    data: ({
        bezier: null;
        id: string;
        dynamicPoolId: string;
        min: number;
        max: number;
        _transform: null;
        step: number;
        group: number;
        weight: number;
    } | {
        min: number;
        max: number;
        id: string;
        weight: number;
        _transform: null;
        step: number;
        group: number;
        bezier: null;
        dynamicPoolId?: undefined;
    })[];
} | {
    id: string;
    data: ({
        step: number;
        _transform: null;
        weight: number;
        max: number;
        bezier: null;
        group: number;
        dynamicPoolId: string;
        id: string;
        min: number;
    } | {
        weight: number;
        max: number;
        _transform: null;
        step: number;
        bezier: null;
        min: number;
        group: number;
        id: string;
        dynamicPoolId?: undefined;
    })[];
} | {
    id: string;
    data: {
        max: number;
        dynamicPoolId: string;
        step: number;
        _transform: null;
        group: number;
        weight: number;
        min: number;
        bezier: null;
        id: string;
    }[];
} | {
    data: ({
        max: number;
        group: number;
        min: number;
        _transform: null;
        id: string;
        weight: number;
        bezier: null;
        step: number;
        dynamicPoolId: string;
    } | {
        max: number;
        bezier: null;
        _transform: null;
        step: number;
        min: number;
        id: string;
        weight: number;
        group: number;
        dynamicPoolId?: undefined;
    })[];
    id: string;
} | {
    data: ({
        bezier: null;
        weight: number;
        step: number;
        dynamicPoolId: string;
        _transform: null;
        id: string;
        min: number;
        max: number;
        group: number;
    } | {
        weight: number;
        min: number;
        bezier: null;
        step: number;
        group: number;
        _transform: null;
        id: string;
        max: number;
        dynamicPoolId?: undefined;
    })[];
    id: string;
} | {
    id: string;
    data: ({
        id: string;
        group: number;
        max: number;
        bezier: null;
        _transform: null;
        dynamicPoolId: string;
        min: number;
        step: number;
        weight: number;
    } | {
        group: number;
        bezier: null;
        _transform: null;
        min: number;
        max: number;
        id: string;
        weight: number;
        step: number;
        dynamicPoolId?: undefined;
    })[];
} | {
    data: {
        bezier: null;
        _transform: null;
        max: number;
        weight: number;
        group: number;
        id: string;
        min: number;
        step: number;
        dynamicPoolId: string;
    }[];
    id: string;
} | {
    id: string;
    data: {
        bezier: null;
        group: number;
        max: number;
        step: number;
        min: number;
        _transform: null;
        weight: number;
        id: string;
    }[];
} | {
    data: {
        id: string;
        max: number;
        _transform: null;
        min: number;
        group: number;
        bezier: null;
        weight: number;
        step: number;
    }[];
    id: string;
} | {
    data: {
        weight: number;
        bezier: null;
        group: number;
        id: string;
        max: number;
        step: number;
        min: number;
        _transform: null;
    }[];
    id: string;
} | {
    data: {
        step: number;
        id: string;
        group: number;
        bezier: null;
        _transform: null;
        max: number;
        min: number;
        weight: number;
    }[];
    id: string;
} | {
    data: {
        _transform: null;
        step: number;
        id: string;
        max: number;
        group: number;
        bezier: null;
        min: number;
        weight: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        group: number;
        bezier: null;
        min: number;
        id: string;
        max: number;
        _transform: null;
        step: number;
        weight: number;
    }[];
} | {
    data: {
        group: number;
        weight: number;
        _transform: null;
        max: number;
        bezier: null;
        id: string;
        step: number;
        min: number;
    }[];
    id: string;
} | {
    data: {
        bezier: null;
        group: number;
        _transform: null;
        weight: number;
        min: number;
        step: number;
        max: number;
        id: string;
    }[];
    id: string;
} | {
    id: string;
    data: {
        group: number;
        min: number;
        max: number;
        id: string;
        step: number;
        _transform: null;
        weight: number;
        bezier: null;
    }[];
} | {
    id: string;
    data: {
        min: number;
        step: number;
        weight: number;
        group: number;
        bezier: null;
        id: string;
        _transform: null;
        max: number;
    }[];
} | {
    id: string;
    data: {
        group: number;
        bezier: null;
        weight: number;
        _transform: null;
        id: string;
        step: number;
        min: number;
        max: number;
    }[];
} | {
    id: string;
    data: {
        id: string;
        weight: number;
        bezier: null;
        max: number;
        group: number;
        _transform: null;
        min: number;
        step: number;
    }[];
} | {
    id: string;
    data: ({
        min: number;
        max: number;
        step: number;
        bezier: null;
        weight: number;
        group: number;
        dynamicPoolId: string;
        _transform: null;
        id: string;
    } | {
        id: string;
        _transform: null;
        bezier: null;
        step: number;
        max: number;
        weight: number;
        group: number;
        min: number;
        dynamicPoolId?: undefined;
    })[];
} | {
    data: ({
        group: number;
        _transform: null;
        min: number;
        max: number;
        dynamicPoolId: string;
        id: string;
        bezier: null;
        weight: number;
        step: number;
    } | {
        group: number;
        bezier: null;
        min: number;
        max: number;
        weight: number;
        id: string;
        _transform: null;
        step: number;
        dynamicPoolId?: undefined;
    })[];
    id: string;
} | {
    id: string;
    data: ({
        max: number;
        group: number;
        min: number;
        weight: number;
        dynamicPoolId: string;
        step: number;
        id: string;
        _transform: null;
        bezier: null;
    } | {
        min: number;
        bezier: null;
        _transform: null;
        step: number;
        id: string;
        weight: number;
        max: number;
        group: number;
        dynamicPoolId?: undefined;
    })[];
} | {
    data: {
        id: string;
        group: number;
        _transform: null;
        min: number;
        bezier: null;
        dynamicPoolId: string;
        weight: number;
        step: number;
        max: number;
    }[];
    id: string;
} | {
    id: string;
    data: ({
        dynamicPoolId: string;
        max: number;
        step: number;
        id: string;
        _transform: null;
        group: number;
        min: number;
        bezier: null;
        weight: number;
    } | {
        _transform: null;
        id: string;
        max: number;
        bezier: null;
        weight: number;
        step: number;
        min: number;
        group: number;
        dynamicPoolId?: undefined;
    })[];
} | {
    id: string;
    data: ({
        dynamicPoolId: string;
        _transform: null;
        step: number;
        min: number;
        group: number;
        max: number;
        bezier: null;
        id: string;
        weight: number;
    } | {
        max: number;
        group: number;
        min: number;
        id: string;
        weight: number;
        step: number;
        _transform: null;
        bezier: null;
        dynamicPoolId?: undefined;
    })[];
} | {
    data: ({
        step: number;
        weight: number;
        id: string;
        dynamicPoolId: string;
        _transform: null;
        max: number;
        group: number;
        min: number;
        bezier: null;
    } | {
        max: number;
        group: number;
        bezier: null;
        id: string;
        min: number;
        step: number;
        _transform: null;
        weight: number;
        dynamicPoolId?: undefined;
    })[];
    id: string;
} | {
    data: {
        step: number;
        id: string;
        max: number;
        weight: number;
        _transform: null;
        group: number;
        bezier: null;
        min: number;
        dynamicPoolId: string;
    }[];
    id: string;
} | {
    id: string;
    data: {
        group: number;
        weight: number;
        step: number;
        min: number;
        bezier: null;
        id: string;
        _transform: null;
        max: number;
    }[];
} | {
    id: string;
    data: {
        min: number;
        max: number;
        bezier: null;
        id: string;
        group: number;
        weight: number;
        step: number;
        _transform: null;
    }[];
} | {
    id: string;
    data: {
        min: number;
        bezier: null;
        _transform: null;
        weight: number;
        group: number;
        max: number;
        step: number;
        id: string;
    }[];
} | {
    data: {
        min: number;
        max: number;
        step: number;
        weight: number;
        id: string;
        group: number;
        _transform: null;
        bezier: null;
    }[];
    id: string;
} | {
    data: {
        weight: number;
        _transform: null;
        group: number;
        step: number;
        bezier: null;
        id: string;
        min: number;
        max: number;
    }[];
    id: string;
} | {
    data: {
        _transform: null;
        weight: number;
        step: number;
        id: string;
        min: number;
        group: number;
        bezier: null;
        max: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        bezier: null;
        group: number;
        id: string;
        step: number;
        _transform: null;
        weight: number;
        min: number;
        max: number;
    }[];
} | {
    id: string;
    data: {
        min: number;
        step: number;
        group: number;
        max: number;
        id: string;
        bezier: null;
        weight: number;
        _transform: null;
    }[];
} | {
    id: string;
    data: {
        group: number;
        weight: number;
        step: number;
        id: string;
        bezier: null;
        min: number;
        _transform: null;
        max: number;
    }[];
} | {
    id: string;
    data: {
        group: number;
        bezier: null;
        _transform: null;
        min: number;
        weight: number;
        id: string;
        max: number;
        step: number;
    }[];
} | {
    id: string;
    data: {
        id: string;
        weight: number;
        bezier: null;
        min: number;
        step: number;
        group: number;
        _transform: null;
        max: number;
    }[];
} | {
    data: {
        weight: number;
        bezier: null;
        id: string;
        group: number;
        min: number;
        max: number;
        step: number;
        _transform: null;
    }[];
    id: string;
} | {
    id: string;
    data: ({
        dynamicPoolId: string;
        max: number;
        min: number;
        group: number;
        _transform: null;
        bezier: null;
        id: string;
        weight: number;
        step: number;
    } | {
        _transform: null;
        max: number;
        step: number;
        group: number;
        bezier: null;
        min: number;
        id: string;
        weight: number;
        dynamicPoolId?: undefined;
    })[];
} | {
    id: string;
    data: ({
        _transform: null;
        min: number;
        max: number;
        dynamicPoolId: string;
        bezier: null;
        weight: number;
        group: number;
        step: number;
        id: string;
    } | {
        step: number;
        id: string;
        bezier: null;
        min: number;
        group: number;
        _transform: null;
        weight: number;
        max: number;
        dynamicPoolId?: undefined;
    })[];
} | {
    data: ({
        weight: number;
        step: number;
        min: number;
        group: number;
        bezier: null;
        dynamicPoolId: string;
        id: string;
        _transform: null;
        max: number;
    } | {
        id: string;
        min: number;
        step: number;
        max: number;
        weight: number;
        _transform: null;
        group: number;
        bezier: null;
        dynamicPoolId?: undefined;
    })[];
    id: string;
} | {
    id: string;
    data: {
        step: number;
        group: number;
        _transform: null;
        bezier: null;
        min: number;
        weight: number;
        max: number;
        id: string;
        dynamicPoolId: string;
    }[];
} | {
    data: ({
        id: string;
        _transform: null;
        weight: number;
        group: number;
        min: number;
        max: number;
        dynamicPoolId: string;
        step: number;
        bezier: null;
    } | {
        group: number;
        _transform: null;
        bezier: null;
        step: number;
        weight: number;
        max: number;
        min: number;
        id: string;
        dynamicPoolId?: undefined;
    })[];
    id: string;
} | {
    id: string;
    data: ({
        min: number;
        _transform: null;
        step: number;
        bezier: null;
        group: number;
        weight: number;
        id: string;
        max: number;
        dynamicPoolId: string;
    } | {
        group: number;
        _transform: null;
        weight: number;
        step: number;
        min: number;
        max: number;
        bezier: null;
        id: string;
        dynamicPoolId?: undefined;
    })[];
} | {
    data: ({
        id: string;
        step: number;
        bezier: null;
        weight: number;
        min: number;
        max: number;
        _transform: null;
        group: number;
        dynamicPoolId: string;
    } | {
        group: number;
        weight: number;
        id: string;
        _transform: null;
        min: number;
        step: number;
        bezier: null;
        max: number;
        dynamicPoolId?: undefined;
    })[];
    id: string;
} | {
    id: string;
    data: {
        group: number;
        bezier: null;
        _transform: null;
        max: number;
        weight: number;
        dynamicPoolId: string;
        id: string;
        min: number;
        step: number;
    }[];
} | {
    id: string;
    data: {
        id: string;
        weight: number;
        step: number;
        min: number;
        group: number;
        bezier: null;
        max: number;
        _transform: null;
    }[];
} | {
    id: string;
    data: {
        group: number;
        step: number;
        max: number;
        min: number;
        id: string;
        _transform: null;
        bezier: null;
        weight: number;
    }[];
} | {
    data: {
        min: number;
        weight: number;
        bezier: null;
        group: number;
        id: string;
        _transform: null;
        max: number;
        step: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        max: number;
        group: number;
        bezier: null;
        step: number;
        _transform: null;
        min: number;
        weight: number;
        id: string;
    }[];
} | {
    id: string;
    data: {
        max: number;
        step: number;
        _transform: null;
        min: number;
        weight: number;
        bezier: null;
        group: number;
        id: string;
    }[];
} | {
    data: {
        weight: number;
        min: number;
        id: string;
        group: number;
        step: number;
        max: number;
        _transform: null;
        bezier: null;
    }[];
    id: string;
} | {
    id: string;
    data: {
        id: string;
        min: number;
        step: number;
        bezier: null;
        _transform: null;
        max: number;
        weight: number;
        group: number;
    }[];
} | {
    data: {
        weight: number;
        max: number;
        group: number;
        min: number;
        step: number;
        _transform: null;
        bezier: null;
        id: string;
    }[];
    id: string;
} | {
    data: {
        max: number;
        weight: number;
        id: string;
        group: number;
        _transform: null;
        min: number;
        step: number;
        bezier: null;
    }[];
    id: string;
} | {
    id: string;
    data: {
        group: number;
        id: string;
        min: number;
        weight: number;
        step: number;
        bezier: null;
        _transform: null;
        max: number;
    }[];
} | {
    data: {
        step: number;
        group: number;
        _transform: null;
        id: string;
        weight: number;
        min: number;
        max: number;
        bezier: null;
    }[];
    id: string;
} | {
    data: {
        min: number;
        max: number;
        bezier: null;
        group: number;
        id: string;
        _transform: null;
        step: number;
        weight: number;
    }[];
    id: string;
} | {
    id: string;
    data: ({
        bezier: null;
        group: number;
        dynamicPoolId: string;
        _transform: null;
        id: string;
        max: number;
        min: number;
        step: number;
        weight: number;
    } | {
        min: number;
        max: number;
        weight: number;
        bezier: null;
        _transform: null;
        step: number;
        group: number;
        id: string;
        dynamicPoolId?: undefined;
    })[];
} | {
    data: ({
        dynamicPoolId: string;
        id: string;
        weight: number;
        min: number;
        bezier: null;
        group: number;
        max: number;
        step: number;
        _transform: null;
    } | {
        max: number;
        group: number;
        _transform: null;
        min: number;
        weight: number;
        bezier: null;
        id: string;
        step: number;
        dynamicPoolId?: undefined;
    })[];
    id: string;
} | {
    data: ({
        _transform: null;
        bezier: null;
        step: number;
        dynamicPoolId: string;
        max: number;
        group: number;
        min: number;
        weight: number;
        id: string;
    } | {
        _transform: null;
        max: number;
        id: string;
        group: number;
        weight: number;
        step: number;
        bezier: null;
        min: number;
        dynamicPoolId?: undefined;
    })[];
    id: string;
} | {
    id: string;
    data: {
        group: number;
        weight: number;
        _transform: null;
        bezier: null;
        id: string;
        min: number;
        max: number;
        step: number;
        dynamicPoolId: string;
    }[];
} | {
    data: ({
        bezier: null;
        group: number;
        id: string;
        min: number;
        step: number;
        dynamicPoolId: string;
        weight: number;
        max: number;
        _transform: null;
    } | {
        weight: number;
        _transform: null;
        id: string;
        min: number;
        step: number;
        group: number;
        max: number;
        bezier: null;
        dynamicPoolId?: undefined;
    })[];
    id: string;
} | {
    data: ({
        dynamicPoolId: string;
        step: number;
        weight: number;
        id: string;
        group: number;
        _transform: null;
        max: number;
        bezier: null;
        min: number;
    } | {
        bezier: null;
        id: string;
        weight: number;
        max: number;
        group: number;
        _transform: null;
        step: number;
        min: number;
        dynamicPoolId?: undefined;
    })[];
    id: string;
} | {
    id: string;
    data: ({
        min: number;
        _transform: null;
        dynamicPoolId: string;
        step: number;
        weight: number;
        id: string;
        group: number;
        bezier: null;
        max: number;
    } | {
        max: number;
        group: number;
        bezier: null;
        _transform: null;
        weight: number;
        step: number;
        id: string;
        min: number;
        dynamicPoolId?: undefined;
    })[];
} | {
    data: {
        bezier: null;
        min: number;
        weight: number;
        id: string;
        group: number;
        _transform: null;
        step: number;
        max: number;
        dynamicPoolId: string;
    }[];
    id: string;
} | {
    data: {
        group: number;
        max: number;
        bezier: null;
        weight: number;
        step: number;
        id: string;
        _transform: null;
        min: number;
    }[];
    id: string;
} | {
    data: {
        _transform: null;
        group: number;
        max: number;
        weight: number;
        bezier: null;
        min: number;
        step: number;
        id: string;
    }[];
    id: string;
} | {
    data: {
        id: string;
        group: number;
        _transform: null;
        min: number;
        weight: number;
        max: number;
        step: number;
        bezier: null;
    }[];
    id: string;
} | {
    data: {
        max: number;
        bezier: null;
        step: number;
        _transform: null;
        min: number;
        group: number;
        id: string;
        weight: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        bezier: null;
        _transform: null;
        step: number;
        max: number;
        min: number;
        group: number;
        id: string;
        weight: number;
    }[];
} | {
    id: string;
    data: {
        min: number;
        max: number;
        step: number;
        bezier: null;
        group: number;
        _transform: null;
        id: string;
        weight: number;
    }[];
} | {
    data: {
        bezier: null;
        step: number;
        min: number;
        max: number;
        _transform: null;
        group: number;
        weight: number;
        id: string;
    }[];
    id: string;
} | {
    data: {
        bezier: null;
        weight: number;
        id: string;
        step: number;
        _transform: null;
        group: number;
        min: number;
        max: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        id: string;
        group: number;
        _transform: null;
        bezier: null;
        weight: number;
        min: number;
        max: number;
        step: number;
    }[];
} | {
    id: string;
    data: {
        id: string;
        step: number;
        max: number;
        weight: number;
        group: number;
        _transform: null;
        min: number;
        bezier: null;
    }[];
} | {
    data: {
        step: number;
        id: string;
        min: number;
        bezier: null;
        group: number;
        _transform: null;
        max: number;
        weight: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        max: number;
        min: number;
        group: number;
        _transform: null;
        weight: number;
        bezier: null;
        id: string;
        step: number;
    }[];
} | {
    id: string;
    data: ({
        bezier: null;
        _transform: null;
        step: number;
        min: number;
        max: number;
        weight: number;
        group: number;
        id: string;
        dynamicPoolId: string;
    } | {
        _transform: null;
        group: number;
        max: number;
        step: number;
        min: number;
        weight: number;
        id: string;
        bezier: null;
        dynamicPoolId?: undefined;
    })[];
} | {
    id: string;
    data: ({
        bezier: null;
        id: string;
        step: number;
        max: number;
        weight: number;
        _transform: null;
        dynamicPoolId: string;
        min: number;
        group: number;
    } | {
        bezier: null;
        id: string;
        step: number;
        group: number;
        max: number;
        min: number;
        _transform: null;
        weight: number;
        dynamicPoolId?: undefined;
    })[];
} | {
    id: string;
    data: ({
        min: number;
        step: number;
        bezier: null;
        max: number;
        weight: number;
        group: number;
        dynamicPoolId: string;
        id: string;
        _transform: null;
    } | {
        bezier: null;
        id: string;
        max: number;
        group: number;
        min: number;
        _transform: null;
        weight: number;
        step: number;
        dynamicPoolId?: undefined;
    })[];
} | {
    id: string;
    data: {
        dynamicPoolId: string;
        min: number;
        step: number;
        max: number;
        _transform: null;
        bezier: null;
        weight: number;
        group: number;
        id: string;
    }[];
} | {
    data: ({
        bezier: null;
        min: number;
        max: number;
        id: string;
        group: number;
        weight: number;
        dynamicPoolId: string;
        step: number;
        _transform: null;
    } | {
        weight: number;
        step: number;
        bezier: null;
        group: number;
        _transform: null;
        max: number;
        id: string;
        min: number;
        dynamicPoolId?: undefined;
    })[];
    id: string;
} | {
    data: ({
        weight: number;
        id: string;
        bezier: null;
        max: number;
        min: number;
        dynamicPoolId: string;
        step: number;
        group: number;
        _transform: null;
    } | {
        bezier: null;
        min: number;
        id: string;
        max: number;
        step: number;
        group: number;
        _transform: null;
        weight: number;
        dynamicPoolId?: undefined;
    })[];
    id: string;
} | {
    data: ({
        dynamicPoolId: string;
        id: string;
        group: number;
        weight: number;
        max: number;
        bezier: null;
        step: number;
        _transform: null;
        min: number;
    } | {
        max: number;
        weight: number;
        group: number;
        min: number;
        id: string;
        step: number;
        bezier: null;
        _transform: null;
        dynamicPoolId?: undefined;
    })[];
    id: string;
} | {
    id: string;
    data: {
        step: number;
        group: number;
        dynamicPoolId: string;
        bezier: null;
        _transform: null;
        id: string;
        weight: number;
        min: number;
        max: number;
    }[];
} | {
    id: string;
    data: {
        weight: number;
        bezier: null;
        group: number;
        min: number;
        max: number;
        id: string;
        _transform: null;
        step: number;
    }[];
} | {
    id: string;
    data: {
        group: number;
        bezier: null;
        min: number;
        max: number;
        _transform: null;
        step: number;
        id: string;
        weight: number;
    }[];
} | {
    id: string;
    data: {
        _transform: null;
        step: number;
        weight: number;
        min: number;
        id: string;
        max: number;
        group: number;
        bezier: null;
    }[];
} | {
    id: string;
    data: {
        bezier: null;
        group: number;
        _transform: null;
        id: string;
        max: number;
        weight: number;
        min: number;
        step: number;
    }[];
} | {
    id: string;
    data: {
        _transform: null;
        max: number;
        id: string;
        weight: number;
        min: number;
        step: number;
        group: number;
        bezier: null;
    }[];
} | {
    id: string;
    data: {
        group: number;
        id: string;
        max: number;
        min: number;
        step: number;
        weight: number;
        _transform: null;
        bezier: null;
    }[];
} | {
    data: {
        id: string;
        min: number;
        max: number;
        weight: number;
        group: number;
        step: number;
        bezier: null;
        _transform: null;
    }[];
    id: string;
} | {
    id: string;
    data: {
        group: number;
        bezier: null;
        weight: number;
        min: number;
        max: number;
        id: string;
        _transform: null;
        step: number;
    }[];
} | {
    id: string;
    data: {
        bezier: null;
        step: number;
        min: number;
        weight: number;
        id: string;
        _transform: null;
        group: number;
        max: number;
    }[];
} | {
    id: string;
    data: {
        bezier: null;
        max: number;
        min: number;
        weight: number;
        id: string;
        group: number;
        _transform: null;
        step: number;
    }[];
} | {
    id: string;
    data: {
        _transform: null;
        group: number;
        id: string;
        step: number;
        max: number;
        weight: number;
        min: number;
        bezier: null;
    }[];
} | {
    data: {
        group: number;
        id: string;
        step: number;
        bezier: null;
        min: number;
        _transform: null;
        max: number;
        weight: number;
    }[];
    id: string;
} | {
    id: string;
    data: ({
        _transform: null;
        group: number;
        step: number;
        id: string;
        bezier: null;
        min: number;
        max: number;
        dynamicPoolId: string;
        weight: number;
    } | {
        max: number;
        step: number;
        _transform: null;
        group: number;
        min: number;
        bezier: null;
        id: string;
        weight: number;
        dynamicPoolId?: undefined;
    })[];
} | {
    id: string;
    data: ({
        id: string;
        max: number;
        dynamicPoolId: string;
        weight: number;
        step: number;
        _transform: null;
        min: number;
        bezier: null;
        group: number;
    } | {
        _transform: null;
        max: number;
        group: number;
        id: string;
        min: number;
        bezier: null;
        step: number;
        weight: number;
        dynamicPoolId?: undefined;
    })[];
} | {
    data: ({
        dynamicPoolId: string;
        step: number;
        min: number;
        group: number;
        _transform: null;
        bezier: null;
        id: string;
        weight: number;
        max: number;
    } | {
        group: number;
        _transform: null;
        step: number;
        bezier: null;
        id: string;
        weight: number;
        max: number;
        min: number;
        dynamicPoolId?: undefined;
    })[];
    id: string;
} | {
    data: {
        bezier: null;
        max: number;
        min: number;
        dynamicPoolId: string;
        weight: number;
        step: number;
        group: number;
        id: string;
        _transform: null;
    }[];
    id: string;
} | {
    data: ({
        dynamicPoolId: string;
        bezier: null;
        id: string;
        step: number;
        min: number;
        max: number;
        group: number;
        weight: number;
        _transform: null;
    } | {
        max: number;
        id: string;
        bezier: null;
        step: number;
        _transform: null;
        weight: number;
        min: number;
        group: number;
        dynamicPoolId?: undefined;
    })[];
    id: string;
} | {
    id: string;
    data: ({
        weight: number;
        _transform: null;
        step: number;
        dynamicPoolId: string;
        min: number;
        max: number;
        group: number;
        id: string;
        bezier: null;
    } | {
        bezier: null;
        step: number;
        _transform: null;
        min: number;
        max: number;
        group: number;
        weight: number;
        id: string;
        dynamicPoolId?: undefined;
    })[];
} | {
    data: ({
        group: number;
        _transform: null;
        min: number;
        max: number;
        weight: number;
        bezier: null;
        id: string;
        step: number;
        dynamicPoolId: string;
    } | {
        group: number;
        bezier: null;
        max: number;
        _transform: null;
        min: number;
        step: number;
        id: string;
        weight: number;
        dynamicPoolId?: undefined;
    })[];
    id: string;
} | {
    data: {
        bezier: null;
        step: number;
        _transform: null;
        dynamicPoolId: string;
        max: number;
        min: number;
        weight: number;
        group: number;
        id: string;
    }[];
    id: string;
} | {
    id: string;
    data: {
        max: number;
        min: number;
        _transform: null;
        step: number;
        id: string;
        group: number;
        bezier: null;
        weight: number;
    }[];
} | {
    data: {
        min: number;
        bezier: null;
        _transform: null;
        id: string;
        step: number;
        group: number;
        weight: number;
        max: number;
    }[];
    id: string;
} | {
    data: {
        group: number;
        min: number;
        max: number;
        _transform: null;
        step: number;
        bezier: null;
        weight: number;
        id: string;
    }[];
    id: string;
} | {
    id: string;
    data: {
        step: number;
        _transform: null;
        bezier: null;
        max: number;
        min: number;
        weight: number;
        id: string;
        group: number;
    }[];
} | {
    data: {
        _transform: null;
        bezier: null;
        min: number;
        weight: number;
        step: number;
        id: string;
        max: number;
        group: number;
    }[];
    id: string;
} | {
    data: {
        group: number;
        bezier: null;
        max: number;
        _transform: null;
        weight: number;
        id: string;
        step: number;
        min: number;
    }[];
    id: string;
} | {
    data: {
        min: number;
        bezier: null;
        group: number;
        id: string;
        weight: number;
        _transform: null;
        max: number;
        step: number;
    }[];
    id: string;
} | {
    data: {
        group: number;
        id: string;
        weight: number;
        _transform: null;
        min: number;
        bezier: null;
        max: number;
        step: number;
    }[];
    id: string;
} | {
    data: {
        weight: number;
        step: number;
        bezier: null;
        group: number;
        _transform: null;
        min: number;
        max: number;
        id: string;
    }[];
    id: string;
} | {
    data: {
        group: number;
        _transform: null;
        max: number;
        id: string;
        step: number;
        bezier: null;
        min: number;
        weight: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        step: number;
        bezier: null;
        weight: number;
        group: number;
        id: string;
        _transform: null;
        min: number;
        max: number;
    }[];
} | {
    data: {
        id: string;
        bezier: null;
        step: number;
        _transform: null;
        weight: number;
        group: number;
        min: number;
        max: number;
    }[];
    id: string;
} | {
    data: ({
        min: number;
        group: number;
        step: number;
        max: number;
        _transform: null;
        bezier: null;
        weight: number;
        id: string;
        dynamicPoolId: string;
    } | {
        id: string;
        _transform: null;
        max: number;
        step: number;
        weight: number;
        bezier: null;
        min: number;
        group: number;
        dynamicPoolId?: undefined;
    })[];
    id: string;
} | {
    data: ({
        dynamicPoolId: string;
        group: number;
        max: number;
        weight: number;
        bezier: null;
        min: number;
        id: string;
        _transform: null;
        step: number;
    } | {
        max: number;
        id: string;
        min: number;
        weight: number;
        group: number;
        step: number;
        _transform: null;
        bezier: null;
        dynamicPoolId?: undefined;
    })[];
    id: string;
} | {
    id: string;
    data: ({
        weight: number;
        id: string;
        _transform: null;
        min: number;
        bezier: null;
        step: number;
        group: number;
        max: number;
        dynamicPoolId: string;
    } | {
        id: string;
        weight: number;
        max: number;
        group: number;
        bezier: null;
        step: number;
        _transform: null;
        min: number;
        dynamicPoolId?: undefined;
    })[];
} | {
    data: {
        max: number;
        step: number;
        dynamicPoolId: string;
        weight: number;
        _transform: null;
        id: string;
        group: number;
        bezier: null;
        min: number;
    }[];
    id: string;
} | {
    id: string;
    data: ({
        bezier: null;
        weight: number;
        max: number;
        step: number;
        dynamicPoolId: string;
        min: number;
        id: string;
        _transform: null;
        group: number;
    } | {
        id: string;
        step: number;
        _transform: null;
        bezier: null;
        weight: number;
        min: number;
        max: number;
        group: number;
        dynamicPoolId?: undefined;
    })[];
} | {
    id: string;
    data: ({
        step: number;
        _transform: null;
        id: string;
        group: number;
        dynamicPoolId: string;
        min: number;
        max: number;
        weight: number;
        bezier: null;
    } | {
        group: number;
        step: number;
        id: string;
        weight: number;
        bezier: null;
        max: number;
        _transform: null;
        min: number;
        dynamicPoolId?: undefined;
    })[];
} | {
    data: ({
        group: number;
        min: number;
        step: number;
        bezier: null;
        weight: number;
        dynamicPoolId: string;
        max: number;
        id: string;
        _transform: null;
    } | {
        min: number;
        weight: number;
        group: number;
        step: number;
        bezier: null;
        _transform: null;
        max: number;
        id: string;
        dynamicPoolId?: undefined;
    })[];
    id: string;
} | {
    id: string;
    data: {
        min: number;
        step: number;
        weight: number;
        group: number;
        bezier: null;
        id: string;
        max: number;
        dynamicPoolId: string;
        _transform: null;
    }[];
} | {
    id: string;
    data: {
        id: string;
        weight: number;
        _transform: null;
        min: number;
        group: number;
        max: number;
        step: number;
        bezier: null;
    }[];
} | {
    id: string;
    data: {
        id: string;
        _transform: null;
        min: number;
        weight: number;
        step: number;
        group: number;
        max: number;
        bezier: null;
    }[];
} | {
    id: string;
    data: {
        weight: number;
        bezier: null;
        id: string;
        group: number;
        min: number;
        _transform: null;
        max: number;
        step: number;
    }[];
} | {
    data: {
        step: number;
        id: string;
        min: number;
        group: number;
        bezier: null;
        max: number;
        _transform: null;
        weight: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        min: number;
        max: number;
        group: number;
        id: string;
        _transform: null;
        step: number;
        bezier: null;
        weight: number;
    }[];
} | {
    id: string;
    data: {
        group: number;
        max: number;
        min: number;
        _transform: null;
        weight: number;
        bezier: null;
        id: string;
        step: number;
    }[];
} | {
    data: {
        group: number;
        id: string;
        bezier: null;
        step: number;
        min: number;
        max: number;
        _transform: null;
        weight: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        bezier: null;
        max: number;
        weight: number;
        group: number;
        _transform: null;
        id: string;
        min: number;
        step: number;
    }[];
} | {
    data: {
        weight: number;
        _transform: null;
        bezier: null;
        id: string;
        max: number;
        min: number;
        group: number;
        step: number;
    }[];
    id: string;
} | {
    data: {
        min: number;
        group: number;
        id: string;
        weight: number;
        max: number;
        bezier: null;
        step: number;
        _transform: null;
    }[];
    id: string;
} | {
    id: string;
    data: {
        group: number;
        _transform: null;
        max: number;
        id: string;
        weight: number;
        min: number;
        bezier: null;
        step: number;
    }[];
} | {
    id: string;
    data: {
        group: number;
        max: number;
        _transform: null;
        bezier: null;
        step: number;
        id: string;
        min: number;
        weight: number;
    }[];
} | {
    id: string;
    data: ({
        group: number;
        weight: number;
        bezier: null;
        id: string;
        max: number;
        dynamicPoolId: string;
        _transform: null;
        min: number;
        step: number;
    } | {
        id: string;
        max: number;
        group: number;
        bezier: null;
        step: number;
        weight: number;
        min: number;
        _transform: null;
        dynamicPoolId?: undefined;
    })[];
} | {
    id: string;
    data: ({
        max: number;
        dynamicPoolId: string;
        _transform: null;
        bezier: null;
        min: number;
        weight: number;
        id: string;
        group: number;
        step: number;
    } | {
        group: number;
        id: string;
        max: number;
        weight: number;
        step: number;
        _transform: null;
        bezier: null;
        min: number;
        dynamicPoolId?: undefined;
    })[];
} | {
    id: string;
    data: ({
        _transform: null;
        group: number;
        dynamicPoolId: string;
        bezier: null;
        step: number;
        max: number;
        min: number;
        weight: number;
        id: string;
    } | {
        group: number;
        _transform: null;
        weight: number;
        max: number;
        step: number;
        bezier: null;
        min: number;
        id: string;
        dynamicPoolId?: undefined;
    })[];
} | {
    data: {
        min: number;
        dynamicPoolId: string;
        _transform: null;
        step: number;
        max: number;
        weight: number;
        bezier: null;
        group: number;
        id: string;
    }[];
    id: string;
} | {
    id: string;
    data: ({
        min: number;
        max: number;
        dynamicPoolId: string;
        step: number;
        group: number;
        id: string;
        _transform: null;
        weight: number;
        bezier: null;
    } | {
        id: string;
        bezier: null;
        max: number;
        _transform: null;
        group: number;
        min: number;
        step: number;
        weight: number;
        dynamicPoolId?: undefined;
    })[];
} | {
    id: string;
    data: ({
        min: number;
        group: number;
        dynamicPoolId: string;
        _transform: null;
        weight: number;
        max: number;
        step: number;
        bezier: null;
        id: string;
    } | {
        _transform: null;
        weight: number;
        group: number;
        min: number;
        id: string;
        step: number;
        max: number;
        bezier: null;
        dynamicPoolId?: undefined;
    })[];
} | {
    id: string;
    data: ({
        weight: number;
        id: string;
        min: number;
        bezier: null;
        _transform: null;
        max: number;
        group: number;
        step: number;
        dynamicPoolId: string;
    } | {
        max: number;
        id: string;
        group: number;
        _transform: null;
        min: number;
        bezier: null;
        weight: number;
        step: number;
        dynamicPoolId?: undefined;
    })[];
} | {
    id: string;
    data: {
        _transform: null;
        max: number;
        group: number;
        min: number;
        dynamicPoolId: string;
        step: number;
        weight: number;
        bezier: null;
        id: string;
    }[];
} | {
    id: string;
    data: {
        _transform: null;
        step: number;
        bezier: null;
        group: number;
        min: number;
        id: string;
        max: number;
        weight: number;
    }[];
} | {
    data: {
        _transform: null;
        weight: number;
        step: number;
        group: number;
        bezier: null;
        max: number;
        id: string;
        min: number;
    }[];
    id: string;
} | {
    data: {
        step: number;
        min: number;
        _transform: null;
        bezier: null;
        max: number;
        group: number;
        weight: number;
        id: string;
    }[];
    id: string;
} | {
    data: {
        max: number;
        bezier: null;
        weight: number;
        group: number;
        id: string;
        step: number;
        min: number;
        _transform: null;
    }[];
    id: string;
} | {
    id: string;
    data: {
        max: number;
        weight: number;
        _transform: null;
        group: number;
        bezier: null;
        id: string;
        min: number;
        step: number;
    }[];
} | {
    id: string;
    data: {
        id: string;
        bezier: null;
        _transform: null;
        step: number;
        min: number;
        max: number;
        weight: number;
        group: number;
    }[];
} | {
    id: string;
    data: {
        bezier: null;
        group: number;
        id: string;
        max: number;
        min: number;
        step: number;
        _transform: null;
        weight: number;
    }[];
} | {
    data: {
        id: string;
        max: number;
        weight: number;
        min: number;
        group: number;
        step: number;
        _transform: null;
        bezier: null;
    }[];
    id: string;
} | {
    id: string;
    data: {
        id: string;
        bezier: null;
        min: number;
        group: number;
        step: number;
        max: number;
        _transform: null;
        weight: number;
    }[];
} | {
    id: string;
    data: {
        max: number;
        min: number;
        group: number;
        id: string;
        weight: number;
        _transform: null;
        bezier: null;
        step: number;
    }[];
} | {
    id: string;
    data: {
        id: string;
        group: number;
        bezier: null;
        weight: number;
        min: number;
        _transform: null;
        max: number;
        step: number;
    }[];
} | {
    data: {
        group: number;
        bezier: null;
        weight: number;
        id: string;
        _transform: null;
        max: number;
        step: number;
        min: number;
    }[];
    id: string;
} | {
    id: string;
    data: ({
        _transform: null;
        weight: number;
        id: string;
        group: number;
        step: number;
        dynamicPoolId: string;
        min: number;
        bezier: null;
        max: number;
    } | {
        id: string;
        bezier: null;
        group: number;
        min: number;
        _transform: null;
        step: number;
        weight: number;
        max: number;
        dynamicPoolId?: undefined;
    })[];
} | {
    id: string;
    data: ({
        min: number;
        step: number;
        weight: number;
        _transform: null;
        dynamicPoolId: string;
        bezier: null;
        group: number;
        id: string;
        max: number;
    } | {
        max: number;
        group: number;
        bezier: null;
        _transform: null;
        step: number;
        id: string;
        min: number;
        weight: number;
        dynamicPoolId?: undefined;
    })[];
} | {
    id: string;
    data: ({
        bezier: null;
        max: number;
        step: number;
        group: number;
        weight: number;
        dynamicPoolId: string;
        _transform: null;
        id: string;
        min: number;
    } | {
        group: number;
        max: number;
        step: number;
        bezier: null;
        min: number;
        weight: number;
        _transform: null;
        id: string;
        dynamicPoolId?: undefined;
    })[];
} | {
    id: string;
    data: {
        weight: number;
        group: number;
        bezier: null;
        dynamicPoolId: string;
        id: string;
        max: number;
        min: number;
        step: number;
        _transform: null;
    }[];
} | {
    id: string;
    data: ({
        group: number;
        weight: number;
        id: string;
        _transform: null;
        min: number;
        bezier: null;
        step: number;
        max: number;
        dynamicPoolId: string;
    } | {
        weight: number;
        _transform: null;
        bezier: null;
        id: string;
        group: number;
        min: number;
        max: number;
        step: number;
        dynamicPoolId?: undefined;
    })[];
} | {
    id: string;
    data: ({
        weight: number;
        bezier: null;
        id: string;
        min: number;
        group: number;
        step: number;
        _transform: null;
        dynamicPoolId: string;
        max: number;
    } | {
        _transform: null;
        weight: number;
        step: number;
        group: number;
        min: number;
        max: number;
        bezier: null;
        id: string;
        dynamicPoolId?: undefined;
    })[];
} | {
    id: string;
    data: ({
        bezier: null;
        id: string;
        group: number;
        max: number;
        min: number;
        _transform: null;
        dynamicPoolId: string;
        step: number;
        weight: number;
    } | {
        group: number;
        bezier: null;
        min: number;
        max: number;
        step: number;
        _transform: null;
        weight: number;
        id: string;
        dynamicPoolId?: undefined;
    })[];
} | {
    id: string;
    data: {
        id: string;
        group: number;
        dynamicPoolId: string;
        min: number;
        _transform: null;
        max: number;
        bezier: null;
        weight: number;
        step: number;
    }[];
} | {
    data: {
        step: number;
        max: number;
        bezier: null;
        id: string;
        _transform: null;
        min: number;
        weight: number;
        group: number;
    }[];
    id: string;
} | {
    data: {
        bezier: null;
        id: string;
        step: number;
        min: number;
        max: number;
        weight: number;
        _transform: null;
        group: number;
    }[];
    id: string;
} | {
    data: {
        max: number;
        id: string;
        weight: number;
        min: number;
        bezier: null;
        step: number;
        group: number;
        _transform: null;
    }[];
    id: string;
} | {
    id: string;
    data: {
        group: number;
        step: number;
        id: string;
        weight: number;
        min: number;
        max: number;
        bezier: null;
        _transform: null;
    }[];
} | {
    id: string;
    data: {
        min: number;
        group: number;
        max: number;
        step: number;
        bezier: null;
        id: string;
        weight: number;
        _transform: null;
    }[];
} | {
    id: string;
    data: {
        bezier: null;
        max: number;
        group: number;
        weight: number;
        step: number;
        id: string;
        _transform: null;
        min: number;
    }[];
} | {
    data: {
        bezier: null;
        group: number;
        id: string;
        _transform: null;
        max: number;
        step: number;
        min: number;
        weight: number;
    }[];
    id: string;
} | {
    data: {
        step: number;
        _transform: null;
        group: number;
        min: number;
        bezier: null;
        max: number;
        weight: number;
        id: string;
    }[];
    id: string;
} | {
    id: string;
    data: {
        max: number;
        id: string;
        _transform: null;
        weight: number;
        group: number;
        min: number;
        bezier: null;
        step: number;
    }[];
} | {
    data: {
        min: number;
        _transform: null;
        id: string;
        step: number;
        weight: number;
        max: number;
        group: number;
        bezier: null;
    }[];
    id: string;
} | {
    id: string;
    data: {
        step: number;
        _transform: null;
        weight: number;
        bezier: null;
        id: string;
        group: number;
        max: number;
        min: number;
    }[];
} | {
    data: {
        min: number;
        bezier: null;
        id: string;
        group: number;
        step: number;
        max: number;
        _transform: null;
        weight: number;
    }[];
    id: string;
} | {
    id: string;
    data: ({
        bezier: null;
        max: number;
        group: number;
        dynamicPoolId: string;
        weight: number;
        step: number;
        id: string;
        _transform: null;
        min: number;
    } | {
        _transform: null;
        max: number;
        weight: number;
        group: number;
        id: string;
        bezier: null;
        step: number;
        min: number;
        dynamicPoolId?: undefined;
    })[];
} | {
    data: ({
        min: number;
        bezier: null;
        step: number;
        id: string;
        weight: number;
        _transform: null;
        group: number;
        dynamicPoolId: string;
        max: number;
    } | {
        id: string;
        _transform: null;
        max: number;
        step: number;
        min: number;
        weight: number;
        group: number;
        bezier: null;
        dynamicPoolId?: undefined;
    })[];
    id: string;
} | {
    data: ({
        id: string;
        _transform: null;
        min: number;
        group: number;
        step: number;
        max: number;
        weight: number;
        dynamicPoolId: string;
        bezier: null;
    } | {
        _transform: null;
        max: number;
        id: string;
        bezier: null;
        step: number;
        min: number;
        weight: number;
        group: number;
        dynamicPoolId?: undefined;
    })[];
    id: string;
} | {
    id: string;
    data: {
        step: number;
        min: number;
        max: number;
        _transform: null;
        weight: number;
        dynamicPoolId: string;
        bezier: null;
        id: string;
        group: number;
    }[];
} | {
    data: ({
        step: number;
        _transform: null;
        max: number;
        min: number;
        group: number;
        dynamicPoolId: string;
        id: string;
        weight: number;
        bezier: null;
    } | {
        max: number;
        min: number;
        id: string;
        group: number;
        bezier: null;
        step: number;
        _transform: null;
        weight: number;
        dynamicPoolId?: undefined;
    })[];
    id: string;
} | {
    id: string;
    data: ({
        min: number;
        dynamicPoolId: string;
        id: string;
        max: number;
        _transform: null;
        weight: number;
        bezier: null;
        step: number;
        group: number;
    } | {
        min: number;
        bezier: null;
        id: string;
        weight: number;
        step: number;
        max: number;
        group: number;
        _transform: null;
        dynamicPoolId?: undefined;
    })[];
} | {
    data: ({
        group: number;
        dynamicPoolId: string;
        min: number;
        id: string;
        step: number;
        max: number;
        bezier: null;
        _transform: null;
        weight: number;
    } | {
        _transform: null;
        id: string;
        min: number;
        max: number;
        weight: number;
        bezier: null;
        group: number;
        step: number;
        dynamicPoolId?: undefined;
    })[];
    id: string;
} | {
    id: string;
    data: {
        weight: number;
        dynamicPoolId: string;
        group: number;
        min: number;
        step: number;
        bezier: null;
        _transform: null;
        id: string;
        max: number;
    }[];
} | {
    id: string;
    data: {
        _transform: null;
        group: number;
        min: number;
        weight: number;
        bezier: null;
        id: string;
        step: number;
        max: number;
    }[];
} | {
    data: {
        weight: number;
        step: number;
        id: string;
        _transform: null;
        min: number;
        bezier: null;
        max: number;
        group: number;
    }[];
    id: string;
} | {
    data: {
        _transform: null;
        max: number;
        bezier: null;
        id: string;
        min: number;
        step: number;
        weight: number;
        group: number;
    }[];
    id: string;
} | {
    data: {
        group: number;
        max: number;
        bezier: null;
        _transform: null;
        step: number;
        id: string;
        min: number;
        weight: number;
    }[];
    id: string;
} | {
    data: {
        group: number;
        id: string;
        bezier: null;
        weight: number;
        max: number;
        step: number;
        _transform: null;
        min: number;
    }[];
    id: string;
} | {
    data: {
        id: string;
        min: number;
        max: number;
        weight: number;
        step: number;
        _transform: null;
        bezier: null;
        group: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        id: string;
        step: number;
        group: number;
        bezier: null;
        _transform: null;
        max: number;
        min: number;
        weight: number;
    }[];
} | {
    data: {
        _transform: null;
        min: number;
        group: number;
        weight: number;
        step: number;
        bezier: null;
        id: string;
        max: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        group: number;
        max: number;
        min: number;
        bezier: null;
        step: number;
        _transform: null;
        id: string;
        weight: number;
    }[];
} | {
    data: {
        min: number;
        id: string;
        weight: number;
        step: number;
        max: number;
        _transform: null;
        bezier: null;
        group: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        id: string;
        group: number;
        _transform: null;
        bezier: null;
        step: number;
        max: number;
        weight: number;
        min: number;
    }[];
} | {
    id: string;
    data: {
        _transform: null;
        group: number;
        bezier: null;
        id: string;
        min: number;
        max: number;
        step: number;
        weight: number;
    }[];
} | {
    data: ({
        _transform: null;
        min: number;
        step: number;
        dynamicPoolId: string;
        bezier: null;
        id: string;
        group: number;
        max: number;
        weight: number;
    } | {
        bezier: null;
        id: string;
        step: number;
        group: number;
        _transform: null;
        weight: number;
        min: number;
        max: number;
        dynamicPoolId?: undefined;
    })[];
    id: string;
} | {
    id: string;
    data: ({
        group: number;
        dynamicPoolId: string;
        max: number;
        step: number;
        id: string;
        min: number;
        weight: number;
        bezier: null;
        _transform: null;
    } | {
        min: number;
        step: number;
        bezier: null;
        id: string;
        group: number;
        _transform: null;
        max: number;
        weight: number;
        dynamicPoolId?: undefined;
    })[];
} | {
    id: string;
    data: ({
        step: number;
        _transform: null;
        max: number;
        bezier: null;
        dynamicPoolId: string;
        id: string;
        group: number;
        min: number;
        weight: number;
    } | {
        bezier: null;
        step: number;
        id: string;
        group: number;
        max: number;
        _transform: null;
        weight: number;
        min: number;
        dynamicPoolId?: undefined;
    })[];
} | {
    id: string;
    data: {
        group: number;
        _transform: null;
        step: number;
        dynamicPoolId: string;
        weight: number;
        bezier: null;
        min: number;
        id: string;
        max: number;
    }[];
} | {
    data: ({
        id: string;
        group: number;
        bezier: null;
        step: number;
        _transform: null;
        dynamicPoolId: string;
        weight: number;
        max: number;
        min: number;
    } | {
        id: string;
        bezier: null;
        max: number;
        _transform: null;
        step: number;
        min: number;
        weight: number;
        group: number;
        dynamicPoolId?: undefined;
    })[];
    id: string;
} | {
    id: string;
    data: ({
        weight: number;
        bezier: null;
        step: number;
        min: number;
        _transform: null;
        max: number;
        dynamicPoolId: string;
        id: string;
        group: number;
    } | {
        min: number;
        id: string;
        max: number;
        step: number;
        group: number;
        _transform: null;
        bezier: null;
        weight: number;
        dynamicPoolId?: undefined;
    })[];
} | {
    id: string;
    data: ({
        _transform: null;
        max: number;
        weight: number;
        bezier: null;
        min: number;
        id: string;
        step: number;
        dynamicPoolId: string;
        group: number;
    } | {
        group: number;
        _transform: null;
        id: string;
        max: number;
        min: number;
        weight: number;
        bezier: null;
        step: number;
        dynamicPoolId?: undefined;
    })[];
} | {
    id: string;
    data: {
        bezier: null;
        weight: number;
        group: number;
        id: string;
        max: number;
        min: number;
        _transform: null;
        dynamicPoolId: string;
        step: number;
    }[];
} | {
    id: string;
    data: {
        group: number;
        step: number;
        min: number;
        _transform: null;
        max: number;
        bezier: null;
        weight: number;
        id: string;
    }[];
} | {
    id: string;
    data: {
        max: number;
        _transform: null;
        id: string;
        min: number;
        bezier: null;
        step: number;
        group: number;
        weight: number;
    }[];
} | {
    id: string;
    data: {
        weight: number;
        max: number;
        group: number;
        _transform: null;
        bezier: null;
        id: string;
        step: number;
        min: number;
    }[];
} | {
    id: string;
    data: {
        _transform: null;
        max: number;
        weight: number;
        min: number;
        bezier: null;
        id: string;
        step: number;
        group: number;
    }[];
} | {
    id: string;
    data: {
        max: number;
        id: string;
        group: number;
        dynamicPoolId: string;
        bezier: null;
        step: number;
        weight: number;
        min: number;
        _transform: null;
    }[];
} | {
    data: {
        dynamicPoolId: string;
        weight: number;
        min: number;
        id: string;
        step: number;
        bezier: null;
        _transform: null;
        group: number;
        max: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        max: number;
        group: number;
        dynamicPoolId: string;
        step: number;
        bezier: null;
        _transform: null;
        weight: number;
        id: string;
        min: number;
    }[];
} | {
    id: string;
    data: {
        step: number;
        max: number;
        dynamicPoolId: string;
        min: number;
        group: number;
        weight: number;
        id: string;
        bezier: null;
        _transform: null;
    }[];
} | {
    data: {
        bezier: null;
        dynamicPoolId: string;
        min: number;
        _transform: null;
        step: number;
        group: number;
        weight: number;
        id: string;
        max: number;
    }[];
    id: string;
} | {
    data: {
        min: number;
        max: number;
        step: number;
        id: string;
        dynamicPoolId: string;
        bezier: null;
        weight: number;
        _transform: null;
        group: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        min: number;
        group: number;
        step: number;
        weight: number;
        dynamicPoolId: string;
        max: number;
        id: string;
        bezier: null;
        _transform: null;
    }[];
} | {
    data: {
        max: number;
        group: number;
        step: number;
        dynamicPoolId: string;
        bezier: null;
        _transform: null;
        weight: number;
        id: string;
        min: number;
    }[];
    id: string;
} | {
    data: {
        weight: number;
        step: number;
        bezier: null;
        max: number;
        _transform: null;
        group: number;
        id: string;
        min: number;
        dynamicPoolId: string;
    }[];
    id: string;
} | {
    data: {
        dynamicPoolId: string;
        min: number;
        max: number;
        id: string;
        _transform: null;
        bezier: null;
        group: number;
        weight: number;
        step: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        _transform: null;
        step: number;
        max: number;
        weight: number;
        group: number;
        bezier: null;
        id: string;
        min: number;
        dynamicPoolId: string;
    }[];
} | {
    id: string;
    data: {
        min: number;
        weight: number;
        step: number;
        max: number;
        dynamicPoolId: string;
        id: string;
        bezier: null;
        group: number;
        _transform: null;
    }[];
} | {
    data: {
        bezier: null;
        dynamicPoolId: string;
        min: number;
        group: number;
        id: string;
        _transform: null;
        weight: number;
        max: number;
        step: number;
    }[];
    id: string;
} | {
    data: {
        id: string;
        step: number;
        dynamicPoolId: string;
        min: number;
        weight: number;
        bezier: null;
        _transform: null;
        max: number;
        group: number;
    }[];
    id: string;
} | {
    data: {
        step: number;
        weight: number;
        _transform: null;
        min: number;
        dynamicPoolId: string;
        id: string;
        bezier: null;
        max: number;
        group: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        step: number;
        id: string;
        min: number;
        weight: number;
        dynamicPoolId: string;
        group: number;
        _transform: null;
        max: number;
        bezier: null;
    }[];
} | {
    id: string;
    data: {
        dynamicPoolId: string;
        bezier: null;
        step: number;
        id: string;
        min: number;
        max: number;
        weight: number;
        group: number;
        _transform: null;
    }[];
} | {
    id: string;
    data: {
        max: number;
        step: number;
        bezier: null;
        min: number;
        group: number;
        _transform: null;
        dynamicPoolId: string;
        id: string;
        weight: number;
    }[];
} | {
    id: string;
    data: {
        step: number;
        id: string;
        min: number;
        dynamicPoolId: string;
        max: number;
        bezier: null;
        group: number;
        _transform: null;
        weight: number;
    }[];
} | {
    id: string;
    data: {
        max: number;
        step: number;
        dynamicPoolId: string;
        min: number;
        id: string;
        _transform: null;
        bezier: null;
        group: number;
        weight: number;
    }[];
} | {
    id: string;
    data: {
        bezier: null;
        id: string;
        step: number;
        _transform: null;
        group: number;
        min: number;
        max: number;
        weight: number;
    }[];
} | {
    data: {
        group: number;
        _transform: null;
        min: number;
        id: string;
        max: number;
        step: number;
        bezier: null;
        weight: number;
    }[];
    id: string;
} | {
    data: {
        group: number;
        min: number;
        step: number;
        id: string;
        max: number;
        bezier: null;
        weight: number;
        _transform: null;
    }[];
    id: string;
} | {
    id: string;
    data: {
        id: string;
        step: number;
        group: number;
        min: number;
        max: number;
        _transform: null;
        weight: number;
        bezier: null;
    }[];
} | {
    id: string;
    data: {
        bezier: null;
        weight: number;
        id: string;
        _transform: null;
        group: number;
        step: number;
        max: number;
        min: number;
    }[];
} | {
    id: string;
    data: ({
        bezier: null;
        weight: number;
        _transform: null;
        group: number;
        max: number;
        min: number;
        id: string;
        step: number;
        dynamicPoolId?: undefined;
    } | {
        group: number;
        max: number;
        min: number;
        weight: number;
        step: number;
        dynamicPoolId: string;
        id: string;
        _transform: null;
        bezier: null;
    })[];
} | {
    id: string;
    data: {
        max: number;
        _transform: null;
        id: string;
        min: number;
        weight: number;
        group: number;
        bezier: null;
        step: number;
    }[];
} | {
    id: string;
    data: {
        min: number;
        max: number;
        bezier: null;
        step: number;
        group: number;
        weight: number;
        id: string;
        _transform: null;
    }[];
} | {
    data: ({
        _transform: null;
        bezier: null;
        group: number;
        min: number;
        max: number;
        weight: number;
        id: string;
        step: number;
        dynamicPoolId?: undefined;
    } | {
        _transform: null;
        max: number;
        dynamicPoolId: string;
        group: number;
        bezier: null;
        weight: number;
        id: string;
        step: number;
        min: number;
    })[];
    id: string;
} | {
    id: string;
    data: {
        min: number;
        max: number;
        weight: number;
        _transform: null;
        step: number;
        bezier: null;
        id: string;
        group: number;
    }[];
} | {
    data: {
        weight: number;
        group: number;
        max: number;
        id: string;
        _transform: null;
        min: number;
        bezier: null;
        step: number;
    }[];
    id: string;
} | {
    data: ({
        max: number;
        _transform: null;
        min: number;
        group: number;
        weight: number;
        bezier: null;
        step: number;
        id: string;
        dynamicPoolId?: undefined;
    } | {
        weight: number;
        group: number;
        _transform: null;
        bezier: null;
        max: number;
        id: string;
        step: number;
        dynamicPoolId: string;
        min: number;
    })[];
    id: string;
} | {
    id: string;
    data: ({
        bezier: null;
        id: string;
        min: number;
        group: number;
        _transform: null;
        max: number;
        weight: number;
        step: number;
        dynamicPoolId?: undefined;
    } | {
        min: number;
        step: number;
        _transform: null;
        group: number;
        weight: number;
        dynamicPoolId: string;
        id: string;
        bezier: null;
        max: number;
    })[];
} | {
    data: ({
        bezier: null;
        id: string;
        min: number;
        _transform: null;
        weight: number;
        max: number;
        group: number;
        step: number;
        dynamicPoolId?: undefined;
    } | {
        id: string;
        _transform: null;
        bezier: null;
        weight: number;
        dynamicPoolId: string;
        step: number;
        max: number;
        group: number;
        min: number;
    })[];
    id: string;
} | {
    id: string;
    data: ({
        max: number;
        _transform: null;
        bezier: null;
        step: number;
        id: string;
        group: number;
        weight: number;
        min: number;
        dynamicPoolId?: undefined;
    } | {
        _transform: null;
        id: string;
        max: number;
        step: number;
        dynamicPoolId: string;
        weight: number;
        group: number;
        bezier: null;
        min: number;
    })[];
} | {
    id: string;
    data: ({
        bezier: null;
        _transform: null;
        id: string;
        weight: number;
        group: number;
        max: number;
        min: number;
        step: number;
        dynamicPoolId?: undefined;
    } | {
        step: number;
        dynamicPoolId: string;
        bezier: null;
        _transform: null;
        group: number;
        weight: number;
        id: string;
        max: number;
        min: number;
    })[];
} | {
    data: {
        bezier: null;
        group: number;
        _transform: null;
        step: number;
        weight: number;
        min: number;
        id: string;
        max: number;
    }[];
    id: string;
} | {
    data: {
        id: string;
        min: number;
        max: number;
        weight: number;
        bezier: null;
        step: number;
        group: number;
        _transform: null;
    }[];
    id: string;
} | {
    data: {
        max: number;
        weight: number;
        _transform: null;
        group: number;
        id: string;
        step: number;
        min: number;
        bezier: null;
    }[];
    id: string;
} | {
    id: string;
    data: {
        group: number;
        min: number;
        bezier: null;
        step: number;
        id: string;
        weight: number;
        _transform: null;
        max: number;
    }[];
} | {
    id: string;
    data: {
        weight: number;
        bezier: null;
        _transform: null;
        step: number;
        max: number;
        min: number;
        group: number;
        id: string;
    }[];
} | {
    id: string;
    data: {
        group: number;
        id: string;
        min: number;
        bezier: null;
        weight: number;
        max: number;
        step: number;
        _transform: null;
    }[];
} | {
    data: {
        _transform: null;
        group: number;
        bezier: null;
        min: number;
        step: number;
        max: number;
        id: string;
        weight: number;
    }[];
    id: string;
} | {
    data: {
        weight: number;
        min: number;
        group: number;
        max: number;
        bezier: null;
        _transform: null;
        id: string;
        step: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        id: string;
        weight: number;
        step: number;
        max: number;
        bezier: null;
        _transform: null;
        min: number;
        group: number;
    }[];
} | {
    data: ({
        _transform: null;
        step: number;
        max: number;
        min: number;
        weight: number;
        group: number;
        bezier: null;
        id: string;
        dynamicPoolId?: undefined;
    } | {
        max: number;
        dynamicPoolId: string;
        id: string;
        step: number;
        group: number;
        weight: number;
        min: number;
        bezier: null;
        _transform: null;
    })[];
    id: string;
} | {
    id: string;
    data: {
        id: string;
        step: number;
        weight: number;
        group: number;
        bezier: null;
        max: number;
        _transform: null;
        min: number;
    }[];
} | {
    data: {
        min: number;
        bezier: null;
        _transform: null;
        step: number;
        group: number;
        max: number;
        id: string;
        weight: number;
    }[];
    id: string;
} | {
    id: string;
    data: ({
        min: number;
        group: number;
        id: string;
        bezier: null;
        weight: number;
        _transform: null;
        max: number;
        step: number;
        dynamicPoolId?: undefined;
    } | {
        min: number;
        dynamicPoolId: string;
        group: number;
        max: number;
        weight: number;
        step: number;
        bezier: null;
        id: string;
        _transform: null;
    })[];
} | {
    data: {
        group: number;
        _transform: null;
        max: number;
        min: number;
        step: number;
        id: string;
        weight: number;
        bezier: null;
    }[];
    id: string;
} | {
    id: string;
    data: {
        weight: number;
        bezier: null;
        _transform: null;
        group: number;
        max: number;
        id: string;
        min: number;
        step: number;
    }[];
} | {
    data: ({
        bezier: null;
        weight: number;
        id: string;
        _transform: null;
        min: number;
        step: number;
        group: number;
        max: number;
        dynamicPoolId?: undefined;
    } | {
        max: number;
        step: number;
        dynamicPoolId: string;
        _transform: null;
        id: string;
        weight: number;
        min: number;
        group: number;
        bezier: null;
    })[];
    id: string;
} | {
    id: string;
    data: ({
        weight: number;
        _transform: null;
        min: number;
        group: number;
        step: number;
        max: number;
        bezier: null;
        id: string;
        dynamicPoolId?: undefined;
    } | {
        bezier: null;
        dynamicPoolId: string;
        _transform: null;
        id: string;
        max: number;
        step: number;
        min: number;
        weight: number;
        group: number;
    })[];
} | {
    data: ({
        min: number;
        max: number;
        weight: number;
        step: number;
        id: string;
        _transform: null;
        bezier: null;
        group: number;
        dynamicPoolId?: undefined;
    } | {
        group: number;
        id: string;
        min: number;
        bezier: null;
        _transform: null;
        dynamicPoolId: string;
        max: number;
        weight: number;
        step: number;
    })[];
    id: string;
} | {
    id: string;
    data: ({
        id: string;
        weight: number;
        min: number;
        _transform: null;
        max: number;
        step: number;
        group: number;
        bezier: null;
        dynamicPoolId?: undefined;
    } | {
        group: number;
        dynamicPoolId: string;
        weight: number;
        min: number;
        max: number;
        _transform: null;
        step: number;
        id: string;
        bezier: null;
    })[];
} | {
    id: string;
    data: ({
        weight: number;
        bezier: null;
        max: number;
        _transform: null;
        min: number;
        group: number;
        step: number;
        id: string;
        dynamicPoolId?: undefined;
    } | {
        step: number;
        min: number;
        dynamicPoolId: string;
        _transform: null;
        weight: number;
        id: string;
        max: number;
        group: number;
        bezier: null;
    })[];
} | {
    id: string;
    data: {
        group: number;
        _transform: null;
        step: number;
        bezier: null;
        weight: number;
        id: string;
        max: number;
        min: number;
    }[];
} | {
    id: string;
    data: {
        id: string;
        group: number;
        weight: number;
        _transform: null;
        min: number;
        bezier: null;
        max: number;
        step: number;
    }[];
} | {
    id: string;
    data: {
        min: number;
        id: string;
        step: number;
        bezier: null;
        weight: number;
        group: number;
        max: number;
        _transform: null;
    }[];
} | {
    id: string;
    data: {
        min: number;
        id: string;
        step: number;
        max: number;
        bezier: null;
        _transform: null;
        weight: number;
        group: number;
    }[];
} | {
    id: string;
    data: {
        group: number;
        bezier: null;
        max: number;
        _transform: null;
        step: number;
        weight: number;
        min: number;
        id: string;
    }[];
} | {
    id: string;
    data: {
        bezier: null;
        _transform: null;
        min: number;
        id: string;
        group: number;
        max: number;
        weight: number;
        step: number;
    }[];
} | {
    id: string;
    data: {
        min: number;
        step: number;
        bezier: null;
        weight: number;
        group: number;
        id: string;
        _transform: null;
        max: number;
    }[];
} | {
    data: {
        max: number;
        group: number;
        min: number;
        bezier: null;
        _transform: null;
        id: string;
        step: number;
        weight: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        max: number;
        min: number;
        group: number;
        _transform: null;
        id: string;
        bezier: null;
        weight: number;
        step: number;
    }[];
} | {
    data: ({
        min: number;
        bezier: null;
        id: string;
        group: number;
        _transform: null;
        weight: number;
        step: number;
        max: number;
        dynamicPoolId?: undefined;
    } | {
        bezier: null;
        min: number;
        max: number;
        dynamicPoolId: string;
        step: number;
        weight: number;
        _transform: null;
        group: number;
        id: string;
    })[];
    id: string;
} | {
    id: string;
    data: {
        _transform: null;
        group: number;
        max: number;
        step: number;
        weight: number;
        bezier: null;
        id: string;
        min: number;
    }[];
} | {
    id: string;
    data: {
        group: number;
        step: number;
        bezier: null;
        max: number;
        _transform: null;
        min: number;
        id: string;
        weight: number;
    }[];
} | {
    data: ({
        max: number;
        step: number;
        min: number;
        bezier: null;
        group: number;
        _transform: null;
        id: string;
        weight: number;
        dynamicPoolId?: undefined;
    } | {
        max: number;
        group: number;
        min: number;
        weight: number;
        bezier: null;
        _transform: null;
        id: string;
        dynamicPoolId: string;
        step: number;
    })[];
    id: string;
} | {
    data: {
        bezier: null;
        id: string;
        _transform: null;
        step: number;
        group: number;
        max: number;
        weight: number;
        min: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        id: string;
        bezier: null;
        step: number;
        min: number;
        group: number;
        weight: number;
        _transform: null;
        max: number;
    }[];
} | {
    id: string;
    data: ({
        bezier: null;
        _transform: null;
        id: string;
        max: number;
        group: number;
        min: number;
        weight: number;
        step: number;
        dynamicPoolId?: undefined;
    } | {
        max: number;
        _transform: null;
        dynamicPoolId: string;
        bezier: null;
        id: string;
        step: number;
        weight: number;
        group: number;
        min: number;
    })[];
} | {
    data: ({
        group: number;
        id: string;
        weight: number;
        step: number;
        _transform: null;
        bezier: null;
        min: number;
        max: number;
        dynamicPoolId?: undefined;
    } | {
        group: number;
        step: number;
        dynamicPoolId: string;
        _transform: null;
        min: number;
        id: string;
        max: number;
        bezier: null;
        weight: number;
    })[];
    id: string;
} | {
    id: string;
    data: ({
        id: string;
        _transform: null;
        max: number;
        group: number;
        min: number;
        bezier: null;
        step: number;
        weight: number;
        dynamicPoolId?: undefined;
    } | {
        id: string;
        max: number;
        min: number;
        step: number;
        bezier: null;
        group: number;
        dynamicPoolId: string;
        _transform: null;
        weight: number;
    })[];
} | {
    data: ({
        id: string;
        _transform: null;
        step: number;
        min: number;
        bezier: null;
        max: number;
        weight: number;
        group: number;
        dynamicPoolId?: undefined;
    } | {
        _transform: null;
        group: number;
        dynamicPoolId: string;
        bezier: null;
        min: number;
        weight: number;
        id: string;
        max: number;
        step: number;
    })[];
    id: string;
} | {
    data: ({
        id: string;
        group: number;
        min: number;
        bezier: null;
        step: number;
        weight: number;
        max: number;
        _transform: null;
        dynamicPoolId?: undefined;
    } | {
        id: string;
        group: number;
        weight: number;
        _transform: null;
        step: number;
        max: number;
        dynamicPoolId: string;
        bezier: null;
        min: number;
    })[];
    id: string;
} | {
    id: string;
    data: {
        bezier: null;
        group: number;
        _transform: null;
        id: string;
        max: number;
        min: number;
        weight: number;
        step: number;
    }[];
} | {
    id: string;
    data: {
        group: number;
        bezier: null;
        _transform: null;
        step: number;
        weight: number;
        id: string;
        min: number;
        max: number;
    }[];
} | {
    id: string;
    data: {
        group: number;
        min: number;
        max: number;
        step: number;
        id: string;
        bezier: null;
        _transform: null;
        weight: number;
    }[];
} | {
    id: string;
    data: {
        weight: number;
        bezier: null;
        _transform: null;
        min: number;
        max: number;
        group: number;
        step: number;
        id: string;
    }[];
} | {
    id: string;
    data: {
        bezier: null;
        id: string;
        max: number;
        min: number;
        step: number;
        _transform: null;
        weight: number;
        group: number;
    }[];
} | {
    id: string;
    data: {
        group: number;
        _transform: null;
        max: number;
        weight: number;
        step: number;
        min: number;
        bezier: null;
        id: string;
    }[];
} | {
    data: {
        bezier: null;
        id: string;
        step: number;
        weight: number;
        _transform: null;
        min: number;
        group: number;
        max: number;
    }[];
    id: string;
} | {
    data: {
        _transform: null;
        max: number;
        weight: number;
        id: string;
        min: number;
        group: number;
        step: number;
        bezier: null;
    }[];
    id: string;
} | {
    id: string;
    data: {
        bezier: null;
        step: number;
        max: number;
        group: number;
        id: string;
        weight: number;
        _transform: null;
        min: number;
    }[];
} | {
    id: string;
    data: ({
        step: number;
        group: number;
        max: number;
        weight: number;
        bezier: null;
        _transform: null;
        id: string;
        min: number;
        dynamicPoolId?: undefined;
    } | {
        bezier: null;
        weight: number;
        step: number;
        group: number;
        id: string;
        _transform: null;
        dynamicPoolId: string;
        min: number;
        max: number;
    })[];
} | {
    data: {
        bezier: null;
        min: number;
        step: number;
        weight: number;
        max: number;
        group: number;
        id: string;
        _transform: null;
    }[];
    id: string;
} | {
    data: {
        min: number;
        weight: number;
        id: string;
        group: number;
        bezier: null;
        max: number;
        _transform: null;
        step: number;
    }[];
    id: string;
} | {
    id: string;
    data: ({
        bezier: null;
        max: number;
        id: string;
        _transform: null;
        group: number;
        min: number;
        step: number;
        weight: number;
        dynamicPoolId?: undefined;
    } | {
        max: number;
        bezier: null;
        _transform: null;
        dynamicPoolId: string;
        id: string;
        step: number;
        group: number;
        min: number;
        weight: number;
    })[];
} | {
    id: string;
    data: {
        bezier: null;
        group: number;
        weight: number;
        _transform: null;
        min: number;
        step: number;
        id: string;
        max: number;
    }[];
} | {
    data: {
        min: number;
        _transform: null;
        group: number;
        weight: number;
        step: number;
        max: number;
        bezier: null;
        id: string;
    }[];
    id: string;
} | {
    id: string;
    data: ({
        _transform: null;
        id: string;
        max: number;
        weight: number;
        step: number;
        min: number;
        group: number;
        bezier: null;
        dynamicPoolId?: undefined;
    } | {
        dynamicPoolId: string;
        weight: number;
        bezier: null;
        min: number;
        _transform: null;
        max: number;
        group: number;
        id: string;
        step: number;
    })[];
} | {
    data: ({
        group: number;
        bezier: null;
        min: number;
        step: number;
        id: string;
        weight: number;
        _transform: null;
        max: number;
        dynamicPoolId?: undefined;
    } | {
        group: number;
        weight: number;
        id: string;
        dynamicPoolId: string;
        _transform: null;
        max: number;
        bezier: null;
        min: number;
        step: number;
    })[];
    id: string;
} | {
    id: string;
    data: ({
        step: number;
        _transform: null;
        weight: number;
        bezier: null;
        max: number;
        id: string;
        group: number;
        min: number;
        dynamicPoolId?: undefined;
    } | {
        id: string;
        weight: number;
        dynamicPoolId: string;
        _transform: null;
        bezier: null;
        group: number;
        max: number;
        min: number;
        step: number;
    })[];
} | {
    data: ({
        _transform: null;
        min: number;
        max: number;
        group: number;
        id: string;
        step: number;
        bezier: null;
        weight: number;
        dynamicPoolId?: undefined;
    } | {
        group: number;
        max: number;
        step: number;
        _transform: null;
        weight: number;
        bezier: null;
        dynamicPoolId: string;
        id: string;
        min: number;
    })[];
    id: string;
} | {
    data: ({
        bezier: null;
        group: number;
        max: number;
        step: number;
        id: string;
        weight: number;
        _transform: null;
        min: number;
        dynamicPoolId?: undefined;
    } | {
        max: number;
        dynamicPoolId: string;
        min: number;
        id: string;
        group: number;
        _transform: null;
        step: number;
        bezier: null;
        weight: number;
    })[];
    id: string;
} | {
    id: string;
    data: {
        bezier: null;
        id: string;
        group: number;
        min: number;
        step: number;
        max: number;
        weight: number;
        _transform: null;
    }[];
} | {
    id: string;
    data: {
        step: number;
        id: string;
        weight: number;
        _transform: null;
        min: number;
        bezier: null;
        max: number;
        group: number;
    }[];
} | {
    id: string;
    data: {
        group: number;
        _transform: null;
        bezier: null;
        step: number;
        min: number;
        weight: number;
        max: number;
        id: string;
    }[];
} | {
    id: string;
    data: {
        group: number;
        _transform: null;
        min: number;
        bezier: null;
        step: number;
        weight: number;
        id: string;
        max: number;
    }[];
} | {
    data: {
        _transform: null;
        group: number;
        bezier: null;
        id: string;
        step: number;
        dynamicPoolId: string;
        max: number;
        weight: number;
        min: number;
    }[];
    id: string;
} | {
    data: {
        min: number;
        id: string;
        max: number;
        weight: number;
        group: number;
        step: number;
        dynamicPoolId: string;
        bezier: null;
        _transform: null;
    }[];
    id: string;
} | {
    id: string;
    data: {
        dynamicPoolId: string;
        min: number;
        weight: number;
        group: number;
        id: string;
        _transform: null;
        max: number;
        step: number;
        bezier: null;
    }[];
} | {
    id: string;
    data: {
        bezier: null;
        max: number;
        group: number;
        dynamicPoolId: string;
        weight: number;
        step: number;
        min: number;
        id: string;
        _transform: null;
    }[];
} | {
    id: string;
    data: {
        max: number;
        bezier: null;
        group: number;
        _transform: null;
        weight: number;
        min: number;
        step: number;
        dynamicPoolId: string;
        id: string;
    }[];
} | {
    id: string;
    data: {
        dynamicPoolId: string;
        max: number;
        step: number;
        weight: number;
        bezier: null;
        min: number;
        group: number;
        id: string;
        _transform: null;
    }[];
} | {
    id: string;
    data: {
        weight: number;
        id: string;
        max: number;
        group: number;
        bezier: null;
        _transform: null;
        dynamicPoolId: string;
        step: number;
        min: number;
    }[];
} | {
    id: string;
    data: {
        bezier: null;
        min: number;
        id: string;
        dynamicPoolId: string;
        max: number;
        group: number;
        weight: number;
        step: number;
        _transform: null;
    }[];
} | {
    id: string;
    data: {
        step: number;
        bezier: null;
        min: number;
        max: number;
        dynamicPoolId: string;
        _transform: null;
        weight: number;
        group: number;
        id: string;
    }[];
} | {
    id: string;
    data: {
        dynamicPoolId: string;
        _transform: null;
        step: number;
        min: number;
        bezier: null;
        group: number;
        id: string;
        max: number;
        weight: number;
    }[];
} | {
    id: string;
    data: {
        group: number;
        weight: number;
        bezier: null;
        step: number;
        max: number;
        min: number;
        id: string;
        _transform: null;
        dynamicPoolId: string;
    }[];
} | {
    id: string;
    data: {
        step: number;
        min: number;
        _transform: null;
        dynamicPoolId: string;
        id: string;
        weight: number;
        bezier: null;
        max: number;
        group: number;
    }[];
} | {
    id: string;
    data: {
        id: string;
        _transform: null;
        weight: number;
        bezier: null;
        min: number;
        max: number;
        step: number;
        dynamicPoolId: string;
        group: number;
    }[];
} | {
    id: string;
    data: {
        _transform: null;
        max: number;
        bezier: null;
        dynamicPoolId: string;
        step: number;
        id: string;
        weight: number;
        group: number;
        min: number;
    }[];
} | {
    data: {
        min: number;
        step: number;
        dynamicPoolId: string;
        bezier: null;
        id: string;
        max: number;
        weight: number;
        _transform: null;
        group: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        bezier: null;
        _transform: null;
        weight: number;
        dynamicPoolId: string;
        group: number;
        min: number;
        id: string;
        max: number;
        step: number;
    }[];
} | {
    data: {
        group: number;
        weight: number;
        dynamicPoolId: string;
        id: string;
        max: number;
        step: number;
        _transform: null;
        min: number;
        bezier: null;
    }[];
    id: string;
} | {
    id: string;
    data: {
        bezier: null;
        min: number;
        dynamicPoolId: string;
        _transform: null;
        max: number;
        id: string;
        step: number;
        group: number;
        weight: number;
    }[];
} | {
    data: {
        _transform: null;
        step: number;
        dynamicPoolId: string;
        min: number;
        bezier: null;
        id: string;
        max: number;
        group: number;
        weight: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        bezier: null;
        _transform: null;
        id: string;
        max: number;
        dynamicPoolId: string;
        weight: number;
        group: number;
        min: number;
        step: number;
    }[];
} | {
    id: string;
    data: {
        group: number;
        max: number;
        bezier: null;
        id: string;
        _transform: null;
        step: number;
        min: number;
        weight: number;
    }[];
} | {
    data: {
        min: number;
        weight: number;
        bezier: null;
        group: number;
        id: string;
        step: number;
        _transform: null;
        max: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        min: number;
        group: number;
        step: number;
        id: string;
        weight: number;
        bezier: null;
        max: number;
        _transform: null;
    }[];
} | {
    data: {
        group: number;
        weight: number;
        bezier: null;
        id: string;
        max: number;
        _transform: null;
        min: number;
        step: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        id: string;
        _transform: null;
        max: number;
        weight: number;
        step: number;
        bezier: null;
        group: number;
        min: number;
    }[];
} | {
    data: ({
        weight: number;
        group: number;
        bezier: null;
        step: number;
        max: number;
        id: string;
        _transform: null;
        min: number;
        dynamicPoolId?: undefined;
    } | {
        bezier: null;
        group: number;
        _transform: null;
        weight: number;
        id: string;
        max: number;
        min: number;
        step: number;
        dynamicPoolId: string;
    })[];
    id: string;
} | {
    id: string;
    data: {
        max: number;
        weight: number;
        min: number;
        step: number;
        id: string;
        group: number;
        bezier: null;
        _transform: null;
    }[];
} | {
    id: string;
    data: {
        id: string;
        bezier: null;
        step: number;
        _transform: null;
        group: number;
        min: number;
        weight: number;
        max: number;
    }[];
} | {
    data: ({
        id: string;
        max: number;
        _transform: null;
        step: number;
        min: number;
        bezier: null;
        group: number;
        weight: number;
        dynamicPoolId?: undefined;
    } | {
        max: number;
        _transform: null;
        weight: number;
        bezier: null;
        min: number;
        step: number;
        dynamicPoolId: string;
        group: number;
        id: string;
    })[];
    id: string;
} | {
    data: {
        weight: number;
        min: number;
        bezier: null;
        group: number;
        _transform: null;
        max: number;
        id: string;
        step: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        _transform: null;
        group: number;
        max: number;
        weight: number;
        bezier: null;
        id: string;
        step: number;
        min: number;
    }[];
} | {
    data: ({
        group: number;
        id: string;
        _transform: null;
        min: number;
        bezier: null;
        weight: number;
        max: number;
        step: number;
        dynamicPoolId?: undefined;
    } | {
        _transform: null;
        min: number;
        weight: number;
        dynamicPoolId: string;
        max: number;
        group: number;
        step: number;
        bezier: null;
        id: string;
    })[];
    id: string;
} | {
    id: string;
    data: ({
        step: number;
        max: number;
        bezier: null;
        id: string;
        _transform: null;
        min: number;
        group: number;
        weight: number;
        dynamicPoolId?: undefined;
    } | {
        max: number;
        step: number;
        dynamicPoolId: string;
        id: string;
        _transform: null;
        weight: number;
        bezier: null;
        min: number;
        group: number;
    })[];
} | {
    id: string;
    data: ({
        weight: number;
        step: number;
        group: number;
        _transform: null;
        min: number;
        id: string;
        bezier: null;
        max: number;
        dynamicPoolId?: undefined;
    } | {
        step: number;
        dynamicPoolId: string;
        min: number;
        bezier: null;
        id: string;
        _transform: null;
        max: number;
        group: number;
        weight: number;
    })[];
} | {
    id: string;
    data: ({
        group: number;
        min: number;
        step: number;
        bezier: null;
        id: string;
        _transform: null;
        max: number;
        weight: number;
        dynamicPoolId?: undefined;
    } | {
        bezier: null;
        dynamicPoolId: string;
        weight: number;
        min: number;
        group: number;
        max: number;
        step: number;
        _transform: null;
        id: string;
    })[];
} | {
    data: ({
        min: number;
        step: number;
        weight: number;
        bezier: null;
        id: string;
        _transform: null;
        max: number;
        group: number;
        dynamicPoolId?: undefined;
    } | {
        weight: number;
        dynamicPoolId: string;
        min: number;
        bezier: null;
        id: string;
        step: number;
        _transform: null;
        max: number;
        group: number;
    })[];
    id: string;
} | {
    data: {
        bezier: null;
        id: string;
        max: number;
        group: number;
        min: number;
        _transform: null;
        step: number;
        weight: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        step: number;
        bezier: null;
        min: number;
        weight: number;
        _transform: null;
        max: number;
        id: string;
        group: number;
    }[];
} | {
    data: {
        id: string;
        group: number;
        min: number;
        step: number;
        _transform: null;
        weight: number;
        max: number;
        bezier: null;
    }[];
    id: string;
} | {
    id: string;
    data: {
        id: string;
        weight: number;
        _transform: null;
        max: number;
        group: number;
        min: number;
        step: number;
        bezier: null;
    }[];
} | {
    id: string;
    data: {
        step: number;
        group: number;
        id: string;
        min: number;
        _transform: null;
        max: number;
        weight: number;
        bezier: null;
    }[];
} | {
    id: string;
    data: {
        id: string;
        max: number;
        _transform: null;
        step: number;
        group: number;
        min: number;
        bezier: null;
        weight: number;
    }[];
} | {
    data: {
        min: number;
        group: number;
        _transform: null;
        bezier: null;
        step: number;
        id: string;
        weight: number;
        max: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        bezier: null;
        _transform: null;
        min: number;
        id: string;
        max: number;
        group: number;
        weight: number;
        step: number;
    }[];
} | {
    data: {
        group: number;
        weight: number;
        step: number;
        id: string;
        bezier: null;
        _transform: null;
        max: number;
        min: number;
    }[];
    id: string;
} | {
    data: ({
        bezier: null;
        id: string;
        step: number;
        group: number;
        _transform: null;
        max: number;
        weight: number;
        min: number;
        dynamicPoolId?: undefined;
    } | {
        group: number;
        min: number;
        id: string;
        _transform: null;
        max: number;
        dynamicPoolId: string;
        step: number;
        bezier: null;
        weight: number;
    })[];
    id: string;
} | {
    data: {
        bezier: null;
        _transform: null;
        min: number;
        max: number;
        group: number;
        step: number;
        id: string;
        weight: number;
    }[];
    id: string;
} | {
    data: {
        weight: number;
        min: number;
        max: number;
        _transform: null;
        step: number;
        bezier: null;
        id: string;
        group: number;
    }[];
    id: string;
} | {
    id: string;
    data: ({
        weight: number;
        bezier: null;
        group: number;
        id: string;
        _transform: null;
        max: number;
        min: number;
        step: number;
        dynamicPoolId?: undefined;
    } | {
        step: number;
        min: number;
        _transform: null;
        id: string;
        bezier: null;
        weight: number;
        dynamicPoolId: string;
        group: number;
        max: number;
    })[];
} | {
    data: {
        min: number;
        weight: number;
        bezier: null;
        _transform: null;
        id: string;
        max: number;
        group: number;
        step: number;
    }[];
    id: string;
} | {
    data: {
        max: number;
        group: number;
        bezier: null;
        step: number;
        id: string;
        min: number;
        _transform: null;
        weight: number;
    }[];
    id: string;
} | {
    data: ({
        group: number;
        _transform: null;
        bezier: null;
        weight: number;
        step: number;
        min: number;
        id: string;
        max: number;
        dynamicPoolId?: undefined;
    } | {
        step: number;
        max: number;
        group: number;
        id: string;
        min: number;
        bezier: null;
        dynamicPoolId: string;
        _transform: null;
        weight: number;
    })[];
    id: string;
} | {
    id: string;
    data: ({
        bezier: null;
        step: number;
        min: number;
        max: number;
        group: number;
        weight: number;
        _transform: null;
        id: string;
        dynamicPoolId?: undefined;
    } | {
        max: number;
        dynamicPoolId: string;
        _transform: null;
        id: string;
        bezier: null;
        min: number;
        weight: number;
        step: number;
        group: number;
    })[];
} | {
    id: string;
    data: ({
        group: number;
        min: number;
        _transform: null;
        id: string;
        bezier: null;
        max: number;
        weight: number;
        step: number;
        dynamicPoolId?: undefined;
    } | {
        group: number;
        bezier: null;
        min: number;
        max: number;
        step: number;
        dynamicPoolId: string;
        _transform: null;
        weight: number;
        id: string;
    })[];
} | {
    id: string;
    data: ({
        weight: number;
        min: number;
        max: number;
        id: string;
        _transform: null;
        step: number;
        group: number;
        bezier: null;
        dynamicPoolId?: undefined;
    } | {
        dynamicPoolId: string;
        max: number;
        weight: number;
        group: number;
        id: string;
        bezier: null;
        _transform: null;
        min: number;
        step: number;
    })[];
} | {
    id: string;
    data: ({
        weight: number;
        min: number;
        step: number;
        _transform: null;
        id: string;
        max: number;
        group: number;
        bezier: null;
        dynamicPoolId?: undefined;
    } | {
        dynamicPoolId: string;
        id: string;
        max: number;
        weight: number;
        _transform: null;
        step: number;
        group: number;
        bezier: null;
        min: number;
    })[];
} | {
    id: string;
    data: {
        step: number;
        min: number;
        group: number;
        bezier: null;
        weight: number;
        id: string;
        _transform: null;
        max: number;
    }[];
} | {
    id: string;
    data: {
        step: number;
        max: number;
        bezier: null;
        weight: number;
        id: string;
        group: number;
        min: number;
        _transform: null;
    }[];
} | {
    id: string;
    data: {
        _transform: null;
        max: number;
        min: number;
        id: string;
        weight: number;
        group: number;
        step: number;
        bezier: null;
    }[];
} | {
    data: {
        group: number;
        min: number;
        max: number;
        step: number;
        _transform: null;
        id: string;
        bezier: null;
        weight: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        min: number;
        weight: number;
        bezier: null;
        step: number;
        group: number;
        _transform: null;
        max: number;
        id: string;
    }[];
} | {
    data: {
        bezier: null;
        min: number;
        id: string;
        weight: number;
        group: number;
        max: number;
        step: number;
        _transform: null;
    }[];
    id: string;
} | {
    id: string;
    data: {
        max: number;
        bezier: null;
        group: number;
        min: number;
        step: number;
        weight: number;
        _transform: null;
        id: string;
    }[];
} | {
    data: {
        _transform: null;
        bezier: null;
        max: number;
        step: number;
        min: number;
        group: number;
        id: string;
        weight: number;
    }[];
    id: string;
} | {
    data: {
        max: number;
        bezier: null;
        id: string;
        weight: number;
        _transform: null;
        step: number;
        group: number;
        min: number;
    }[];
    id: string;
} | {
    id: string;
    data: ({
        group: number;
        step: number;
        max: number;
        id: string;
        _transform: null;
        weight: number;
        min: number;
        bezier: null;
        dynamicPoolId?: undefined;
    } | {
        dynamicPoolId: string;
        weight: number;
        bezier: null;
        min: number;
        group: number;
        step: number;
        max: number;
        _transform: null;
        id: string;
    })[];
} | {
    data: {
        weight: number;
        step: number;
        group: number;
        id: string;
        _transform: null;
        max: number;
        min: number;
        bezier: null;
    }[];
    id: string;
} | {
    data: {
        group: number;
        weight: number;
        min: number;
        id: string;
        step: number;
        max: number;
        bezier: null;
        _transform: null;
    }[];
    id: string;
} | {
    id: string;
    data: ({
        bezier: null;
        max: number;
        min: number;
        weight: number;
        group: number;
        id: string;
        _transform: null;
        step: number;
        dynamicPoolId?: undefined;
    } | {
        min: number;
        max: number;
        weight: number;
        id: string;
        step: number;
        dynamicPoolId: string;
        group: number;
        bezier: null;
        _transform: null;
    })[];
} | {
    id: string;
    data: {
        bezier: null;
        id: string;
        step: number;
        group: number;
        min: number;
        max: number;
        _transform: null;
        weight: number;
    }[];
} | {
    id: string;
    data: {
        weight: number;
        max: number;
        min: number;
        step: number;
        id: string;
        group: number;
        _transform: null;
        bezier: null;
    }[];
} | {
    data: ({
        bezier: null;
        weight: number;
        max: number;
        id: string;
        step: number;
        group: number;
        _transform: null;
        min: number;
        dynamicPoolId?: undefined;
    } | {
        min: number;
        dynamicPoolId: string;
        _transform: null;
        bezier: null;
        group: number;
        max: number;
        weight: number;
        id: string;
        step: number;
    })[];
    id: string;
} | {
    id: string;
    data: ({
        bezier: null;
        group: number;
        min: number;
        id: string;
        max: number;
        step: number;
        weight: number;
        _transform: null;
        dynamicPoolId?: undefined;
    } | {
        step: number;
        dynamicPoolId: string;
        min: number;
        id: string;
        weight: number;
        max: number;
        _transform: null;
        group: number;
        bezier: null;
    })[];
} | {
    data: ({
        id: string;
        weight: number;
        bezier: null;
        group: number;
        min: number;
        max: number;
        _transform: null;
        step: number;
        dynamicPoolId?: undefined;
    } | {
        bezier: null;
        group: number;
        min: number;
        max: number;
        dynamicPoolId: string;
        step: number;
        id: string;
        _transform: null;
        weight: number;
    })[];
    id: string;
} | {
    data: ({
        _transform: null;
        step: number;
        weight: number;
        group: number;
        max: number;
        id: string;
        bezier: null;
        min: number;
        dynamicPoolId?: undefined;
    } | {
        group: number;
        id: string;
        max: number;
        bezier: null;
        weight: number;
        step: number;
        dynamicPoolId: string;
        _transform: null;
        min: number;
    })[];
    id: string;
} | {
    data: ({
        _transform: null;
        group: number;
        weight: number;
        min: number;
        max: number;
        id: string;
        bezier: null;
        step: number;
        dynamicPoolId?: undefined;
    } | {
        group: number;
        min: number;
        bezier: null;
        step: number;
        weight: number;
        id: string;
        max: number;
        dynamicPoolId: string;
        _transform: null;
    })[];
    id: string;
} | {
    id: string;
    data: {
        _transform: null;
        step: number;
        weight: number;
        min: number;
        max: number;
        group: number;
        id: string;
        bezier: null;
    }[];
} | {
    id: string;
    data: {
        bezier: null;
        group: number;
        id: string;
        _transform: null;
        max: number;
        step: number;
        weight: number;
        min: number;
    }[];
} | {
    id: string;
    data: {
        id: string;
        max: number;
        group: number;
        weight: number;
        bezier: null;
        min: number;
        _transform: null;
        step: number;
    }[];
} | {
    data: {
        _transform: null;
        bezier: null;
        id: string;
        step: number;
        group: number;
        weight: number;
        min: number;
        max: number;
    }[];
    id: string;
} | {
    data: {
        group: number;
        max: number;
        weight: number;
        min: number;
        _transform: null;
        dynamicPoolId: string;
        step: number;
        id: string;
        bezier: null;
    }[];
    id: string;
} | {
    id: string;
    data: {
        group: number;
        bezier: null;
        min: number;
        max: number;
        id: string;
        step: number;
        _transform: null;
        dynamicPoolId: string;
        weight: number;
    }[];
} | {
    data: {
        id: string;
        max: number;
        _transform: null;
        min: number;
        step: number;
        bezier: null;
        dynamicPoolId: string;
        group: number;
        weight: number;
    }[];
    id: string;
} | {
    data: {
        weight: number;
        group: number;
        max: number;
        bezier: null;
        min: number;
        step: number;
        id: string;
        _transform: null;
        dynamicPoolId: string;
    }[];
    id: string;
} | {
    data: {
        max: number;
        weight: number;
        min: number;
        group: number;
        step: number;
        dynamicPoolId: string;
        id: string;
        _transform: null;
        bezier: null;
    }[];
    id: string;
} | {
    id: string;
    data: {
        bezier: null;
        group: number;
        min: number;
        id: string;
        _transform: null;
        max: number;
        weight: number;
        dynamicPoolId: string;
        step: number;
    }[];
} | {
    id: string;
    data: {
        group: number;
        bezier: null;
        step: number;
        _transform: null;
        id: string;
        max: number;
        min: number;
        dynamicPoolId: string;
        weight: number;
    }[];
} | {
    data: {
        group: number;
        min: number;
        weight: number;
        id: string;
        step: number;
        _transform: null;
        dynamicPoolId: string;
        bezier: null;
        max: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        group: number;
        dynamicPoolId: string;
        bezier: null;
        _transform: null;
        step: number;
        id: string;
        min: number;
        weight: number;
        max: number;
    }[];
} | {
    data: {
        id: string;
        weight: number;
        min: number;
        step: number;
        group: number;
        _transform: null;
        dynamicPoolId: string;
        bezier: null;
        max: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        dynamicPoolId: string;
        _transform: null;
        group: number;
        step: number;
        min: number;
        id: string;
        weight: number;
        bezier: null;
        max: number;
    }[];
} | {
    id: string;
    data: {
        max: number;
        bezier: null;
        weight: number;
        min: number;
        dynamicPoolId: string;
        _transform: null;
        id: string;
        group: number;
        step: number;
    }[];
} | {
    id: string;
    data: {
        _transform: null;
        group: number;
        id: string;
        min: number;
        step: number;
        bezier: null;
        max: number;
        weight: number;
        dynamicPoolId: string;
    }[];
} | {
    id: string;
    data: {
        dynamicPoolId: string;
        id: string;
        step: number;
        group: number;
        min: number;
        max: number;
        bezier: null;
        _transform: null;
        weight: number;
    }[];
} | {
    id: string;
    data: {
        max: number;
        dynamicPoolId: string;
        min: number;
        bezier: null;
        group: number;
        weight: number;
        id: string;
        step: number;
        _transform: null;
    }[];
} | {
    id: string;
    data: {
        weight: number;
        group: number;
        max: number;
        step: number;
        min: number;
        dynamicPoolId: string;
        _transform: null;
        bezier: null;
        id: string;
    }[];
} | {
    data: {
        group: number;
        bezier: null;
        min: number;
        max: number;
        dynamicPoolId: string;
        _transform: null;
        weight: number;
        id: string;
        step: number;
    }[];
    id: string;
} | {
    data: {
        min: number;
        bezier: null;
        max: number;
        weight: number;
        _transform: null;
        dynamicPoolId: string;
        step: number;
        group: number;
        id: string;
    }[];
    id: string;
} | {
    id: string;
    data: {
        group: number;
        bezier: null;
        max: number;
        _transform: null;
        dynamicPoolId: string;
        weight: number;
        step: number;
        min: number;
        id: string;
    }[];
} | {
    data: {
        bezier: null;
        max: number;
        group: number;
        id: string;
        _transform: null;
        min: number;
        dynamicPoolId: string;
        step: number;
        weight: number;
    }[];
    id: string;
} | {
    data: {
        max: number;
        weight: number;
        group: number;
        bezier: null;
        _transform: null;
        id: string;
        min: number;
        step: number;
    }[];
    id: string;
} | {
    data: {
        min: number;
        group: number;
        step: number;
        id: string;
        _transform: null;
        weight: number;
        bezier: null;
        max: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        id: string;
        max: number;
        group: number;
        bezier: null;
        step: number;
        min: number;
        weight: number;
        _transform: null;
    }[];
} | {
    id: string;
    data: {
        min: number;
        bezier: null;
        max: number;
        step: number;
        weight: number;
        _transform: null;
        group: number;
        id: string;
    }[];
} | {
    data: {
        _transform: null;
        id: string;
        step: number;
        min: number;
        bezier: null;
        weight: number;
        group: number;
        max: number;
    }[];
    id: string;
} | {
    id: string;
    data: ({
        group: number;
        id: string;
        step: number;
        weight: number;
        bezier: null;
        _transform: null;
        min: number;
        max: number;
        dynamicPoolId?: undefined;
    } | {
        group: number;
        _transform: null;
        min: number;
        weight: number;
        id: string;
        bezier: null;
        dynamicPoolId: string;
        max: number;
        step: number;
    })[];
} | {
    id: string;
    data: {
        group: number;
        weight: number;
        _transform: null;
        min: number;
        max: number;
        id: string;
        bezier: null;
        step: number;
    }[];
} | {
    data: {
        _transform: null;
        weight: number;
        step: number;
        group: number;
        id: string;
        min: number;
        max: number;
        bezier: null;
    }[];
    id: string;
} | {
    id: string;
    data: ({
        min: number;
        group: number;
        max: number;
        step: number;
        _transform: null;
        bezier: null;
        id: string;
        weight: number;
        dynamicPoolId?: undefined;
    } | {
        dynamicPoolId: string;
        _transform: null;
        max: number;
        step: number;
        bezier: null;
        min: number;
        weight: number;
        group: number;
        id: string;
    })[];
} | {
    id: string;
    data: {
        max: number;
        step: number;
        weight: number;
        _transform: null;
        min: number;
        id: string;
        bezier: null;
        group: number;
    }[];
} | {
    id: string;
    data: {
        bezier: null;
        group: number;
        _transform: null;
        weight: number;
        min: number;
        id: string;
        max: number;
        step: number;
    }[];
} | {
    id: string;
    data: ({
        weight: number;
        max: number;
        group: number;
        bezier: null;
        id: string;
        step: number;
        _transform: null;
        min: number;
        dynamicPoolId?: undefined;
    } | {
        id: string;
        bezier: null;
        step: number;
        _transform: null;
        group: number;
        dynamicPoolId: string;
        max: number;
        min: number;
        weight: number;
    })[];
} | {
    data: ({
        weight: number;
        step: number;
        max: number;
        group: number;
        bezier: null;
        id: string;
        min: number;
        _transform: null;
        dynamicPoolId?: undefined;
    } | {
        group: number;
        _transform: null;
        min: number;
        weight: number;
        step: number;
        max: number;
        bezier: null;
        id: string;
        dynamicPoolId: string;
    })[];
    id: string;
} | {
    data: ({
        group: number;
        step: number;
        weight: number;
        bezier: null;
        _transform: null;
        id: string;
        min: number;
        max: number;
        dynamicPoolId?: undefined;
    } | {
        bezier: null;
        min: number;
        dynamicPoolId: string;
        max: number;
        group: number;
        _transform: null;
        weight: number;
        id: string;
        step: number;
    })[];
    id: string;
} | {
    id: string;
    data: ({
        weight: number;
        _transform: null;
        group: number;
        min: number;
        id: string;
        bezier: null;
        max: number;
        step: number;
        dynamicPoolId?: undefined;
    } | {
        min: number;
        dynamicPoolId: string;
        group: number;
        weight: number;
        step: number;
        bezier: null;
        id: string;
        max: number;
        _transform: null;
    })[];
} | {
    id: string;
    data: ({
        max: number;
        _transform: null;
        bezier: null;
        step: number;
        id: string;
        group: number;
        weight: number;
        min: number;
        dynamicPoolId?: undefined;
    } | {
        dynamicPoolId: string;
        group: number;
        bezier: null;
        max: number;
        id: string;
        _transform: null;
        weight: number;
        step: number;
        min: number;
    })[];
} | {
    id: string;
    data: {
        min: number;
        step: number;
        bezier: null;
        id: string;
        _transform: null;
        max: number;
        weight: number;
        group: number;
    }[];
} | {
    id: string;
    data: {
        bezier: null;
        max: number;
        step: number;
        min: number;
        weight: number;
        id: string;
        group: number;
        _transform: null;
    }[];
} | {
    data: {
        weight: number;
        step: number;
        bezier: null;
        max: number;
        id: string;
        min: number;
        _transform: null;
        group: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        min: number;
        weight: number;
        _transform: null;
        bezier: null;
        step: number;
        id: string;
        max: number;
        group: number;
    }[];
} | {
    id: string;
    data: {
        step: number;
        group: number;
        id: string;
        _transform: null;
        bezier: null;
        max: number;
        min: number;
        weight: number;
    }[];
} | {
    id: string;
    data: {
        id: string;
        weight: number;
        step: number;
        _transform: null;
        group: number;
        min: number;
        bezier: null;
        max: number;
    }[];
} | {
    data: {
        step: number;
        group: number;
        _transform: null;
        min: number;
        bezier: null;
        weight: number;
        max: number;
        id: string;
    }[];
    id: string;
} | {
    id: string;
    data: {
        group: number;
        bezier: null;
        min: number;
        step: number;
        weight: number;
        id: string;
        _transform: null;
        max: number;
    }[];
} | {
    id: string;
    data: {
        step: number;
        min: number;
        weight: number;
        id: string;
        bezier: null;
        _transform: null;
        group: number;
        max: number;
    }[];
} | {
    data: {
        bezier: null;
        min: number;
        group: number;
        step: number;
        id: string;
        weight: number;
        _transform: null;
        max: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        weight: number;
        bezier: null;
        max: number;
        min: number;
        group: number;
        _transform: null;
        id: string;
        step: number;
    }[];
} | {
    id: string;
    data: {
        group: number;
        min: number;
        step: number;
        bezier: null;
        _transform: null;
        max: number;
        weight: number;
        id: string;
    }[];
} | {
    id: string;
    data: ({
        weight: number;
        bezier: null;
        step: number;
        group: number;
        _transform: null;
        id: string;
        dynamicPoolId: string;
        min: number;
        max: number;
    } | {
        max: number;
        _transform: null;
        step: number;
        min: number;
        weight: number;
        group: number;
        bezier: null;
        id: string;
        dynamicPoolId?: undefined;
    })[];
} | {
    data: ({
        _transform: null;
        min: number;
        group: number;
        bezier: null;
        step: number;
        id: string;
        max: number;
        dynamicPoolId: string;
        weight: number;
    } | {
        max: number;
        id: string;
        bezier: null;
        min: number;
        group: number;
        weight: number;
        _transform: null;
        step: number;
        dynamicPoolId?: undefined;
    })[];
    id: string;
} | {
    id: string;
    data: ({
        weight: number;
        min: number;
        id: string;
        _transform: null;
        step: number;
        bezier: null;
        group: number;
        dynamicPoolId: string;
        max: number;
    } | {
        max: number;
        min: number;
        weight: number;
        group: number;
        _transform: null;
        id: string;
        step: number;
        bezier: null;
        dynamicPoolId?: undefined;
    })[];
} | {
    data: {
        group: number;
        step: number;
        max: number;
        bezier: null;
        weight: number;
        id: string;
        _transform: null;
        min: number;
        dynamicPoolId: string;
    }[];
    id: string;
} | {
    id: string;
    data: ({
        bezier: null;
        dynamicPoolId: string;
        _transform: null;
        weight: number;
        min: number;
        step: number;
        group: number;
        id: string;
        max: number;
    } | {
        id: string;
        max: number;
        bezier: null;
        min: number;
        step: number;
        group: number;
        _transform: null;
        weight: number;
        dynamicPoolId?: undefined;
    })[];
} | {
    id: string;
    data: ({
        min: number;
        step: number;
        group: number;
        id: string;
        max: number;
        _transform: null;
        dynamicPoolId: string;
        bezier: null;
        weight: number;
    } | {
        min: number;
        max: number;
        step: number;
        id: string;
        bezier: null;
        group: number;
        _transform: null;
        weight: number;
        dynamicPoolId?: undefined;
    })[];
} | {
    id: string;
    data: ({
        max: number;
        step: number;
        group: number;
        min: number;
        _transform: null;
        dynamicPoolId: string;
        bezier: null;
        id: string;
        weight: number;
    } | {
        min: number;
        step: number;
        _transform: null;
        max: number;
        bezier: null;
        weight: number;
        group: number;
        id: string;
        dynamicPoolId?: undefined;
    })[];
} | {
    data: {
        group: number;
        bezier: null;
        step: number;
        _transform: null;
        min: number;
        weight: number;
        id: string;
        max: number;
        dynamicPoolId: string;
    }[];
    id: string;
} | {
    data: {
        group: number;
        weight: number;
        bezier: null;
        _transform: null;
        max: number;
        min: number;
        step: number;
        id: string;
    }[];
    id: string;
} | {
    data: {
        max: number;
        min: number;
        group: number;
        step: number;
        weight: number;
        id: string;
        bezier: null;
        _transform: null;
    }[];
    id: string;
} | {
    data: {
        step: number;
        group: number;
        max: number;
        _transform: null;
        bezier: null;
        min: number;
        id: string;
        weight: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        min: number;
        group: number;
        weight: number;
        max: number;
        step: number;
        id: string;
        _transform: null;
        bezier: null;
    }[];
} | {
    data: {
        bezier: null;
        min: number;
        group: number;
        dynamicPoolId: string;
        max: number;
        step: number;
        id: string;
        _transform: null;
        weight: number;
    }[];
    id: string;
} | {
    data: {
        group: number;
        bezier: null;
        _transform: null;
        max: number;
        dynamicPoolId: string;
        id: string;
        min: number;
        weight: number;
        step: number;
    }[];
    id: string;
} | {
    data: {
        dynamicPoolId: string;
        min: number;
        id: string;
        step: number;
        max: number;
        _transform: null;
        group: number;
        bezier: null;
        weight: number;
    }[];
    id: string;
} | {
    data: {
        dynamicPoolId: string;
        bezier: null;
        step: number;
        weight: number;
        min: number;
        group: number;
        id: string;
        _transform: null;
        max: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        dynamicPoolId: string;
        step: number;
        group: number;
        min: number;
        _transform: null;
        max: number;
        bezier: null;
        id: string;
        weight: number;
    }[];
} | {
    data: {
        bezier: null;
        dynamicPoolId: string;
        min: number;
        id: string;
        step: number;
        group: number;
        _transform: null;
        weight: number;
        max: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        group: number;
        step: number;
        dynamicPoolId: string;
        weight: number;
        min: number;
        bezier: null;
        id: string;
        _transform: null;
        max: number;
    }[];
} | {
    id: string;
    data: {
        max: number;
        weight: number;
        id: string;
        dynamicPoolId: string;
        min: number;
        group: number;
        step: number;
        _transform: null;
        bezier: null;
    }[];
} | {
    id: string;
    data: {
        _transform: null;
        id: string;
        weight: number;
        min: number;
        group: number;
        step: number;
        max: number;
        dynamicPoolId: string;
        bezier: null;
    }[];
} | {
    id: string;
    data: {
        max: number;
        group: number;
        min: number;
        bezier: null;
        weight: number;
        step: number;
        dynamicPoolId: string;
        id: string;
        _transform: null;
    }[];
} | {
    data: {
        weight: number;
        step: number;
        bezier: null;
        dynamicPoolId: string;
        _transform: null;
        max: number;
        id: string;
        min: number;
        group: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        step: number;
        dynamicPoolId: string;
        max: number;
        min: number;
        _transform: null;
        bezier: null;
        id: string;
        weight: number;
        group: number;
    }[];
} | {
    id: string;
    data: {
        bezier: null;
        id: string;
        step: number;
        min: number;
        weight: number;
        dynamicPoolId: string;
        _transform: null;
        group: number;
        max: number;
    }[];
} | {
    data: {
        _transform: null;
        min: number;
        group: number;
        step: number;
        id: string;
        bezier: null;
        weight: number;
        dynamicPoolId: string;
        max: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        id: string;
        max: number;
        _transform: null;
        dynamicPoolId: string;
        bezier: null;
        group: number;
        weight: number;
        min: number;
        step: number;
    }[];
} | {
    data: {
        max: number;
        min: number;
        bezier: null;
        dynamicPoolId: string;
        step: number;
        group: number;
        _transform: null;
        id: string;
        weight: number;
    }[];
    id: string;
} | {
    data: {
        group: number;
        id: string;
        max: number;
        dynamicPoolId: string;
        _transform: null;
        min: number;
        weight: number;
        bezier: null;
        step: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        id: string;
        _transform: null;
        max: number;
        group: number;
        min: number;
        bezier: null;
        step: number;
        dynamicPoolId: string;
        weight: number;
    }[];
} | {
    id: string;
    data: {
        _transform: null;
        max: number;
        id: string;
        min: number;
        dynamicPoolId: string;
        step: number;
        group: number;
        bezier: null;
        weight: number;
    }[];
} | {
    data: {
        dynamicPoolId: string;
        weight: number;
        _transform: null;
        id: string;
        min: number;
        bezier: null;
        step: number;
        max: number;
        group: number;
    }[];
    id: string;
} | {
    data: {
        step: number;
        min: number;
        weight: number;
        max: number;
        bezier: null;
        id: string;
        _transform: null;
        group: number;
        dynamicPoolId: string;
    }[];
    id: string;
} | {
    data: {
        dynamicPoolId: string;
        group: number;
        min: number;
        bezier: null;
        id: string;
        _transform: null;
        max: number;
        step: number;
        weight: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        min: number;
        _transform: null;
        weight: number;
        step: number;
        bezier: null;
        id: string;
        group: number;
        dynamicPoolId: string;
        max: number;
    }[];
} | {
    id: string;
    data: {
        bezier: null;
        dynamicPoolId: string;
        group: number;
        min: number;
        _transform: null;
        id: string;
        step: number;
        max: number;
        weight: number;
    }[];
} | {
    id: string;
    data: {
        min: number;
        weight: number;
        step: number;
        id: string;
        _transform: null;
        dynamicPoolId: string;
        group: number;
        bezier: null;
        max: number;
    }[];
} | {
    id: string;
    data: {
        id: string;
        min: number;
        dynamicPoolId: string;
        _transform: null;
        weight: number;
        max: number;
        group: number;
        bezier: null;
        step: number;
    }[];
} | {
    data: {
        min: number;
        dynamicPoolId: string;
        id: string;
        _transform: null;
        step: number;
        max: number;
        group: number;
        weight: number;
        bezier: null;
    }[];
    id: string;
} | {
    data: {
        id: string;
        _transform: null;
        bezier: null;
        max: number;
        step: number;
        dynamicPoolId: string;
        group: number;
        weight: number;
        min: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        step: number;
        bezier: null;
        dynamicPoolId: string;
        min: number;
        weight: number;
        max: number;
        id: string;
        group: number;
        _transform: null;
    }[];
} | {
    data: {
        step: number;
        group: number;
        dynamicPoolId: string;
        _transform: null;
        id: string;
        max: number;
        bezier: null;
        min: number;
        weight: number;
    }[];
    id: string;
} | {
    data: {
        weight: number;
        min: number;
        max: number;
        step: number;
        id: string;
        bezier: null;
        _transform: null;
        dynamicPoolId: string;
        group: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        bezier: null;
        _transform: null;
        weight: number;
        group: number;
        min: number;
        max: number;
        dynamicPoolId: string;
        id: string;
        step: number;
    }[];
} | {
    data: {
        dynamicPoolId: string;
        _transform: null;
        weight: number;
        max: number;
        group: number;
        id: string;
        min: number;
        bezier: null;
        step: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        step: number;
        group: number;
        min: number;
        _transform: null;
        bezier: null;
        dynamicPoolId: string;
        max: number;
        weight: number;
        id: string;
    }[];
} | {
    id: string;
    data: {
        id: string;
        dynamicPoolId: string;
        bezier: null;
        weight: number;
        min: number;
        step: number;
        group: number;
        max: number;
        _transform: null;
    }[];
} | {
    data: {
        bezier: null;
        step: number;
        _transform: null;
        weight: number;
        id: string;
        min: number;
        max: number;
        group: number;
        dynamicPoolId: string;
    }[];
    id: string;
} | {
    id: string;
    data: {
        max: number;
        id: string;
        _transform: null;
        step: number;
        group: number;
        dynamicPoolId: string;
        bezier: null;
        min: number;
        weight: number;
    }[];
} | {
    id: string;
    data: {
        step: number;
        max: number;
        id: string;
        dynamicPoolId: string;
        _transform: null;
        min: number;
        weight: number;
        bezier: null;
        group: number;
    }[];
} | {
    data: {
        weight: number;
        step: number;
        dynamicPoolId: string;
        max: number;
        _transform: null;
        min: number;
        group: number;
        bezier: null;
        id: string;
    }[];
    id: string;
} | {
    id: string;
    data: {
        max: number;
        weight: number;
        group: number;
        dynamicPoolId: string;
        min: number;
        step: number;
        id: string;
        _transform: null;
        bezier: null;
    }[];
} | {
    id: string;
    data: {
        _transform: null;
        id: string;
        max: number;
        step: number;
        bezier: null;
        min: number;
        weight: number;
        group: number;
    }[];
} | {
    id: string;
    data: {
        bezier: null;
        min: number;
        group: number;
        id: string;
        max: number;
        _transform: null;
        step: number;
        weight: number;
    }[];
} | {
    id: string;
    data: {
        weight: number;
        min: number;
        max: number;
        group: number;
        step: number;
        id: string;
        _transform: null;
        bezier: null;
    }[];
} | {
    data: {
        group: number;
        weight: number;
        id: string;
        _transform: null;
        max: number;
        step: number;
        bezier: null;
        min: number;
    }[];
    id: string;
} | {
    data: {
        group: number;
        id: string;
        _transform: null;
        weight: number;
        step: number;
        bezier: null;
        max: number;
        min: number;
    }[];
    id: string;
} | {
    data: {
        max: number;
        id: string;
        group: number;
        min: number;
        step: number;
        _transform: null;
        weight: number;
        bezier: null;
    }[];
    id: string;
} | {
    data: {
        id: string;
        max: number;
        weight: number;
        step: number;
        bezier: null;
        _transform: null;
        group: number;
        min: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        id: string;
        _transform: null;
        min: number;
        weight: number;
        max: number;
        group: number;
        step: number;
        bezier: null;
    }[];
} | {
    id: string;
    data: {
        _transform: null;
        weight: number;
        id: string;
        min: number;
        group: number;
        max: number;
        bezier: null;
        step: number;
    }[];
} | {
    data: {
        _transform: null;
        min: number;
        weight: number;
        max: number;
        id: string;
        step: number;
        bezier: null;
        group: number;
    }[];
    id: string;
} | {
    data: ({
        step: number;
        max: number;
        min: number;
        id: string;
        weight: number;
        _transform: null;
        group: number;
        bezier: null;
        dynamicPoolId?: undefined;
    } | {
        _transform: null;
        id: string;
        max: number;
        step: number;
        dynamicPoolId: string;
        bezier: null;
        weight: number;
        min: number;
        group: number;
    })[];
    id: string;
} | {
    data: {
        bezier: null;
        _transform: null;
        weight: number;
        min: number;
        id: string;
        max: number;
        group: number;
        step: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        id: string;
        weight: number;
        step: number;
        min: number;
        max: number;
        group: number;
        bezier: null;
        _transform: null;
    }[];
} | {
    data: ({
        group: number;
        _transform: null;
        min: number;
        step: number;
        max: number;
        bezier: null;
        id: string;
        weight: number;
        dynamicPoolId?: undefined;
    } | {
        step: number;
        group: number;
        id: string;
        max: number;
        _transform: null;
        dynamicPoolId: string;
        min: number;
        weight: number;
        bezier: null;
    })[];
    id: string;
} | {
    id: string;
    data: {
        step: number;
        group: number;
        max: number;
        _transform: null;
        bezier: null;
        id: string;
        min: number;
        weight: number;
    }[];
} | {
    id: string;
    data: {
        id: string;
        group: number;
        bezier: null;
        min: number;
        step: number;
        weight: number;
        max: number;
        _transform: null;
    }[];
} | {
    data: ({
        weight: number;
        id: string;
        step: number;
        group: number;
        _transform: null;
        min: number;
        bezier: null;
        max: number;
        dynamicPoolId?: undefined;
    } | {
        id: string;
        _transform: null;
        weight: number;
        step: number;
        bezier: null;
        dynamicPoolId: string;
        max: number;
        min: number;
        group: number;
    })[];
    id: string;
} | {
    id: string;
    data: ({
        group: number;
        weight: number;
        step: number;
        bezier: null;
        id: string;
        min: number;
        _transform: null;
        max: number;
        dynamicPoolId?: undefined;
    } | {
        step: number;
        dynamicPoolId: string;
        min: number;
        id: string;
        weight: number;
        _transform: null;
        max: number;
        group: number;
        bezier: null;
    })[];
} | {
    data: ({
        min: number;
        step: number;
        _transform: null;
        group: number;
        bezier: null;
        id: string;
        max: number;
        weight: number;
        dynamicPoolId?: undefined;
    } | {
        _transform: null;
        group: number;
        dynamicPoolId: string;
        id: string;
        max: number;
        bezier: null;
        min: number;
        weight: number;
        step: number;
    })[];
    id: string;
} | {
    data: ({
        min: number;
        id: string;
        _transform: null;
        weight: number;
        bezier: null;
        max: number;
        step: number;
        group: number;
        dynamicPoolId?: undefined;
    } | {
        _transform: null;
        step: number;
        id: string;
        group: number;
        bezier: null;
        min: number;
        weight: number;
        dynamicPoolId: string;
        max: number;
    })[];
    id: string;
} | {
    id: string;
    data: ({
        group: number;
        _transform: null;
        id: string;
        min: number;
        bezier: null;
        weight: number;
        max: number;
        step: number;
        dynamicPoolId?: undefined;
    } | {
        max: number;
        weight: number;
        group: number;
        id: string;
        step: number;
        bezier: null;
        min: number;
        dynamicPoolId: string;
        _transform: null;
    })[];
} | {
    id: string;
    data: {
        bezier: null;
        max: number;
        group: number;
        weight: number;
        id: string;
        min: number;
        step: number;
        _transform: null;
    }[];
} | {
    data: {
        group: number;
        id: string;
        step: number;
        max: number;
        weight: number;
        min: number;
        _transform: null;
        bezier: null;
    }[];
    id: string;
} | {
    data: {
        weight: number;
        step: number;
        group: number;
        id: string;
        max: number;
        bezier: null;
        min: number;
        _transform: null;
    }[];
    id: string;
} | {
    id: string;
    data: {
        id: string;
        bezier: null;
        step: number;
        group: number;
        min: number;
        max: number;
        weight: number;
        _transform: null;
    }[];
} | {
    id: string;
    data: {
        _transform: null;
        id: string;
        min: number;
        max: number;
        group: number;
        weight: number;
        bezier: null;
        step: number;
    }[];
} | {
    id: string;
    data: {
        bezier: null;
        _transform: null;
        min: number;
        id: string;
        max: number;
        group: number;
        step: number;
        weight: number;
    }[];
} | {
    id: string;
    data: {
        bezier: null;
        group: number;
        weight: number;
        max: number;
        _transform: null;
        step: number;
        min: number;
        id: string;
    }[];
} | {
    data: ({
        min: number;
        max: number;
        bezier: null;
        step: number;
        dynamicPoolId: string;
        _transform: null;
        group: number;
        id: string;
        weight: number;
    } | {
        weight: number;
        step: number;
        bezier: null;
        max: number;
        min: number;
        group: number;
        id: string;
        _transform: null;
        dynamicPoolId?: undefined;
    })[];
    id: string;
} | {
    data: ({
        _transform: null;
        bezier: null;
        group: number;
        max: number;
        id: string;
        min: number;
        weight: number;
        step: number;
        dynamicPoolId?: undefined;
    } | {
        group: number;
        dynamicPoolId: string;
        _transform: null;
        min: number;
        weight: number;
        step: number;
        id: string;
        max: number;
        bezier: null;
    })[];
    id: string;
} | {
    id: string;
    data: {
        bezier: null;
        step: number;
        weight: number;
        max: number;
        _transform: null;
        min: number;
        group: number;
        id: string;
    }[];
} | {
    data: ({
        step: number;
        id: string;
        group: number;
        _transform: null;
        bezier: null;
        weight: number;
        min: number;
        max: number;
        dynamicPoolId?: undefined;
    } | {
        group: number;
        min: number;
        dynamicPoolId: string;
        id: string;
        bezier: null;
        _transform: null;
        max: number;
        step: number;
        weight: number;
    })[];
    id: string;
} | {
    data: ({
        _transform: null;
        min: number;
        step: number;
        max: number;
        group: number;
        id: string;
        bezier: null;
        weight: number;
        dynamicPoolId?: undefined;
    } | {
        max: number;
        bezier: null;
        _transform: null;
        step: number;
        group: number;
        dynamicPoolId: string;
        min: number;
        weight: number;
        id: string;
    })[];
    id: string;
} | {
    id: string;
    data: ({
        max: number;
        _transform: null;
        step: number;
        group: number;
        id: string;
        min: number;
        weight: number;
        bezier: null;
        dynamicPoolId?: undefined;
    } | {
        _transform: null;
        group: number;
        max: number;
        step: number;
        bezier: null;
        weight: number;
        min: number;
        dynamicPoolId: string;
        id: string;
    })[];
} | {
    id: string;
    data: ({
        step: number;
        dynamicPoolId: string;
        bezier: null;
        group: number;
        min: number;
        max: number;
        weight: number;
        _transform: null;
        id: string;
    } | {
        bezier: null;
        step: number;
        _transform: null;
        min: number;
        weight: number;
        max: number;
        group: number;
        id: string;
        dynamicPoolId?: undefined;
    })[];
} | {
    data: ({
        min: number;
        step: number;
        dynamicPoolId: string;
        _transform: null;
        bezier: null;
        group: number;
        id: string;
        max: number;
        weight: number;
    } | {
        bezier: null;
        id: string;
        max: number;
        group: number;
        min: number;
        step: number;
        _transform: null;
        weight: number;
        dynamicPoolId?: undefined;
    })[];
    id: string;
} | {
    data: ({
        weight: number;
        id: string;
        group: number;
        step: number;
        max: number;
        bezier: null;
        _transform: null;
        min: number;
        dynamicPoolId: string;
    } | {
        step: number;
        _transform: null;
        bezier: null;
        max: number;
        min: number;
        group: number;
        weight: number;
        id: string;
        dynamicPoolId?: undefined;
    })[];
    id: string;
} | {
    data: ({
        dynamicPoolId: string;
        bezier: null;
        id: string;
        max: number;
        _transform: null;
        min: number;
        group: number;
        step: number;
        weight: number;
    } | {
        min: number;
        _transform: null;
        max: number;
        group: number;
        weight: number;
        step: number;
        id: string;
        bezier: null;
        dynamicPoolId?: undefined;
    })[];
    id: string;
} | {
    id: string;
    data: ({
        _transform: null;
        weight: number;
        bezier: null;
        max: number;
        step: number;
        min: number;
        group: number;
        dynamicPoolId: string;
        id: string;
    } | {
        group: number;
        min: number;
        max: number;
        bezier: null;
        _transform: null;
        step: number;
        weight: number;
        id: string;
        dynamicPoolId?: undefined;
    })[];
} | {
    id: string;
    data: ({
        id: string;
        weight: number;
        min: number;
        group: number;
        _transform: null;
        step: number;
        dynamicPoolId: string;
        max: number;
        bezier: null;
    } | {
        group: number;
        weight: number;
        id: string;
        min: number;
        _transform: null;
        max: number;
        step: number;
        bezier: null;
        dynamicPoolId?: undefined;
    })[];
} | {
    data: {
        min: number;
        group: number;
        bezier: null;
        _transform: null;
        max: number;
        weight: number;
        step: number;
        id: string;
    }[];
    id: string;
} | {
    data: {
        min: number;
        bezier: null;
        max: number;
        step: number;
        id: string;
        weight: number;
        group: number;
        dynamicPoolId: string;
        _transform: null;
    }[];
    id: string;
} | {
    id: string;
    data: {
        dynamicPoolId: string;
        step: number;
        id: string;
        weight: number;
        bezier: null;
        group: number;
        _transform: null;
        min: number;
        max: number;
    }[];
} | {
    id: string;
    data: {
        _transform: null;
        id: string;
        max: number;
        dynamicPoolId: string;
        min: number;
        group: number;
        weight: number;
        bezier: null;
        step: number;
    }[];
} | {
    data: {
        weight: number;
        id: string;
        bezier: null;
        step: number;
        group: number;
        max: number;
        min: number;
        dynamicPoolId: string;
        _transform: null;
    }[];
    id: string;
} | {
    id: string;
    data: {
        group: number;
        weight: number;
        min: number;
        step: number;
        dynamicPoolId: string;
        _transform: null;
        bezier: null;
        id: string;
        max: number;
    }[];
} | {
    data: {
        id: string;
        max: number;
        dynamicPoolId: string;
        bezier: null;
        min: number;
        _transform: null;
        group: number;
        weight: number;
        step: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        id: string;
        bezier: null;
        max: number;
        group: number;
        weight: number;
        step: number;
        _transform: null;
        min: number;
        dynamicPoolId: string;
    }[];
} | {
    id: string;
    data: {
        step: number;
        min: number;
        weight: number;
        id: string;
        dynamicPoolId: string;
        _transform: null;
        max: number;
        group: number;
        bezier: null;
    }[];
} | {
    data: {
        bezier: null;
        group: number;
        dynamicPoolId: string;
        id: string;
        min: number;
        max: number;
        weight: number;
        _transform: null;
        step: number;
    }[];
    id: string;
} | {
    data: {
        dynamicPoolId: string;
        min: number;
        bezier: null;
        step: number;
        id: string;
        _transform: null;
        group: number;
        max: number;
        weight: number;
    }[];
    id: string;
} | {
    data: {
        id: string;
        weight: number;
        _transform: null;
        min: number;
        step: number;
        group: number;
        dynamicPoolId: string;
        bezier: null;
        max: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        _transform: null;
        id: string;
        dynamicPoolId: string;
        weight: number;
        max: number;
        min: number;
        step: number;
        group: number;
        bezier: null;
    }[];
} | {
    id: string;
    data: {
        group: number;
        bezier: null;
        weight: number;
        dynamicPoolId: string;
        _transform: null;
        max: number;
        id: string;
        min: number;
        step: number;
    }[];
} | {
    id: string;
    data: {
        group: number;
        id: string;
        dynamicPoolId: string;
        step: number;
        bezier: null;
        weight: number;
        min: number;
        _transform: null;
        max: number;
    }[];
} | {
    data: {
        dynamicPoolId: string;
        _transform: null;
        weight: number;
        step: number;
        bezier: null;
        max: number;
        min: number;
        group: number;
        id: string;
    }[];
    id: string;
} | {
    data: {
        weight: number;
        step: number;
        min: number;
        group: number;
        _transform: null;
        bezier: null;
        max: number;
        dynamicPoolId: string;
        id: string;
    }[];
    id: string;
} | {
    id: string;
    data: {
        group: number;
        dynamicPoolId: string;
        id: string;
        min: number;
        weight: number;
        _transform: null;
        max: number;
        step: number;
        bezier: null;
    }[];
} | {
    data: {
        group: number;
        max: number;
        bezier: null;
        id: string;
        _transform: null;
        weight: number;
        step: number;
        dynamicPoolId: string;
        min: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        weight: number;
        id: string;
        min: number;
        bezier: null;
        step: number;
        dynamicPoolId: string;
        _transform: null;
        group: number;
        max: number;
    }[];
} | {
    id: string;
    data: {
        dynamicPoolId: string;
        bezier: null;
        group: number;
        _transform: null;
        min: number;
        id: string;
        max: number;
        step: number;
        weight: number;
    }[];
} | {
    id: string;
    data: {
        max: number;
        min: number;
        step: number;
        _transform: null;
        group: number;
        id: string;
        weight: number;
        dynamicPoolId: string;
        bezier: null;
    }[];
} | {
    id: string;
    data: {
        dynamicPoolId: string;
        _transform: null;
        min: number;
        bezier: null;
        group: number;
        max: number;
        weight: number;
        id: string;
        step: number;
    }[];
} | {
    id: string;
    data: {
        bezier: null;
        _transform: null;
        group: number;
        max: number;
        weight: number;
        step: number;
        min: number;
        id: string;
        dynamicPoolId: string;
    }[];
} | {
    id: string;
    data: {
        group: number;
        weight: number;
        dynamicPoolId: string;
        step: number;
        bezier: null;
        id: string;
        _transform: null;
        max: number;
        min: number;
    }[];
} | {
    id: string;
    data: {
        weight: number;
        step: number;
        bezier: null;
        _transform: null;
        id: string;
        min: number;
        group: number;
        dynamicPoolId: string;
        max: number;
    }[];
} | {
    id: string;
    data: {
        max: number;
        bezier: null;
        _transform: null;
        min: number;
        dynamicPoolId: string;
        group: number;
        weight: number;
        id: string;
        step: number;
    }[];
} | {
    id: string;
    data: {
        min: number;
        dynamicPoolId: string;
        group: number;
        id: string;
        _transform: null;
        step: number;
        max: number;
        bezier: null;
        weight: number;
    }[];
} | {
    data: {
        _transform: null;
        weight: number;
        max: number;
        group: number;
        min: number;
        dynamicPoolId: string;
        id: string;
        step: number;
        bezier: null;
    }[];
    id: string;
} | {
    id: string;
    data: {
        min: number;
        weight: number;
        group: number;
        bezier: null;
        id: string;
        dynamicPoolId: string;
        _transform: null;
        step: number;
        max: number;
    }[];
} | {
    id: string;
    data: {
        dynamicPoolId: string;
        id: string;
        group: number;
        min: number;
        bezier: null;
        _transform: null;
        weight: number;
        max: number;
        step: number;
    }[];
} | {
    id: string;
    data: {
        dynamicPoolId: string;
        step: number;
        min: number;
        weight: number;
        bezier: null;
        max: number;
        id: string;
        _transform: null;
        group: number;
    }[];
} | {
    data: {
        _transform: null;
        weight: number;
        bezier: null;
        step: number;
        dynamicPoolId: string;
        group: number;
        min: number;
        max: number;
        id: string;
    }[];
    id: string;
} | {
    id: string;
    data: {
        _transform: null;
        step: number;
        group: number;
        weight: number;
        dynamicPoolId: string;
        bezier: null;
        id: string;
        max: number;
        min: number;
    }[];
} | {
    id: string;
    data: {
        id: string;
        dynamicPoolId: string;
        bezier: null;
        weight: number;
        group: number;
        step: number;
        _transform: null;
        max: number;
        min: number;
    }[];
} | {
    id: string;
    data: {
        step: number;
        id: string;
        dynamicPoolId: string;
        _transform: null;
        bezier: null;
        max: number;
        group: number;
        min: number;
        weight: number;
    }[];
} | {
    data: {
        group: number;
        max: number;
        weight: number;
        bezier: null;
        _transform: null;
        id: string;
        dynamicPoolId: string;
        step: number;
        min: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        _transform: null;
        dynamicPoolId: string;
        bezier: null;
        group: number;
        min: number;
        max: number;
        weight: number;
        step: number;
        id: string;
    }[];
} | {
    data: {
        step: number;
        min: number;
        max: number;
        group: number;
        id: string;
        _transform: null;
        bezier: null;
        dynamicPoolId: string;
        weight: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        _transform: null;
        step: number;
        max: number;
        id: string;
        weight: number;
        dynamicPoolId: string;
        bezier: null;
        min: number;
        group: number;
    }[];
} | {
    data: {
        group: number;
        id: string;
        min: number;
        weight: number;
        bezier: null;
        _transform: null;
        step: number;
        dynamicPoolId: string;
        max: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        id: string;
        max: number;
        bezier: null;
        _transform: null;
        dynamicPoolId: string;
        weight: number;
        group: number;
        step: number;
        min: number;
    }[];
} | {
    id: string;
    data: {
        step: number;
        group: number;
        dynamicPoolId: string;
        id: string;
        max: number;
        _transform: null;
        min: number;
        bezier: null;
        weight: number;
    }[];
} | {
    id: string;
    data: {
        _transform: null;
        min: number;
        max: number;
        bezier: null;
        dynamicPoolId: string;
        id: string;
        step: number;
        weight: number;
        group: number;
    }[];
} | {
    id: string;
    data: {
        group: number;
        id: string;
        weight: number;
        step: number;
        dynamicPoolId: string;
        max: number;
        bezier: null;
        min: number;
        _transform: null;
    }[];
} | {
    id: string;
    data: {
        step: number;
        _transform: null;
        max: number;
        id: string;
        dynamicPoolId: string;
        bezier: null;
        weight: number;
        min: number;
        group: number;
    }[];
} | {
    data: {
        group: number;
        id: string;
        weight: number;
        dynamicPoolId: string;
        bezier: null;
        _transform: null;
        max: number;
        step: number;
        min: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        id: string;
        max: number;
        bezier: null;
        min: number;
        dynamicPoolId: string;
        _transform: null;
        weight: number;
        group: number;
        step: number;
    }[];
} | {
    data: {
        dynamicPoolId: string;
        id: string;
        step: number;
        _transform: null;
        weight: number;
        group: number;
        max: number;
        bezier: null;
        min: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        dynamicPoolId: string;
        group: number;
        id: string;
        max: number;
        step: number;
        bezier: null;
        _transform: null;
        min: number;
        weight: number;
    }[];
} | {
    id: string;
    data: {
        _transform: null;
        weight: number;
        id: string;
        dynamicPoolId: string;
        max: number;
        bezier: null;
        min: number;
        step: number;
        group: number;
    }[];
} | {
    id: string;
    data: {
        group: number;
        bezier: null;
        max: number;
        id: string;
        _transform: null;
        weight: number;
        step: number;
        min: number;
        dynamicPoolId: string;
    }[];
} | {
    data: {
        dynamicPoolId: string;
        group: number;
        id: string;
        step: number;
        min: number;
        bezier: null;
        weight: number;
        _transform: null;
        max: number;
    }[];
    id: string;
} | {
    data: {
        step: number;
        bezier: null;
        group: number;
        _transform: null;
        min: number;
        id: string;
        max: number;
        dynamicPoolId: string;
        weight: number;
    }[];
    id: string;
} | {
    data: {
        weight: number;
        id: string;
        bezier: null;
        dynamicPoolId: string;
        group: number;
        max: number;
        _transform: null;
        min: number;
        step: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        max: number;
        group: number;
        weight: number;
        min: number;
        id: string;
        dynamicPoolId: string;
        step: number;
        _transform: null;
        bezier: null;
    }[];
} | {
    data: {
        weight: number;
        bezier: null;
        id: string;
        min: number;
        max: number;
        step: number;
        group: number;
        _transform: null;
        dynamicPoolId: string;
    }[];
    id: string;
} | {
    data: {
        group: number;
        bezier: null;
        dynamicPoolId: string;
        id: string;
        min: number;
        _transform: null;
        step: number;
        weight: number;
        max: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        min: number;
        max: number;
        id: string;
        dynamicPoolId: string;
        _transform: null;
        group: number;
        step: number;
        weight: number;
        bezier: null;
    }[];
} | {
    id: string;
    data: {
        bezier: null;
        _transform: null;
        min: number;
        max: number;
        group: number;
        id: string;
        dynamicPoolId: string;
        weight: number;
        step: number;
    }[];
} | {
    id: string;
    data: {
        _transform: null;
        weight: number;
        group: number;
        max: number;
        bezier: null;
        min: number;
        id: string;
        step: number;
        dynamicPoolId: string;
    }[];
} | {
    id: string;
    data: {
        bezier: null;
        min: number;
        _transform: null;
        weight: number;
        group: number;
        id: string;
        step: number;
        max: number;
    }[];
} | {
    id: string;
    data: {
        step: number;
        bezier: null;
        group: number;
        min: number;
        _transform: null;
        id: string;
        max: number;
        weight: number;
    }[];
} | {
    id: string;
    data: ({
        group: number;
        step: number;
        id: string;
        max: number;
        _transform: null;
        weight: number;
        min: number;
        bezier: null;
        dynamicPoolId?: undefined;
    } | {
        id: string;
        max: number;
        min: number;
        weight: number;
        dynamicPoolId: string;
        group: number;
        bezier: null;
        step: number;
        _transform: null;
    })[];
} | {
    id: string;
    data: ({
        _transform: null;
        id: string;
        min: number;
        bezier: null;
        max: number;
        step: number;
        group: number;
        weight: number;
        dynamicPoolId?: undefined;
    } | {
        group: number;
        step: number;
        max: number;
        weight: number;
        bezier: null;
        dynamicPoolId: string;
        id: string;
        min: number;
        _transform: null;
    })[];
} | {
    id: string;
    data: {
        min: number;
        bezier: null;
        group: number;
        id: string;
        weight: number;
        step: number;
        _transform: null;
        max: number;
    }[];
} | {
    id: string;
    data: ({
        id: string;
        max: number;
        group: number;
        min: number;
        bezier: null;
        step: number;
        weight: number;
        _transform: null;
        dynamicPoolId?: undefined;
    } | {
        step: number;
        bezier: null;
        dynamicPoolId: string;
        group: number;
        max: number;
        weight: number;
        min: number;
        id: string;
        _transform: null;
    })[];
} | {
    data: ({
        _transform: null;
        step: number;
        bezier: null;
        id: string;
        max: number;
        weight: number;
        group: number;
        min: number;
        dynamicPoolId?: undefined;
    } | {
        _transform: null;
        max: number;
        min: number;
        id: string;
        weight: number;
        dynamicPoolId: string;
        group: number;
        bezier: null;
        step: number;
    })[];
    id: string;
} | {
    id: string;
    data: ({
        group: number;
        weight: number;
        min: number;
        step: number;
        max: number;
        bezier: null;
        id: string;
        _transform: null;
        dynamicPoolId?: undefined;
    } | {
        min: number;
        bezier: null;
        id: string;
        step: number;
        weight: number;
        group: number;
        dynamicPoolId: string;
        max: number;
        _transform: null;
    })[];
} | {
    id: string;
    data: {
        weight: number;
        max: number;
        id: string;
        group: number;
        dynamicPoolId: string;
        _transform: null;
        min: number;
        step: number;
        bezier: null;
    }[];
} | {
    data: {
        step: number;
        bezier: null;
        dynamicPoolId: string;
        id: string;
        min: number;
        _transform: null;
        weight: number;
        group: number;
        max: number;
    }[];
    id: string;
} | {
    data: {
        group: number;
        step: number;
        min: number;
        bezier: null;
        dynamicPoolId: string;
        weight: number;
        id: string;
        max: number;
        _transform: null;
    }[];
    id: string;
} | {
    id: string;
    data: {
        step: number;
        max: number;
        group: number;
        bezier: null;
        id: string;
        _transform: null;
        weight: number;
        min: number;
        dynamicPoolId: string;
    }[];
} | {
    data: {
        id: string;
        dynamicPoolId: string;
        max: number;
        weight: number;
        step: number;
        group: number;
        bezier: null;
        min: number;
        _transform: null;
    }[];
    id: string;
} | {
    data: {
        weight: number;
        step: number;
        max: number;
        dynamicPoolId: string;
        min: number;
        group: number;
        bezier: null;
        _transform: null;
        id: string;
    }[];
    id: string;
} | {
    data: {
        min: number;
        _transform: null;
        dynamicPoolId: string;
        max: number;
        id: string;
        bezier: null;
        weight: number;
        group: number;
        step: number;
    }[];
    id: string;
} | {
    data: {
        dynamicPoolId: string;
        _transform: null;
        id: string;
        max: number;
        group: number;
        weight: number;
        min: number;
        step: number;
        bezier: null;
    }[];
    id: string;
} | {
    data: {
        step: number;
        _transform: null;
        min: number;
        dynamicPoolId: string;
        group: number;
        max: number;
        id: string;
        weight: number;
        bezier: null;
    }[];
    id: string;
} | {
    data: {
        weight: number;
        bezier: null;
        max: number;
        min: number;
        id: string;
        _transform: null;
        step: number;
        dynamicPoolId: string;
        group: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        _transform: null;
        dynamicPoolId: string;
        min: number;
        step: number;
        group: number;
        bezier: null;
        weight: number;
        max: number;
        id: string;
    }[];
} | {
    data: {
        _transform: null;
        id: string;
        dynamicPoolId: string;
        max: number;
        weight: number;
        group: number;
        min: number;
        bezier: null;
        step: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        bezier: null;
        min: number;
        step: number;
        id: string;
        dynamicPoolId: string;
        _transform: null;
        weight: number;
        group: number;
        max: number;
    }[];
} | {
    id: string;
    data: {
        _transform: null;
        weight: number;
        max: number;
        step: number;
        dynamicPoolId: string;
        min: number;
        group: number;
        bezier: null;
        id: string;
    }[];
} | {
    id: string;
    data: {
        dynamicPoolId: string;
        max: number;
        group: number;
        weight: number;
        id: string;
        _transform: null;
        step: number;
        min: number;
        bezier: null;
    }[];
} | {
    id: string;
    data: {
        dynamicPoolId: string;
        _transform: null;
        group: number;
        max: number;
        min: number;
        id: string;
        weight: number;
        step: number;
        bezier: null;
    }[];
} | {
    id: string;
    data: {
        bezier: null;
        id: string;
        step: number;
        dynamicPoolId: string;
        weight: number;
        group: number;
        _transform: null;
        max: number;
        min: number;
    }[];
} | {
    data: {
        min: number;
        step: number;
        group: number;
        max: number;
        id: string;
        weight: number;
        bezier: null;
        _transform: null;
        dynamicPoolId: string;
    }[];
    id: string;
} | {
    data: {
        _transform: null;
        weight: number;
        group: number;
        bezier: null;
        min: number;
        max: number;
        step: number;
        id: string;
        dynamicPoolId: string;
    }[];
    id: string;
} | {
    data: {
        group: number;
        _transform: null;
        min: number;
        bezier: null;
        id: string;
        weight: number;
        max: number;
        dynamicPoolId: string;
        step: number;
    }[];
    id: string;
} | {
    data: {
        min: number;
        id: string;
        _transform: null;
        step: number;
        bezier: null;
        weight: number;
        group: number;
        max: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        weight: number;
        group: number;
        bezier: null;
        _transform: null;
        min: number;
        max: number;
        id: string;
        step: number;
    }[];
} | {
    data: {
        min: number;
        step: number;
        id: string;
        group: number;
        bezier: null;
        weight: number;
        _transform: null;
        max: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        weight: number;
        _transform: null;
        group: number;
        id: string;
        min: number;
        max: number;
        bezier: null;
        step: number;
    }[];
} | {
    id: string;
    data: {
        group: number;
        _transform: null;
        max: number;
        min: number;
        bezier: null;
        step: number;
        weight: number;
        id: string;
    }[];
} | {
    data: ({
        max: number;
        step: number;
        weight: number;
        min: number;
        group: number;
        bezier: null;
        id: string;
        _transform: null;
        dynamicPoolId?: undefined;
    } | {
        step: number;
        group: number;
        min: number;
        _transform: null;
        id: string;
        bezier: null;
        dynamicPoolId: string;
        max: number;
        weight: number;
    })[];
    id: string;
} | {
    id: string;
    data: {
        _transform: null;
        weight: number;
        min: number;
        bezier: null;
        max: number;
        step: number;
        group: number;
        id: string;
    }[];
} | {
    id: string;
    data: {
        weight: number;
        max: number;
        bezier: null;
        id: string;
        _transform: null;
        step: number;
        group: number;
        min: number;
    }[];
} | {
    id: string;
    data: ({
        bezier: null;
        id: string;
        max: number;
        group: number;
        min: number;
        _transform: null;
        weight: number;
        step: number;
        dynamicPoolId?: undefined;
    } | {
        min: number;
        _transform: null;
        weight: number;
        id: string;
        max: number;
        bezier: null;
        group: number;
        dynamicPoolId: string;
        step: number;
    })[];
} | {
    data: {
        step: number;
        group: number;
        min: number;
        id: string;
        _transform: null;
        max: number;
        weight: number;
        bezier: null;
    }[];
    id: string;
} | {
    id: string;
    data: {
        max: number;
        weight: number;
        step: number;
        group: number;
        bezier: null;
        min: number;
        _transform: null;
        id: string;
    }[];
} | {
    data: ({
        max: number;
        group: number;
        bezier: null;
        min: number;
        _transform: null;
        step: number;
        id: string;
        weight: number;
        dynamicPoolId?: undefined;
    } | {
        bezier: null;
        min: number;
        id: string;
        group: number;
        dynamicPoolId: string;
        step: number;
        _transform: null;
        weight: number;
        max: number;
    })[];
    id: string;
} | {
    id: string;
    data: ({
        weight: number;
        group: number;
        bezier: null;
        id: string;
        max: number;
        _transform: null;
        step: number;
        min: number;
        dynamicPoolId?: undefined;
    } | {
        _transform: null;
        min: number;
        dynamicPoolId: string;
        step: number;
        group: number;
        weight: number;
        bezier: null;
        max: number;
        id: string;
    })[];
} | {
    data: ({
        step: number;
        id: string;
        bezier: null;
        weight: number;
        _transform: null;
        group: number;
        min: number;
        max: number;
        dynamicPoolId?: undefined;
    } | {
        id: string;
        _transform: null;
        group: number;
        min: number;
        weight: number;
        max: number;
        dynamicPoolId: string;
        bezier: null;
        step: number;
    })[];
    id: string;
} | {
    id: string;
    data: ({
        step: number;
        id: string;
        weight: number;
        _transform: null;
        min: number;
        max: number;
        group: number;
        bezier: null;
        dynamicPoolId?: undefined;
    } | {
        bezier: null;
        dynamicPoolId: string;
        id: string;
        weight: number;
        max: number;
        step: number;
        group: number;
        _transform: null;
        min: number;
    })[];
} | {
    id: string;
    data: ({
        _transform: null;
        id: string;
        min: number;
        step: number;
        max: number;
        bezier: null;
        weight: number;
        group: number;
        dynamicPoolId?: undefined;
    } | {
        id: string;
        min: number;
        weight: number;
        dynamicPoolId: string;
        group: number;
        _transform: null;
        max: number;
        bezier: null;
        step: number;
    })[];
} | {
    data: {
        min: number;
        max: number;
        step: number;
        bezier: null;
        weight: number;
        id: string;
        _transform: null;
        group: number;
    }[];
    id: string;
} | {
    data: {
        id: string;
        step: number;
        max: number;
        weight: number;
        group: number;
        bezier: null;
        min: number;
        _transform: null;
    }[];
    id: string;
} | {
    id: string;
    data: {
        bezier: null;
        step: number;
        id: string;
        min: number;
        weight: number;
        _transform: null;
        group: number;
        max: number;
    }[];
} | {
    data: {
        id: string;
        min: number;
        step: number;
        _transform: null;
        weight: number;
        bezier: null;
        max: number;
        group: number;
    }[];
    id: string;
} | {
    data: {
        max: number;
        min: number;
        _transform: null;
        weight: number;
        group: number;
        step: number;
        bezier: null;
        id: string;
    }[];
    id: string;
} | {
    data: {
        min: number;
        group: number;
        bezier: null;
        weight: number;
        step: number;
        id: string;
        max: number;
        _transform: null;
    }[];
    id: string;
} | {
    id: string;
    data: {
        id: string;
        group: number;
        min: number;
        step: number;
        max: number;
        bezier: null;
        weight: number;
        _transform: null;
    }[];
} | {
    id: string;
    data: {
        min: number;
        weight: number;
        max: number;
        id: string;
        step: number;
        group: number;
        bezier: null;
        _transform: null;
    }[];
} | {
    id: string;
    data: {
        group: number;
        bezier: null;
        min: number;
        step: number;
        max: number;
        weight: number;
        id: string;
        _transform: null;
    }[];
} | {
    data: ({
        _transform: null;
        max: number;
        bezier: null;
        group: number;
        min: number;
        step: number;
        id: string;
        weight: number;
        dynamicPoolId?: undefined;
    } | {
        bezier: null;
        max: number;
        group: number;
        id: string;
        min: number;
        _transform: null;
        weight: number;
        step: number;
        dynamicPoolId: string;
    })[];
    id: string;
} | {
    data: {
        weight: number;
        _transform: null;
        bezier: null;
        id: string;
        group: number;
        max: number;
        step: number;
        min: number;
    }[];
    id: string;
} | {
    data: {
        _transform: null;
        max: number;
        min: number;
        step: number;
        group: number;
        id: string;
        weight: number;
        bezier: null;
    }[];
    id: string;
} | {
    id: string;
    data: ({
        step: number;
        group: number;
        bezier: null;
        weight: number;
        id: string;
        _transform: null;
        min: number;
        max: number;
        dynamicPoolId?: undefined;
    } | {
        bezier: null;
        _transform: null;
        weight: number;
        dynamicPoolId: string;
        min: number;
        group: number;
        id: string;
        step: number;
        max: number;
    })[];
} | {
    data: {
        weight: number;
        bezier: null;
        min: number;
        max: number;
        group: number;
        step: number;
        _transform: null;
        id: string;
    }[];
    id: string;
} | {
    data: {
        group: number;
        min: number;
        step: number;
        max: number;
        weight: number;
        id: string;
        _transform: null;
        bezier: null;
    }[];
    id: string;
} | {
    id: string;
    data: ({
        group: number;
        weight: number;
        _transform: null;
        id: string;
        min: number;
        bezier: null;
        max: number;
        step: number;
        dynamicPoolId?: undefined;
    } | {
        bezier: null;
        dynamicPoolId: string;
        weight: number;
        step: number;
        group: number;
        max: number;
        id: string;
        _transform: null;
        min: number;
    })[];
} | {
    id: string;
    data: ({
        bezier: null;
        group: number;
        max: number;
        min: number;
        weight: number;
        _transform: null;
        id: string;
        step: number;
        dynamicPoolId?: undefined;
    } | {
        bezier: null;
        step: number;
        max: number;
        group: number;
        min: number;
        weight: number;
        id: string;
        _transform: null;
        dynamicPoolId: string;
    })[];
} | {
    id: string;
    data: ({
        id: string;
        max: number;
        _transform: null;
        group: number;
        min: number;
        weight: number;
        bezier: null;
        step: number;
        dynamicPoolId?: undefined;
    } | {
        step: number;
        dynamicPoolId: string;
        min: number;
        weight: number;
        _transform: null;
        group: number;
        bezier: null;
        id: string;
        max: number;
    })[];
} | {
    id: string;
    data: ({
        id: string;
        group: number;
        min: number;
        _transform: null;
        weight: number;
        max: number;
        step: number;
        bezier: null;
        dynamicPoolId?: undefined;
    } | {
        id: string;
        min: number;
        step: number;
        _transform: null;
        dynamicPoolId: string;
        max: number;
        weight: number;
        group: number;
        bezier: null;
    })[];
} | {
    data: ({
        max: number;
        step: number;
        id: string;
        _transform: null;
        group: number;
        weight: number;
        min: number;
        bezier: null;
        dynamicPoolId?: undefined;
    } | {
        bezier: null;
        dynamicPoolId: string;
        min: number;
        max: number;
        group: number;
        id: string;
        step: number;
        _transform: null;
        weight: number;
    })[];
    id: string;
} | {
    data: {
        bezier: null;
        id: string;
        weight: number;
        step: number;
        min: number;
        max: number;
        _transform: null;
        group: number;
    }[];
    id: string;
} | {
    data: {
        group: number;
        _transform: null;
        weight: number;
        step: number;
        bezier: null;
        min: number;
        id: string;
        max: number;
    }[];
    id: string;
} | {
    data: {
        weight: number;
        group: number;
        min: number;
        _transform: null;
        step: number;
        max: number;
        bezier: null;
        id: string;
    }[];
    id: string;
} | {
    data: {
        bezier: null;
        step: number;
        id: string;
        group: number;
        min: number;
        max: number;
        weight: number;
        _transform: null;
    }[];
    id: string;
} | {
    id: string;
    data: {
        id: string;
        max: number;
        min: number;
        _transform: null;
        bezier: null;
        weight: number;
        step: number;
        group: number;
    }[];
} | {
    data: {
        min: number;
        max: number;
        _transform: null;
        bezier: null;
        weight: number;
        step: number;
        group: number;
        id: string;
    }[];
    id: string;
} | {
    data: {
        min: number;
        weight: number;
        _transform: null;
        bezier: null;
        id: string;
        group: number;
        step: number;
        max: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        group: number;
        step: number;
        min: number;
        _transform: null;
        max: number;
        weight: number;
        id: string;
        bezier: null;
    }[];
} | {
    id: string;
    data: {
        min: number;
        step: number;
        weight: number;
        group: number;
        max: number;
        bezier: null;
        _transform: null;
        id: string;
    }[];
} | {
    id: string;
    data: ({
        weight: number;
        _transform: null;
        bezier: null;
        step: number;
        id: string;
        group: number;
        max: number;
        min: number;
        dynamicPoolId?: undefined;
    } | {
        max: number;
        group: number;
        weight: number;
        bezier: null;
        min: number;
        dynamicPoolId: string;
        id: string;
        _transform: null;
        step: number;
    })[];
} | {
    data: {
        min: number;
        _transform: null;
        max: number;
        group: number;
        id: string;
        bezier: null;
        weight: number;
        step: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        _transform: null;
        id: string;
        bezier: null;
        min: number;
        weight: number;
        group: number;
        step: number;
        max: number;
    }[];
} | {
    data: ({
        step: number;
        group: number;
        min: number;
        id: string;
        max: number;
        weight: number;
        bezier: null;
        _transform: null;
        dynamicPoolId?: undefined;
    } | {
        dynamicPoolId: string;
        max: number;
        group: number;
        id: string;
        _transform: null;
        step: number;
        min: number;
        bezier: null;
        weight: number;
    })[];
    id: string;
} | {
    data: {
        min: number;
        step: number;
        max: number;
        weight: number;
        group: number;
        bezier: null;
        _transform: null;
        id: string;
    }[];
    id: string;
} | {
    id: string;
    data: {
        id: string;
        max: number;
        min: number;
        weight: number;
        step: number;
        group: number;
        bezier: null;
        _transform: null;
    }[];
} | {
    data: ({
        id: string;
        max: number;
        _transform: null;
        bezier: null;
        min: number;
        weight: number;
        step: number;
        group: number;
        dynamicPoolId?: undefined;
    } | {
        bezier: null;
        _transform: null;
        step: number;
        group: number;
        weight: number;
        dynamicPoolId: string;
        max: number;
        id: string;
        min: number;
    })[];
    id: string;
} | {
    id: string;
    data: ({
        id: string;
        group: number;
        weight: number;
        _transform: null;
        step: number;
        min: number;
        bezier: null;
        max: number;
        dynamicPoolId?: undefined;
    } | {
        dynamicPoolId: string;
        max: number;
        step: number;
        bezier: null;
        group: number;
        id: string;
        weight: number;
        min: number;
        _transform: null;
    })[];
} | {
    id: string;
    data: ({
        min: number;
        _transform: null;
        weight: number;
        group: number;
        id: string;
        bezier: null;
        max: number;
        step: number;
        dynamicPoolId?: undefined;
    } | {
        step: number;
        bezier: null;
        id: string;
        _transform: null;
        min: number;
        group: number;
        max: number;
        weight: number;
        dynamicPoolId: string;
    })[];
} | {
    data: ({
        min: number;
        bezier: null;
        max: number;
        step: number;
        id: string;
        group: number;
        _transform: null;
        weight: number;
        dynamicPoolId?: undefined;
    } | {
        weight: number;
        step: number;
        bezier: null;
        id: string;
        dynamicPoolId: string;
        _transform: null;
        max: number;
        group: number;
        min: number;
    })[];
    id: string;
} | {
    data: ({
        max: number;
        id: string;
        min: number;
        weight: number;
        _transform: null;
        step: number;
        group: number;
        bezier: null;
        dynamicPoolId?: undefined;
    } | {
        id: string;
        _transform: null;
        bezier: null;
        group: number;
        dynamicPoolId: string;
        min: number;
        max: number;
        weight: number;
        step: number;
    })[];
    id: string;
} | {
    id: string;
    data: {
        weight: number;
        step: number;
        min: number;
        bezier: null;
        id: string;
        group: number;
        _transform: null;
        max: number;
    }[];
} | {
    data: {
        min: number;
        weight: number;
        group: number;
        id: string;
        bezier: null;
        _transform: null;
        max: number;
        step: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        _transform: null;
        id: string;
        weight: number;
        group: number;
        step: number;
        min: number;
        max: number;
        bezier: null;
    }[];
} | {
    data: {
        weight: number;
        group: number;
        _transform: null;
        min: number;
        bezier: null;
        step: number;
        id: string;
        max: number;
    }[];
    id: string;
} | {
    data: {
        group: number;
        bezier: null;
        max: number;
        dynamicPoolId: string;
        min: number;
        step: number;
        weight: number;
        _transform: null;
        id: string;
    }[];
    id: string;
} | {
    id: string;
    data: {
        weight: number;
        step: number;
        group: number;
        bezier: null;
        _transform: null;
        max: number;
        id: string;
        min: number;
        dynamicPoolId: string;
    }[];
} | {
    data: {
        id: string;
        min: number;
        weight: number;
        max: number;
        dynamicPoolId: string;
        _transform: null;
        bezier: null;
        step: number;
        group: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        bezier: null;
        dynamicPoolId: string;
        max: number;
        min: number;
        group: number;
        step: number;
        _transform: null;
        id: string;
        weight: number;
    }[];
} | {
    id: string;
    data: {
        group: number;
        dynamicPoolId: string;
        step: number;
        id: string;
        weight: number;
        bezier: null;
        _transform: null;
        min: number;
        max: number;
    }[];
} | {
    id: string;
    data: {
        weight: number;
        min: number;
        max: number;
        group: number;
        id: string;
        step: number;
        dynamicPoolId: string;
        bezier: null;
        _transform: null;
    }[];
} | {
    data: {
        min: number;
        bezier: null;
        dynamicPoolId: string;
        group: number;
        id: string;
        step: number;
        max: number;
        _transform: null;
        weight: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        dynamicPoolId: string;
        min: number;
        bezier: null;
        group: number;
        step: number;
        id: string;
        _transform: null;
        weight: number;
        max: number;
    }[];
} | {
    data: {
        step: number;
        group: number;
        min: number;
        id: string;
        max: number;
        _transform: null;
        dynamicPoolId: string;
        bezier: null;
        weight: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        id: string;
        step: number;
        dynamicPoolId: string;
        group: number;
        bezier: null;
        max: number;
        weight: number;
        min: number;
        _transform: null;
    }[];
} | {
    id: string;
    data: {
        _transform: null;
        max: number;
        bezier: null;
        min: number;
        id: string;
        group: number;
        dynamicPoolId: string;
        step: number;
        weight: number;
    }[];
} | {
    data: {
        _transform: null;
        dynamicPoolId: string;
        min: number;
        bezier: null;
        step: number;
        weight: number;
        group: number;
        id: string;
        max: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        _transform: null;
        id: string;
        weight: number;
        dynamicPoolId: string;
        min: number;
        bezier: null;
        step: number;
        group: number;
        max: number;
    }[];
} | {
    id: string;
    data: {
        group: number;
        _transform: null;
        max: number;
        step: number;
        bezier: null;
        dynamicPoolId: string;
        id: string;
        weight: number;
        min: number;
    }[];
} | {
    id: string;
    data: {
        group: number;
        bezier: null;
        min: number;
        _transform: null;
        dynamicPoolId: string;
        max: number;
        weight: number;
        step: number;
        id: string;
    }[];
} | {
    data: {
        bezier: null;
        _transform: null;
        min: number;
        weight: number;
        step: number;
        group: number;
        max: number;
        id: string;
        dynamicPoolId: string;
    }[];
    id: string;
} | {
    id: string;
    data: {
        min: number;
        _transform: null;
        bezier: null;
        max: number;
        group: number;
        weight: number;
        step: number;
        id: string;
        dynamicPoolId: string;
    }[];
} | {
    id: string;
    data: {
        step: number;
        _transform: null;
        id: string;
        dynamicPoolId: string;
        weight: number;
        min: number;
        max: number;
        bezier: null;
        group: number;
    }[];
} | {
    data: {
        min: number;
        bezier: null;
        _transform: null;
        id: string;
        max: number;
        step: number;
        group: number;
        weight: number;
        dynamicPoolId: string;
    }[];
    id: string;
} | {
    id: string;
    data: {
        group: number;
        min: number;
        bezier: null;
        weight: number;
        step: number;
        dynamicPoolId: string;
        max: number;
        _transform: null;
        id: string;
    }[];
} | {
    data: {
        max: number;
        step: number;
        group: number;
        id: string;
        weight: number;
        bezier: null;
        _transform: null;
        dynamicPoolId: string;
        min: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        bezier: null;
        step: number;
        dynamicPoolId: string;
        group: number;
        max: number;
        _transform: null;
        id: string;
        min: number;
        weight: number;
    }[];
} | {
    id: string;
    data: {
        id: string;
        weight: number;
        dynamicPoolId: string;
        min: number;
        bezier: null;
        max: number;
        _transform: null;
        step: number;
        group: number;
    }[];
} | {
    id: string;
    data: {
        id: string;
        weight: number;
        step: number;
        min: number;
        bezier: null;
        group: number;
        max: number;
        dynamicPoolId: string;
        _transform: null;
    }[];
} | {
    data: {
        dynamicPoolId: string;
        weight: number;
        id: string;
        bezier: null;
        max: number;
        _transform: null;
        min: number;
        step: number;
        group: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        dynamicPoolId: string;
        group: number;
        step: number;
        max: number;
        min: number;
        id: string;
        _transform: null;
        weight: number;
        bezier: null;
    }[];
} | {
    data: {
        id: string;
        group: number;
        _transform: null;
        dynamicPoolId: string;
        bezier: null;
        min: number;
        max: number;
        weight: number;
        step: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        dynamicPoolId: string;
        _transform: null;
        step: number;
        id: string;
        group: number;
        max: number;
        weight: number;
        min: number;
        bezier: null;
    }[];
} | {
    data: {
        dynamicPoolId: string;
        max: number;
        _transform: null;
        min: number;
        id: string;
        weight: number;
        group: number;
        step: number;
        bezier: null;
    }[];
    id: string;
} | {
    id: string;
    data: {
        weight: number;
        id: string;
        max: number;
        bezier: null;
        dynamicPoolId: string;
        min: number;
        _transform: null;
        step: number;
        group: number;
    }[];
} | {
    data: {
        bezier: null;
        min: number;
        _transform: null;
        max: number;
        id: string;
        step: number;
        group: number;
        dynamicPoolId: string;
        weight: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        group: number;
        dynamicPoolId: string;
        _transform: null;
        bezier: null;
        weight: number;
        step: number;
        id: string;
        min: number;
        max: number;
    }[];
} | {
    id: string;
    data: {
        dynamicPoolId: string;
        step: number;
        max: number;
        bezier: null;
        group: number;
        id: string;
        _transform: null;
        weight: number;
        min: number;
    }[];
} | {
    data: {
        max: number;
        step: number;
        group: number;
        id: string;
        _transform: null;
        weight: number;
        min: number;
        bezier: null;
        dynamicPoolId: string;
    }[];
    id: string;
} | {
    id: string;
    data: {
        max: number;
        step: number;
        min: number;
        dynamicPoolId: string;
        weight: number;
        bezier: null;
        _transform: null;
        group: number;
        id: string;
    }[];
} | {
    data: {
        bezier: null;
        group: number;
        step: number;
        dynamicPoolId: string;
        max: number;
        id: string;
        _transform: null;
        min: number;
        weight: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        bezier: null;
        min: number;
        max: number;
        weight: number;
        dynamicPoolId: string;
        id: string;
        group: number;
        step: number;
        _transform: null;
    }[];
} | {
    id: string;
    data: {
        group: number;
        weight: number;
        dynamicPoolId: string;
        id: string;
        step: number;
        _transform: null;
        min: number;
        bezier: null;
        max: number;
    }[];
} | {
    id: string;
    data: {
        _transform: null;
        dynamicPoolId: string;
        bezier: null;
        step: number;
        group: number;
        id: string;
        min: number;
        max: number;
        weight: number;
    }[];
} | {
    data: {
        id: string;
        max: number;
        weight: number;
        step: number;
        group: number;
        bezier: null;
        _transform: null;
        min: number;
        dynamicPoolId: string;
    }[];
    id: string;
} | {
    id: string;
    data: {
        group: number;
        max: number;
        id: string;
        bezier: null;
        _transform: null;
        min: number;
        weight: number;
        step: number;
    }[];
} | {
    data: {
        step: number;
        group: number;
        weight: number;
        min: number;
        bezier: null;
        id: string;
        _transform: null;
        max: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        bezier: null;
        min: number;
        weight: number;
        step: number;
        _transform: null;
        max: number;
        id: string;
        group: number;
    }[];
} | {
    data: {
        bezier: null;
        _transform: null;
        min: number;
        weight: number;
        group: number;
        step: number;
        id: string;
        max: number;
    }[];
    id: string;
} | {
    data: {
        min: number;
        _transform: null;
        bezier: null;
        max: number;
        weight: number;
        group: number;
        id: string;
        step: number;
    }[];
    id: string;
} | {
    data: ({
        id: string;
        min: number;
        max: number;
        group: number;
        weight: number;
        bezier: null;
        _transform: null;
        step: number;
        dynamicPoolId?: undefined;
    } | {
        id: string;
        max: number;
        min: number;
        bezier: null;
        _transform: null;
        dynamicPoolId: string;
        step: number;
        group: number;
        weight: number;
    })[];
    id: string;
} | {
    data: {
        max: number;
        bezier: null;
        min: number;
        step: number;
        weight: number;
        _transform: null;
        id: string;
        group: number;
    }[];
    id: string;
} | {
    data: {
        _transform: null;
        bezier: null;
        max: number;
        weight: number;
        group: number;
        id: string;
        step: number;
        min: number;
    }[];
    id: string;
} | {
    id: string;
    data: ({
        group: number;
        id: string;
        _transform: null;
        max: number;
        min: number;
        weight: number;
        step: number;
        bezier: null;
        dynamicPoolId?: undefined;
    } | {
        step: number;
        max: number;
        weight: number;
        id: string;
        _transform: null;
        group: number;
        bezier: null;
        dynamicPoolId: string;
        min: number;
    })[];
} | {
    data: {
        group: number;
        weight: number;
        id: string;
        _transform: null;
        step: number;
        bezier: null;
        min: number;
        max: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        _transform: null;
        weight: number;
        step: number;
        bezier: null;
        group: number;
        min: number;
        id: string;
        max: number;
    }[];
} | {
    id: string;
    data: ({
        max: number;
        weight: number;
        group: number;
        step: number;
        _transform: null;
        id: string;
        min: number;
        bezier: null;
        dynamicPoolId?: undefined;
    } | {
        step: number;
        min: number;
        dynamicPoolId: string;
        max: number;
        _transform: null;
        id: string;
        weight: number;
        group: number;
        bezier: null;
    })[];
} | {
    id: string;
    data: ({
        group: number;
        bezier: null;
        weight: number;
        id: string;
        _transform: null;
        step: number;
        max: number;
        min: number;
        dynamicPoolId?: undefined;
    } | {
        dynamicPoolId: string;
        bezier: null;
        min: number;
        _transform: null;
        id: string;
        max: number;
        step: number;
        group: number;
        weight: number;
    })[];
} | {
    data: ({
        min: number;
        step: number;
        bezier: null;
        group: number;
        _transform: null;
        weight: number;
        id: string;
        max: number;
        dynamicPoolId?: undefined;
    } | {
        min: number;
        dynamicPoolId: string;
        group: number;
        id: string;
        _transform: null;
        bezier: null;
        max: number;
        weight: number;
        step: number;
    })[];
    id: string;
} | {
    data: ({
        id: string;
        weight: number;
        _transform: null;
        step: number;
        max: number;
        group: number;
        min: number;
        bezier: null;
        dynamicPoolId?: undefined;
    } | {
        dynamicPoolId: string;
        id: string;
        min: number;
        bezier: null;
        _transform: null;
        step: number;
        max: number;
        group: number;
        weight: number;
    })[];
    id: string;
} | {
    id: string;
    data: ({
        weight: number;
        max: number;
        id: string;
        _transform: null;
        bezier: null;
        step: number;
        group: number;
        min: number;
        dynamicPoolId?: undefined;
    } | {
        group: number;
        min: number;
        step: number;
        dynamicPoolId: string;
        max: number;
        weight: number;
        id: string;
        bezier: null;
        _transform: null;
    })[];
} | {
    data: {
        min: number;
        step: number;
        max: number;
        bezier: null;
        id: string;
        _transform: null;
        weight: number;
        group: number;
    }[];
    id: string;
} | {
    data: {
        group: number;
        weight: number;
        step: number;
        min: number;
        _transform: null;
        max: number;
        bezier: null;
        id: string;
    }[];
    id: string;
} | {
    id: string;
    data: {
        max: number;
        min: number;
        group: number;
        bezier: null;
        id: string;
        weight: number;
        _transform: null;
        step: number;
    }[];
} | {
    id: string;
    data: {
        bezier: null;
        id: string;
        step: number;
        min: number;
        _transform: null;
        max: number;
        group: number;
        weight: number;
    }[];
} | {
    id: string;
    data: {
        bezier: null;
        max: number;
        min: number;
        weight: number;
        step: number;
        group: number;
        id: string;
        _transform: null;
    }[];
} | {
    id: string;
    data: {
        bezier: null;
        max: number;
        id: string;
        min: number;
        group: number;
        weight: number;
        _transform: null;
        step: number;
    }[];
} | {
    id: string;
    data: {
        group: number;
        step: number;
        _transform: null;
        min: number;
        weight: number;
        id: string;
        max: number;
        bezier: null;
    }[];
} | {
    id: string;
    data: {
        group: number;
        weight: number;
        bezier: null;
        _transform: null;
        step: number;
        max: number;
        min: number;
        id: string;
    }[];
} | {
    id: string;
    data: {
        step: number;
        group: number;
        weight: number;
        bezier: null;
        id: string;
        _transform: null;
        min: number;
        max: number;
    }[];
} | {
    id: string;
    data: ({
        _transform: null;
        max: number;
        step: number;
        min: number;
        group: number;
        bezier: null;
        weight: number;
        id: string;
        dynamicPoolId?: undefined;
    } | {
        step: number;
        id: string;
        min: number;
        max: number;
        weight: number;
        _transform: null;
        group: number;
        bezier: null;
        dynamicPoolId: string;
    })[];
} | {
    id: string;
    data: {
        bezier: null;
        step: number;
        max: number;
        id: string;
        min: number;
        group: number;
        _transform: null;
        weight: number;
    }[];
} | {
    id: string;
    data: {
        group: number;
        _transform: null;
        weight: number;
        max: number;
        bezier: null;
        id: string;
        min: number;
        step: number;
    }[];
} | {
    data: ({
        step: number;
        bezier: null;
        _transform: null;
        min: number;
        max: number;
        group: number;
        weight: number;
        id: string;
        dynamicPoolId?: undefined;
    } | {
        group: number;
        id: string;
        step: number;
        dynamicPoolId: string;
        weight: number;
        bezier: null;
        _transform: null;
        min: number;
        max: number;
    })[];
    id: string;
} | {
    data: {
        id: string;
        min: number;
        max: number;
        group: number;
        weight: number;
        bezier: null;
        _transform: null;
        step: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        step: number;
        weight: number;
        min: number;
        max: number;
        group: number;
        id: string;
        _transform: null;
        bezier: null;
    }[];
} | {
    data: ({
        max: number;
        group: number;
        weight: number;
        _transform: null;
        id: string;
        step: number;
        min: number;
        bezier: null;
        dynamicPoolId?: undefined;
    } | {
        id: string;
        bezier: null;
        min: number;
        step: number;
        group: number;
        _transform: null;
        dynamicPoolId: string;
        weight: number;
        max: number;
    })[];
    id: string;
} | {
    id: string;
    data: ({
        min: number;
        weight: number;
        step: number;
        _transform: null;
        group: number;
        max: number;
        bezier: null;
        id: string;
        dynamicPoolId?: undefined;
    } | {
        min: number;
        id: string;
        max: number;
        bezier: null;
        dynamicPoolId: string;
        group: number;
        step: number;
        weight: number;
        _transform: null;
    })[];
} | {
    data: ({
        group: number;
        step: number;
        bezier: null;
        id: string;
        _transform: null;
        min: number;
        weight: number;
        max: number;
        dynamicPoolId?: undefined;
    } | {
        dynamicPoolId: string;
        min: number;
        id: string;
        step: number;
        group: number;
        _transform: null;
        weight: number;
        bezier: null;
        max: number;
    })[];
    id: string;
} | {
    id: string;
    data: ({
        max: number;
        weight: number;
        bezier: null;
        id: string;
        step: number;
        _transform: null;
        group: number;
        min: number;
        dynamicPoolId?: undefined;
    } | {
        bezier: null;
        max: number;
        weight: number;
        step: number;
        id: string;
        min: number;
        group: number;
        _transform: null;
        dynamicPoolId: string;
    })[];
} | {
    data: ({
        max: number;
        group: number;
        _transform: null;
        step: number;
        id: string;
        bezier: null;
        min: number;
        weight: number;
        dynamicPoolId?: undefined;
    } | {
        dynamicPoolId: string;
        weight: number;
        step: number;
        _transform: null;
        max: number;
        group: number;
        min: number;
        bezier: null;
        id: string;
    })[];
    id: string;
} | {
    data: {
        bezier: null;
        min: number;
        weight: number;
        id: string;
        group: number;
        _transform: null;
        max: number;
        step: number;
    }[];
    id: string;
} | {
    data: {
        max: number;
        _transform: null;
        weight: number;
        bezier: null;
        group: number;
        id: string;
        min: number;
        step: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        max: number;
        weight: number;
        id: string;
        min: number;
        group: number;
        _transform: null;
        bezier: null;
        step: number;
    }[];
} | {
    id: string;
    data: {
        bezier: null;
        step: number;
        max: number;
        min: number;
        group: number;
        id: string;
        _transform: null;
        weight: number;
    }[];
} | {
    data: {
        id: string;
        step: number;
        _transform: null;
        max: number;
        min: number;
        weight: number;
        bezier: null;
        group: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        bezier: null;
        max: number;
        group: number;
        weight: number;
        id: string;
        min: number;
        _transform: null;
        step: number;
    }[];
} | {
    data: {
        max: number;
        group: number;
        step: number;
        _transform: null;
        id: string;
        min: number;
        weight: number;
        bezier: null;
    }[];
    id: string;
} | {
    id: string;
    data: {
        max: number;
        weight: number;
        min: number;
        bezier: null;
        _transform: null;
        id: string;
        step: number;
        group: number;
    }[];
} | {
    data: {
        id: string;
        bezier: null;
        _transform: null;
        group: number;
        weight: number;
        min: number;
        max: number;
        step: number;
    }[];
    id: string;
} | {
    data: ({
        _transform: null;
        min: number;
        weight: number;
        group: number;
        id: string;
        step: number;
        max: number;
        bezier: null;
        dynamicPoolId?: undefined;
    } | {
        step: number;
        max: number;
        dynamicPoolId: string;
        _transform: null;
        group: number;
        min: number;
        bezier: null;
        id: string;
        weight: number;
    })[];
    id: string;
} | {
    data: {
        _transform: null;
        weight: number;
        bezier: null;
        id: string;
        group: number;
        step: number;
        min: number;
        max: number;
    }[];
    id: string;
} | {
    data: {
        weight: number;
        id: string;
        min: number;
        max: number;
        _transform: null;
        group: number;
        bezier: null;
        step: number;
    }[];
    id: string;
} | {
    id: string;
    data: ({
        max: number;
        group: number;
        id: string;
        min: number;
        weight: number;
        bezier: null;
        _transform: null;
        step: number;
        dynamicPoolId?: undefined;
    } | {
        min: number;
        group: number;
        dynamicPoolId: string;
        id: string;
        max: number;
        bezier: null;
        weight: number;
        step: number;
        _transform: null;
    })[];
} | {
    id: string;
    data: {
        min: number;
        id: string;
        weight: number;
        bezier: null;
        group: number;
        step: number;
        _transform: null;
        max: number;
    }[];
} | {
    data: {
        group: number;
        bezier: null;
        weight: number;
        _transform: null;
        step: number;
        id: string;
        max: number;
        min: number;
    }[];
    id: string;
} | {
    id: string;
    data: ({
        bezier: null;
        min: number;
        max: number;
        weight: number;
        group: number;
        id: string;
        step: number;
        _transform: null;
        dynamicPoolId?: undefined;
    } | {
        min: number;
        step: number;
        weight: number;
        bezier: null;
        max: number;
        group: number;
        id: string;
        dynamicPoolId: string;
        _transform: null;
    })[];
} | {
    data: ({
        group: number;
        max: number;
        _transform: null;
        id: string;
        min: number;
        bezier: null;
        weight: number;
        step: number;
        dynamicPoolId?: undefined;
    } | {
        _transform: null;
        min: number;
        bezier: null;
        id: string;
        step: number;
        dynamicPoolId: string;
        group: number;
        weight: number;
        max: number;
    })[];
    id: string;
} | {
    id: string;
    data: ({
        max: number;
        group: number;
        weight: number;
        bezier: null;
        _transform: null;
        min: number;
        step: number;
        id: string;
        dynamicPoolId?: undefined;
    } | {
        _transform: null;
        weight: number;
        min: number;
        bezier: null;
        dynamicPoolId: string;
        max: number;
        step: number;
        group: number;
        id: string;
    })[];
} | {
    data: ({
        weight: number;
        min: number;
        _transform: null;
        id: string;
        max: number;
        group: number;
        bezier: null;
        step: number;
        dynamicPoolId?: undefined;
    } | {
        step: number;
        _transform: null;
        max: number;
        bezier: null;
        dynamicPoolId: string;
        min: number;
        group: number;
        id: string;
        weight: number;
    })[];
    id: string;
} | {
    data: ({
        id: string;
        weight: number;
        step: number;
        _transform: null;
        group: number;
        max: number;
        bezier: null;
        min: number;
        dynamicPoolId?: undefined;
    } | {
        _transform: null;
        bezier: null;
        max: number;
        dynamicPoolId: string;
        step: number;
        group: number;
        id: string;
        min: number;
        weight: number;
    })[];
    id: string;
} | {
    data: {
        group: number;
        min: number;
        step: number;
        bezier: null;
        id: string;
        weight: number;
        _transform: null;
        max: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        _transform: null;
        min: number;
        max: number;
        bezier: null;
        group: number;
        step: number;
        id: string;
        weight: number;
    }[];
} | {
    id: string;
    data: {
        min: number;
        weight: number;
        max: number;
        id: string;
        _transform: null;
        step: number;
        group: number;
        bezier: null;
    }[];
} | {
    id: string;
    data: {
        weight: number;
        step: number;
        bezier: null;
        _transform: null;
        group: number;
        max: number;
        id: string;
        min: number;
    }[];
} | {
    id: string;
    data: ({
        bezier: null;
        id: string;
        _transform: null;
        weight: number;
        dynamicPoolId: string;
        min: number;
        group: number;
        max: number;
        step: number;
    } | {
        step: number;
        bezier: null;
        id: string;
        weight: number;
        min: number;
        _transform: null;
        max: number;
        group: number;
        dynamicPoolId?: undefined;
    })[];
} | {
    id: string;
    data: {
        id: string;
        weight: number;
        bezier: null;
        max: number;
        _transform: null;
        group: number;
        step: number;
        min: number;
    }[];
} | {
    id: string;
    data: {
        group: number;
        bezier: null;
        _transform: null;
        id: string;
        max: number;
        weight: number;
        min: number;
        step: number;
    }[];
} | {
    id: string;
    data: {
        _transform: null;
        max: number;
        id: string;
        min: number;
        weight: number;
        bezier: null;
        step: number;
        group: number;
    }[];
} | {
    data: {
        _transform: null;
        bezier: null;
        group: number;
        step: number;
        weight: number;
        max: number;
        id: string;
        min: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        bezier: null;
        group: number;
        step: number;
        id: string;
        min: number;
        weight: number;
        _transform: null;
        max: number;
    }[];
} | {
    data: {
        weight: number;
        step: number;
        id: string;
        bezier: null;
        max: number;
        min: number;
        _transform: null;
        group: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        id: string;
        step: number;
        _transform: null;
        weight: number;
        bezier: null;
        min: number;
        max: number;
        group: number;
    }[];
} | {
    data: {
        weight: number;
        min: number;
        id: string;
        group: number;
        max: number;
        _transform: null;
        bezier: null;
        step: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        weight: number;
        _transform: null;
        max: number;
        id: string;
        step: number;
        group: number;
        min: number;
        bezier: null;
    }[];
} | {
    data: {
        group: number;
        min: number;
        weight: number;
        max: number;
        bezier: null;
        id: string;
        _transform: null;
        step: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        max: number;
        min: number;
        weight: number;
        step: number;
        bezier: null;
        id: string;
        _transform: null;
        group: number;
    }[];
} | {
    data: {
        weight: number;
        max: number;
        min: number;
        id: string;
        bezier: null;
        _transform: null;
        step: number;
        group: number;
    }[];
    id: string;
} | {
    data: {
        min: number;
        group: number;
        step: number;
        max: number;
        id: string;
        _transform: null;
        weight: number;
        bezier: null;
    }[];
    id: string;
} | {
    id: string;
    data: {
        id: string;
        max: number;
        group: number;
        _transform: null;
        weight: number;
        bezier: null;
        min: number;
        step: number;
    }[];
} | {
    id: string;
    data: {
        step: number;
        id: string;
        max: number;
        min: number;
        bezier: null;
        _transform: null;
        weight: number;
        group: number;
    }[];
} | {
    id: string;
    data: {
        weight: number;
        max: number;
        id: string;
        _transform: null;
        step: number;
        min: number;
        bezier: null;
        group: number;
    }[];
} | {
    data: {
        _transform: null;
        bezier: null;
        step: number;
        group: number;
        max: number;
        min: number;
        id: string;
        weight: number;
    }[];
    id: string;
} | {
    data: {
        group: number;
        id: string;
        max: number;
        bezier: null;
        min: number;
        weight: number;
        step: number;
        _transform: null;
    }[];
    id: string;
} | {
    data: {
        min: number;
        group: number;
        bezier: null;
        _transform: null;
        weight: number;
        step: number;
        id: string;
        max: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        bezier: null;
        min: number;
        max: number;
        id: string;
        _transform: null;
        weight: number;
        step: number;
        group: number;
    }[];
} | {
    data: {
        step: number;
        bezier: null;
        min: number;
        group: number;
        id: string;
        _transform: null;
        max: number;
        weight: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        id: string;
        max: number;
        min: number;
        _transform: null;
        weight: number;
        step: number;
        group: number;
        bezier: null;
    }[];
} | {
    data: {
        _transform: null;
        step: number;
        weight: number;
        id: string;
        group: number;
        bezier: null;
        max: number;
        min: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        id: string;
        group: number;
        min: number;
        max: number;
        _transform: null;
        bezier: null;
        step: number;
        weight: number;
    }[];
} | {
    id: string;
    data: {
        _transform: null;
        group: number;
        id: string;
        max: number;
        weight: number;
        min: number;
        step: number;
        bezier: null;
    }[];
} | {
    id: string;
    data: {
        _transform: null;
        bezier: null;
        step: number;
        max: number;
        group: number;
        min: number;
        id: string;
        weight: number;
    }[];
} | {
    data: {
        step: number;
        group: number;
        _transform: null;
        id: string;
        min: number;
        weight: number;
        bezier: null;
        max: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        group: number;
        id: string;
        bezier: null;
        _transform: null;
        weight: number;
        max: number;
        step: number;
        min: number;
    }[];
} | {
    data: {
        group: number;
        id: string;
        step: number;
        bezier: null;
        min: number;
        weight: number;
        _transform: null;
        max: number;
    }[];
    id: string;
} | {
    data: {
        group: number;
        _transform: null;
        weight: number;
        step: number;
        max: number;
        bezier: null;
        id: string;
        min: number;
    }[];
    id: string;
} | {
    data: {
        min: number;
        max: number;
        id: string;
        step: number;
        bezier: null;
        weight: number;
        _transform: null;
        group: number;
    }[];
    id: string;
} | {
    data: {
        max: number;
        group: number;
        _transform: null;
        bezier: null;
        step: number;
        weight: number;
        id: string;
        min: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        bezier: null;
        group: number;
        id: string;
        step: number;
        max: number;
        _transform: null;
        weight: number;
        min: number;
    }[];
} | {
    id: string;
    data: {
        _transform: null;
        weight: number;
        group: number;
        bezier: null;
        min: number;
        step: number;
        id: string;
        max: number;
    }[];
} | {
    id: string;
    data: {
        group: number;
        bezier: null;
        max: number;
        id: string;
        _transform: null;
        weight: number;
        min: number;
        step: number;
    }[];
} | {
    data: {
        bezier: null;
        max: number;
        group: number;
        step: number;
        id: string;
        _transform: null;
        weight: number;
        min: number;
    }[];
    id: string;
} | {
    data: {
        weight: number;
        id: string;
        max: number;
        _transform: null;
        min: number;
        group: number;
        bezier: null;
        step: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        step: number;
        _transform: null;
        min: number;
        max: number;
        weight: number;
        group: number;
        id: string;
        bezier: null;
    }[];
} | {
    data: {
        bezier: null;
        min: number;
        step: number;
        weight: number;
        group: number;
        id: string;
        _transform: null;
        max: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        min: number;
        step: number;
        _transform: null;
        weight: number;
        bezier: null;
        id: string;
        max: number;
        group: number;
    }[];
} | {
    data: ({
        id: string;
        _transform: null;
        bezier: null;
        group: number;
        dynamicPoolId: string;
        step: number;
        max: number;
        min: number;
        weight: number;
    } | {
        max: number;
        id: string;
        weight: number;
        step: number;
        min: number;
        _transform: null;
        group: number;
        bezier: null;
        dynamicPoolId?: undefined;
    })[];
    id: string;
} | {
    data: {
        id: string;
        step: number;
        max: number;
        weight: number;
        group: number;
        bezier: null;
        _transform: null;
        min: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        weight: number;
        group: number;
        bezier: null;
        max: number;
        min: number;
        step: number;
        _transform: null;
        id: string;
    }[];
} | {
    id: string;
    data: {
        id: string;
        min: number;
        _transform: null;
        max: number;
        group: number;
        weight: number;
        bezier: null;
        step: number;
    }[];
} | {
    data: {
        min: number;
        _transform: null;
        weight: number;
        bezier: null;
        id: string;
        group: number;
        max: number;
        step: number;
    }[];
    id: string;
} | {
    data: {
        _transform: null;
        step: number;
        id: string;
        group: number;
        min: number;
        weight: number;
        bezier: null;
        max: number;
    }[];
    id: string;
} | {
    data: {
        min: number;
        group: number;
        bezier: null;
        weight: number;
        step: number;
        _transform: null;
        max: number;
        id: string;
    }[];
    id: string;
} | {
    data: {
        id: string;
        bezier: null;
        min: number;
        group: number;
        weight: number;
        step: number;
        _transform: null;
        max: number;
    }[];
    id: string;
} | {
    data: {
        step: number;
        weight: number;
        _transform: null;
        max: number;
        bezier: null;
        group: number;
        id: string;
        min: number;
    }[];
    id: string;
} | {
    data: {
        id: string;
        _transform: null;
        min: number;
        weight: number;
        step: number;
        group: number;
        bezier: null;
        max: number;
    }[];
    id: string;
} | {
    data: {
        bezier: null;
        max: number;
        _transform: null;
        id: string;
        step: number;
        weight: number;
        group: number;
        min: number;
    }[];
    id: string;
} | {
    data: {
        group: number;
        min: number;
        weight: number;
        step: number;
        _transform: null;
        bezier: null;
        id: string;
        max: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        max: number;
        bezier: null;
        min: number;
        id: string;
        group: number;
        _transform: null;
        step: number;
        weight: number;
    }[];
} | {
    data: {
        bezier: null;
        max: number;
        min: number;
        weight: number;
        group: number;
        id: string;
        _transform: null;
        step: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        weight: number;
        max: number;
        _transform: null;
        group: number;
        bezier: null;
        min: number;
        step: number;
        id: string;
    }[];
} | {
    data: {
        weight: number;
        group: number;
        bezier: null;
        min: number;
        id: string;
        step: number;
        _transform: null;
        max: number;
    }[];
    id: string;
} | {
    data: {
        min: number;
        max: number;
        bezier: null;
        id: string;
        group: number;
        step: number;
        _transform: null;
        weight: number;
    }[];
    id: string;
} | {
    data: {
        _transform: null;
        weight: number;
        step: number;
        id: string;
        group: number;
        max: number;
        bezier: null;
        min: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        _transform: null;
        group: number;
        weight: number;
        step: number;
        bezier: null;
        min: number;
        id: string;
        max: number;
    }[];
} | {
    data: {
        id: string;
        min: number;
        bezier: null;
        max: number;
        _transform: null;
        group: number;
        step: number;
        weight: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        id: string;
        weight: number;
        step: number;
        _transform: null;
        min: number;
        bezier: null;
        max: number;
        group: number;
    }[];
} | {
    id: string;
    data: {
        group: number;
        bezier: null;
        max: number;
        _transform: null;
        step: number;
        min: number;
        id: string;
        weight: number;
    }[];
} | {
    data: ({
        bezier: null;
        group: number;
        max: number;
        _transform: null;
        weight: number;
        min: number;
        id: string;
        step: number;
        dynamicPoolId: string;
    } | {
        group: number;
        step: number;
        _transform: null;
        id: string;
        bezier: null;
        max: number;
        weight: number;
        min: number;
        dynamicPoolId?: undefined;
    })[];
    id: string;
} | {
    id: string;
    data: {
        weight: number;
        step: number;
        max: number;
        id: string;
        _transform: null;
        min: number;
        bezier: null;
        group: number;
    }[];
} | {
    data: {
        step: number;
        max: number;
        min: number;
        bezier: null;
        group: number;
        weight: number;
        id: string;
        _transform: null;
    }[];
    id: string;
} | {
    id: string;
    data: {
        id: string;
        _transform: null;
        min: number;
        group: number;
        weight: number;
        step: number;
        max: number;
        bezier: null;
    }[];
} | {
    data: {
        max: number;
        step: number;
        _transform: null;
        group: number;
        id: string;
        bezier: null;
        weight: number;
        min: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        step: number;
        id: string;
        max: number;
        min: number;
        group: number;
        _transform: null;
        weight: number;
        bezier: null;
    }[];
} | {
    id: string;
    data: {
        group: number;
        min: number;
        step: number;
        weight: number;
        id: string;
        _transform: null;
        max: number;
        bezier: null;
    }[];
} | {
    id: string;
    data: {
        id: string;
        step: number;
        min: number;
        weight: number;
        group: number;
        _transform: null;
        max: number;
        bezier: null;
    }[];
} | {
    data: {
        _transform: null;
        step: number;
        group: number;
        bezier: null;
        weight: number;
        id: string;
        max: number;
        min: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        _transform: null;
        group: number;
        max: number;
        id: string;
        min: number;
        weight: number;
        step: number;
        bezier: null;
    }[];
} | {
    id: string;
    data: {
        bezier: null;
        id: string;
        _transform: null;
        min: number;
        max: number;
        step: number;
        group: number;
        weight: number;
    }[];
} | {
    data: {
        bezier: null;
        _transform: null;
        id: string;
        weight: number;
        group: number;
        min: number;
        max: number;
        step: number;
    }[];
    id: string;
} | {
    data: {
        bezier: null;
        _transform: null;
        step: number;
        id: string;
        min: number;
        weight: number;
        group: number;
        max: number;
    }[];
    id: string;
} | {
    data: {
        step: number;
        min: number;
        bezier: null;
        id: string;
        _transform: null;
        group: number;
        max: number;
        weight: number;
    }[];
    id: string;
} | {
    data: {
        step: number;
        _transform: null;
        max: number;
        id: string;
        weight: number;
        min: number;
        bezier: null;
        group: number;
    }[];
    id: string;
} | {
    data: {
        min: number;
        weight: number;
        max: number;
        bezier: null;
        group: number;
        _transform: null;
        step: number;
        id: string;
    }[];
    id: string;
} | {
    id: string;
    data: {
        group: number;
        bezier: null;
        min: number;
        step: number;
        id: string;
        weight: number;
        _transform: null;
        max: number;
    }[];
} | {
    id: string;
    data: {
        group: number;
        step: number;
        bezier: null;
        id: string;
        _transform: null;
        min: number;
        max: number;
        weight: number;
    }[];
} | {
    data: {
        group: number;
        max: number;
        step: number;
        _transform: null;
        weight: number;
        bezier: null;
        id: string;
        min: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        group: number;
        bezier: null;
        _transform: null;
        weight: number;
        id: string;
        step: number;
        min: number;
        max: number;
    }[];
} | {
    id: string;
    data: {
        min: number;
        step: number;
        group: number;
        _transform: null;
        weight: number;
        max: number;
        bezier: null;
        id: string;
    }[];
} | {
    id: string;
    data: {
        id: string;
        _transform: null;
        step: number;
        weight: number;
        min: number;
        group: number;
        bezier: null;
        max: number;
    }[];
} | {
    id: string;
    data: {
        min: number;
        group: number;
        max: number;
        bezier: null;
        id: string;
        step: number;
        _transform: null;
        weight: number;
    }[];
} | {
    data: {
        group: number;
        _transform: null;
        weight: number;
        bezier: null;
        id: string;
        min: number;
        max: number;
        step: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        bezier: null;
        id: string;
        step: number;
        weight: number;
        _transform: null;
        min: number;
        group: number;
        max: number;
    }[];
} | {
    data: {
        step: number;
        id: string;
        _transform: null;
        max: number;
        bezier: null;
        group: number;
        min: number;
        weight: number;
    }[];
    id: string;
} | {
    data: ({
        min: number;
        step: number;
        dynamicPoolId: string;
        weight: number;
        bezier: null;
        id: string;
        group: number;
        _transform: null;
        max: number;
    } | {
        min: number;
        weight: number;
        max: number;
        step: number;
        bezier: null;
        _transform: null;
        group: number;
        id: string;
        dynamicPoolId?: undefined;
    })[];
    id: string;
} | {
    id: string;
    data: {
        step: number;
        min: number;
        _transform: null;
        bezier: null;
        max: number;
        weight: number;
        group: number;
        id: string;
    }[];
} | {
    id: string;
    data: {
        group: number;
        step: number;
        bezier: null;
        max: number;
        min: number;
        id: string;
        _transform: null;
        weight: number;
    }[];
} | {
    data: {
        _transform: null;
        id: string;
        group: number;
        weight: number;
        bezier: null;
        min: number;
        max: number;
        step: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        bezier: null;
        step: number;
        _transform: null;
        max: number;
        group: number;
        id: string;
        weight: number;
        min: number;
    }[];
} | {
    id: string;
    data: {
        bezier: null;
        group: number;
        step: number;
        _transform: null;
        min: number;
        weight: number;
        id: string;
        max: number;
    }[];
} | {
    data: {
        weight: number;
        step: number;
        group: number;
        max: number;
        id: string;
        bezier: null;
        _transform: null;
        min: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        group: number;
        max: number;
        step: number;
        bezier: null;
        min: number;
        _transform: null;
        weight: number;
        id: string;
    }[];
} | {
    id: string;
    data: {
        group: number;
        max: number;
        min: number;
        bezier: null;
        weight: number;
        id: string;
        step: number;
        _transform: null;
    }[];
} | {
    data: {
        group: number;
        max: number;
        bezier: null;
        min: number;
        weight: number;
        step: number;
        id: string;
        _transform: null;
    }[];
    id: string;
} | {
    id: string;
    data: {
        group: number;
        id: string;
        weight: number;
        step: number;
        min: number;
        _transform: null;
        max: number;
        bezier: null;
    }[];
} | {
    id: string;
    data: {
        group: number;
        bezier: null;
        max: number;
        _transform: null;
        step: number;
        min: number;
        weight: number;
        id: string;
    }[];
} | {
    data: {
        max: number;
        _transform: null;
        weight: number;
        bezier: null;
        step: number;
        group: number;
        id: string;
        min: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        max: number;
        group: number;
        id: string;
        min: number;
        step: number;
        weight: number;
        bezier: null;
        _transform: null;
    }[];
} | {
    id: string;
    data: {
        _transform: null;
        id: string;
        min: number;
        bezier: null;
        group: number;
        step: number;
        weight: number;
        max: number;
    }[];
} | {
    id: string;
    data: {
        _transform: null;
        weight: number;
        group: number;
        max: number;
        id: string;
        step: number;
        bezier: null;
        min: number;
    }[];
} | {
    data: {
        id: string;
        _transform: null;
        min: number;
        weight: number;
        max: number;
        step: number;
        bezier: null;
        group: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        weight: number;
        id: string;
        min: number;
        max: number;
        step: number;
        bezier: null;
        _transform: null;
        group: number;
    }[];
} | {
    data: {
        id: string;
        group: number;
        step: number;
        _transform: null;
        max: number;
        bezier: null;
        weight: number;
        min: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        min: number;
        group: number;
        weight: number;
        bezier: null;
        id: string;
        _transform: null;
        max: number;
        step: number;
    }[];
} | {
    id: string;
    data: {
        bezier: null;
        _transform: null;
        weight: number;
        id: string;
        min: number;
        group: number;
        max: number;
        step: number;
    }[];
} | {
    id: string;
    data: ({
        id: string;
        max: number;
        weight: number;
        dynamicPoolId: string;
        bezier: null;
        _transform: null;
        step: number;
        group: number;
        min: number;
    } | {
        min: number;
        max: number;
        step: number;
        id: string;
        _transform: null;
        weight: number;
        bezier: null;
        group: number;
        dynamicPoolId?: undefined;
    })[];
} | {
    data: {
        group: number;
        weight: number;
        bezier: null;
        id: string;
        _transform: null;
        step: number;
        min: number;
        max: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        id: string;
        _transform: null;
        group: number;
        step: number;
        min: number;
        weight: number;
        max: number;
        bezier: null;
    }[];
} | {
    data: {
        step: number;
        group: number;
        bezier: null;
        _transform: null;
        weight: number;
        max: number;
        id: string;
        min: number;
    }[];
    id: string;
} | {
    data: {
        min: number;
        _transform: null;
        id: string;
        step: number;
        weight: number;
        group: number;
        max: number;
        bezier: null;
    }[];
    id: string;
} | {
    data: {
        _transform: null;
        min: number;
        max: number;
        step: number;
        group: number;
        bezier: null;
        weight: number;
        id: string;
    }[];
    id: string;
} | {
    data: {
        max: number;
        bezier: null;
        _transform: null;
        min: number;
        weight: number;
        id: string;
        group: number;
        step: number;
    }[];
    id: string;
} | {
    data: {
        id: string;
        group: number;
        min: number;
        _transform: null;
        weight: number;
        step: number;
        bezier: null;
        max: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        bezier: null;
        min: number;
        id: string;
        weight: number;
        step: number;
        max: number;
        group: number;
        _transform: null;
    }[];
} | {
    id: string;
    data: {
        max: number;
        weight: number;
        group: number;
        id: string;
        _transform: null;
        step: number;
        min: number;
        bezier: null;
    }[];
} | {
    id: string;
    data: {
        weight: number;
        id: string;
        step: number;
        min: number;
        _transform: null;
        max: number;
        group: number;
        bezier: null;
    }[];
} | {
    id: string;
    data: {
        min: number;
        group: number;
        step: number;
        max: number;
        bezier: null;
        _transform: null;
        weight: number;
        id: string;
    }[];
} | {
    data: {
        bezier: null;
        group: number;
        max: number;
        step: number;
        id: string;
        min: number;
        _transform: null;
        weight: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        min: number;
        weight: number;
        _transform: null;
        bezier: null;
        id: string;
        step: number;
        group: number;
        max: number;
    }[];
} | {
    data: {
        _transform: null;
        step: number;
        group: number;
        bezier: null;
        id: string;
        min: number;
        weight: number;
        max: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        id: string;
        weight: number;
        group: number;
        min: number;
        step: number;
        bezier: null;
        _transform: null;
        max: number;
    }[];
} | {
    data: {
        max: number;
        bezier: null;
        step: number;
        min: number;
        _transform: null;
        weight: number;
        group: number;
        id: string;
    }[];
    id: string;
} | {
    data: {
        weight: number;
        max: number;
        step: number;
        min: number;
        bezier: null;
        group: number;
        id: string;
        _transform: null;
    }[];
    id: string;
} | {
    id: string;
    data: {
        id: string;
        step: number;
        max: number;
        weight: number;
        group: number;
        min: number;
        _transform: null;
        bezier: null;
    }[];
} | {
    id: string;
    data: {
        group: number;
        max: number;
        step: number;
        id: string;
        bezier: null;
        min: number;
        weight: number;
        _transform: null;
    }[];
} | {
    id: string;
    data: ({
        max: number;
        _transform: null;
        dynamicPoolId: string;
        weight: number;
        group: number;
        bezier: null;
        id: string;
        min: number;
        step: number;
    } | {
        max: number;
        _transform: null;
        id: string;
        bezier: null;
        group: number;
        weight: number;
        min: number;
        step: number;
        dynamicPoolId?: undefined;
    })[];
} | {
    data: {
        bezier: null;
        group: number;
        step: number;
        _transform: null;
        weight: number;
        id: string;
        max: number;
        min: number;
    }[];
    id: string;
} | {
    data: {
        group: number;
        max: number;
        bezier: null;
        id: string;
        _transform: null;
        weight: number;
        min: number;
        step: number;
    }[];
    id: string;
} | {
    data: {
        _transform: null;
        max: number;
        step: number;
        min: number;
        id: string;
        bezier: null;
        group: number;
        weight: number;
    }[];
    id: string;
} | {
    data: {
        group: number;
        id: string;
        weight: number;
        step: number;
        bezier: null;
        min: number;
        _transform: null;
        max: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        bezier: null;
        group: number;
        max: number;
        id: string;
        weight: number;
        step: number;
        _transform: null;
        min: number;
    }[];
} | {
    id: string;
    data: {
        id: string;
        bezier: null;
        step: number;
        min: number;
        max: number;
        weight: number;
        group: number;
        _transform: null;
    }[];
} | {
    data: {
        bezier: null;
        id: string;
        group: number;
        step: number;
        min: number;
        max: number;
        weight: number;
        _transform: null;
    }[];
    id: string;
} | {
    data: {
        group: number;
        max: number;
        weight: number;
        min: number;
        step: number;
        _transform: null;
        bezier: null;
        id: string;
    }[];
    id: string;
} | {
    data: {
        id: string;
        bezier: null;
        _transform: null;
        min: number;
        weight: number;
        max: number;
        step: number;
        group: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        weight: number;
        _transform: null;
        group: number;
        max: number;
        id: string;
        min: number;
        step: number;
        bezier: null;
    }[];
} | {
    id: string;
    data: {
        group: number;
        id: string;
        step: number;
        _transform: null;
        bezier: null;
        min: number;
        weight: number;
        max: number;
    }[];
} | {
    data: {
        _transform: null;
        group: number;
        min: number;
        step: number;
        weight: number;
        id: string;
        max: number;
        bezier: null;
    }[];
    id: string;
} | {
    data: {
        id: string;
        bezier: null;
        min: number;
        weight: number;
        step: number;
        group: number;
        _transform: null;
        max: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        id: string;
        weight: number;
        min: number;
        step: number;
        bezier: null;
        group: number;
        _transform: null;
        max: number;
    }[];
} | {
    data: {
        _transform: null;
        bezier: null;
        min: number;
        group: number;
        id: string;
        step: number;
        weight: number;
        max: number;
    }[];
    id: string;
} | {
    data: {
        min: number;
        weight: number;
        id: string;
        group: number;
        bezier: null;
        step: number;
        max: number;
        _transform: null;
    }[];
    id: string;
} | {
    data: {
        group: number;
        bezier: null;
        step: number;
        _transform: null;
        id: string;
        weight: number;
        min: number;
        max: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        max: number;
        group: number;
        bezier: null;
        _transform: null;
        min: number;
        id: string;
        weight: number;
        step: number;
    }[];
} | {
    data: {
        max: number;
        _transform: null;
        group: number;
        bezier: null;
        id: string;
        weight: number;
        step: number;
        min: number;
    }[];
    id: string;
} | {
    id: string;
    data: ({
        max: number;
        step: number;
        _transform: null;
        weight: number;
        id: string;
        dynamicPoolId: string;
        min: number;
        group: number;
        bezier: null;
    } | {
        weight: number;
        step: number;
        bezier: null;
        id: string;
        min: number;
        max: number;
        group: number;
        _transform: null;
        dynamicPoolId?: undefined;
    })[];
} | {
    id: string;
    data: {
        max: number;
        id: string;
        weight: number;
        min: number;
        group: number;
        _transform: null;
        step: number;
        bezier: null;
    }[];
} | {
    id: string;
    data: {
        group: number;
        min: number;
        weight: number;
        step: number;
        _transform: null;
        bezier: null;
        id: string;
        max: number;
    }[];
} | {
    id: string;
    data: {
        group: number;
        weight: number;
        step: number;
        _transform: null;
        id: string;
        min: number;
        bezier: null;
        max: number;
    }[];
} | {
    id: string;
    data: {
        min: number;
        bezier: null;
        _transform: null;
        group: number;
        weight: number;
        id: string;
        max: number;
        step: number;
    }[];
} | {
    id: string;
    data: {
        group: number;
        step: number;
        bezier: null;
        weight: number;
        max: number;
        id: string;
        min: number;
        _transform: null;
    }[];
} | {
    id: string;
    data: {
        weight: number;
        max: number;
        _transform: null;
        step: number;
        bezier: null;
        min: number;
        group: number;
        id: string;
    }[];
} | {
    id: string;
    data: {
        min: number;
        id: string;
        weight: number;
        group: number;
        _transform: null;
        max: number;
        bezier: null;
        step: number;
    }[];
} | {
    id: string;
    data: {
        group: number;
        max: number;
        bezier: null;
        weight: number;
        _transform: null;
        min: number;
        step: number;
        id: null;
    }[];
} | {
    id: string;
    data: ({
        group: number;
        step: number;
        _transform: null;
        dynamicPoolId: string;
        bezier: null;
        min: number;
        weight: number;
        id: string;
        max: number;
    } | {
        _transform: null;
        weight: number;
        group: number;
        bezier: null;
        id: string;
        min: number;
        step: number;
        max: number;
        dynamicPoolId?: undefined;
    })[];
} | {
    data: ({
        id: string;
        min: number;
        dynamicPoolId: string;
        bezier: null;
        weight: number;
        step: number;
        group: number;
        _transform: null;
        max: number;
    } | {
        max: number;
        step: number;
        bezier: null;
        min: number;
        _transform: null;
        weight: number;
        group: number;
        id: string;
        dynamicPoolId?: undefined;
    } | {
        id: null;
        min: number;
        weight: number;
        bezier: null;
        max: number;
        _transform: null;
        step: number;
        group: number;
        dynamicPoolId?: undefined;
    })[];
    id: string;
} | {
    data: ({
        group: number;
        weight: number;
        max: number;
        id: string;
        _transform: null;
        step: number;
        min: number;
        bezier: null;
    } | {
        id: null;
        min: number;
        _transform: null;
        max: number;
        step: number;
        group: number;
        weight: number;
        bezier: null;
    })[];
    id: string;
} | {
    id: string;
    data: ({
        _transform: null;
        bezier: null;
        step: number;
        id: string;
        group: number;
        min: number;
        weight: number;
        max: number;
    } | {
        step: number;
        _transform: null;
        min: number;
        bezier: null;
        group: number;
        weight: number;
        max: number;
        id: null;
    })[];
} | {
    data: ({
        group: number;
        weight: number;
        step: number;
        max: number;
        bezier: null;
        id: string;
        min: number;
        _transform: null;
    } | {
        max: number;
        step: number;
        id: null;
        min: number;
        _transform: null;
        bezier: null;
        weight: number;
        group: number;
    })[];
    id: string;
} | {
    data: ({
        id: string;
        min: number;
        step: number;
        group: number;
        bezier: null;
        weight: number;
        max: number;
        _transform: null;
    } | {
        group: number;
        _transform: null;
        weight: number;
        id: null;
        bezier: null;
        max: number;
        min: number;
        step: number;
    })[];
    id: string;
} | {
    id: string;
    data: {
        bezier: null;
        _transform: null;
        min: number;
        weight: number;
        id: string;
        max: number;
        group: number;
        step: number;
    }[];
} | {
    id: string;
    data: ({
        max: number;
        step: number;
        weight: number;
        group: number;
        min: number;
        bezier: null;
        dynamicPoolId: string;
        id: string;
        _transform: null;
    } | {
        group: number;
        bezier: null;
        step: number;
        id: string;
        min: number;
        _transform: null;
        weight: number;
        max: number;
        dynamicPoolId?: undefined;
    })[];
} | {
    id: string;
    data: {
        min: number;
        _transform: null;
        max: number;
        bezier: null;
        group: number;
        step: number;
        id: string;
        weight: number;
    }[];
} | {
    data: {
        min: number;
        id: string;
        step: number;
        weight: number;
        bezier: null;
        _transform: null;
        group: number;
        max: number;
    }[];
    id: string;
} | {
    data: {
        min: number;
        _transform: null;
        max: number;
        step: number;
        group: number;
        id: string;
        bezier: null;
        weight: number;
    }[];
    id: string;
} | {
    data: {
        _transform: null;
        max: number;
        bezier: null;
        id: string;
        group: number;
        step: number;
        weight: number;
        min: number;
    }[];
    id: string;
} | {
    data: {
        min: number;
        bezier: null;
        id: string;
        max: number;
        weight: number;
        step: number;
        _transform: null;
        group: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        bezier: null;
        step: number;
        min: number;
        group: number;
        _transform: null;
        weight: number;
        max: number;
        id: string;
    }[];
} | {
    id: string;
    data: {
        step: number;
        min: number;
        bezier: null;
        id: string;
        weight: number;
        max: number;
        group: number;
        _transform: null;
    }[];
} | {
    id: string;
    data: {
        bezier: null;
        _transform: null;
        min: number;
        max: number;
        group: number;
        step: number;
        id: string;
        weight: number;
    }[];
} | {
    data: {
        min: number;
        id: string;
        _transform: null;
        weight: number;
        max: number;
        step: number;
        group: number;
        bezier: null;
    }[];
    id: string;
} | {
    id: string;
    data: {
        max: number;
        id: string;
        weight: number;
        _transform: null;
        step: number;
        group: number;
        bezier: null;
        min: number;
    }[];
} | {
    data: {
        _transform: null;
        min: number;
        step: number;
        bezier: null;
        weight: number;
        id: string;
        max: number;
        group: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        weight: number;
        group: number;
        bezier: null;
        id: string;
        step: number;
        min: number;
        _transform: null;
        max: number;
    }[];
} | {
    id: string;
    data: {
        min: number;
        group: number;
        step: number;
        max: number;
        bezier: null;
        _transform: null;
        id: string;
        weight: number;
    }[];
} | {
    id: string;
    data: {
        max: number;
        _transform: null;
        weight: number;
        id: string;
        min: number;
        step: number;
        group: number;
        bezier: null;
    }[];
} | {
    id: string;
    data: {
        group: number;
        bezier: null;
        weight: number;
        max: number;
        min: number;
        id: string;
        step: number;
        _transform: null;
    }[];
} | {
    data: {
        max: number;
        group: number;
        step: number;
        weight: number;
        _transform: null;
        bezier: null;
        id: string;
        min: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        step: number;
        min: number;
        weight: number;
        bezier: null;
        max: number;
        group: number;
        _transform: null;
        id: string;
    }[];
} | {
    id: string;
    data: {
        bezier: null;
        _transform: null;
        id: string;
        max: number;
        group: number;
        weight: number;
        min: number;
        step: number;
    }[];
} | {
    id: string;
    data: {
        _transform: null;
        weight: number;
        max: number;
        group: number;
        bezier: null;
        id: string;
        min: number;
        step: number;
    }[];
} | {
    id: string;
    data: {
        group: number;
        _transform: null;
        max: number;
        step: number;
        bezier: null;
        id: string;
        weight: number;
        min: number;
    }[];
} | {
    id: string;
    data: {
        _transform: null;
        bezier: null;
        step: number;
        id: string;
        min: number;
        weight: number;
        group: number;
        max: number;
    }[];
} | {
    data: {
        bezier: null;
        min: number;
        step: number;
        weight: number;
        _transform: null;
        id: string;
        max: number;
        group: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        group: number;
        _transform: null;
        bezier: null;
        min: number;
        max: number;
        step: number;
        id: string;
        weight: number;
    }[];
} | {
    data: {
        id: string;
        group: number;
        min: number;
        max: number;
        bezier: null;
        step: number;
        weight: number;
        _transform: null;
    }[];
    id: string;
} | {
    data: {
        min: number;
        bezier: null;
        id: string;
        max: number;
        weight: number;
        step: number;
        _transform: null;
        group: number;
    }[];
    id: string;
} | {
    updatedAt: {
        _seconds: number;
        _nanoseconds: number;
    };
    id: string;
    data: ({
        id: string;
        bezier: null;
        min: number;
        group: number;
        weight: number;
        max: number;
        step: number;
        dynamicPoolId: string;
        _transform: null;
    } | {
        weight: number;
        dynamicPoolId: string;
        max: number;
        min: number;
        group: number;
        step: number;
        id: string;
        bezier?: undefined;
        _transform?: undefined;
    })[];
} | {
    id: string;
    data: ({
        group: number;
        step: number;
        bezier: null;
        min: number;
        _transform: null;
        max: number;
        weight: number;
        id: string;
        dynamicPoolId?: undefined;
    } | {
        max: number;
        step: number;
        min: number;
        dynamicPoolId: null;
        id: string;
        weight: number;
        group: number;
        bezier?: undefined;
        _transform?: undefined;
    })[];
    updatedAt: {
        _seconds: number;
        _nanoseconds: number;
    };
} | {
    data: ({
        bezier: null;
        group: number;
        max: number;
        id: string;
        _transform: null;
        weight: number;
        min: number;
        step: number;
        dynamicPoolId?: undefined;
    } | {
        min: number;
        bezier: null;
        max: number;
        step: number;
        group: number;
        id: string;
        _transform: null;
        dynamicPoolId: string;
        weight: number;
    } | {
        _transform: null;
        weight: number;
        bezier: null;
        group: number;
        step: number;
        max: number;
        min: number;
        id: null;
        dynamicPoolId?: undefined;
    })[];
    id: string;
} | {
    data: {
        weight: number;
        step: number;
        _transform: null;
        max: number;
        min: number;
        bezier: null;
        group: number;
        id: string;
    }[];
    id: string;
} | {
    id: string;
    data: ({
        step: number;
        id: string;
        bezier: null;
        _transform: null;
        max: number;
        min: number;
        weight: number;
        group: number;
    } | {
        _transform: null;
        weight: number;
        min: number;
        id: null;
        group: number;
        max: number;
        step: number;
        bezier: null;
    })[];
} | {
    id: string;
    data: {
        min: number;
        max: number;
        _transform: null;
        id: string;
        group: number;
        bezier: null;
        step: number;
        weight: number;
    }[];
} | {
    data: {
        bezier: null;
        min: number;
        group: number;
        _transform: null;
        weight: number;
        max: number;
        step: number;
        id: string;
    }[];
    id: string;
} | {
    id: string;
    data: ({
        dynamicPoolId: string;
        _transform: null;
        max: number;
        weight: number;
        id: string;
        min: number;
        bezier: null;
        step: number;
        group: number;
    } | {
        _transform: null;
        bezier: null;
        step: number;
        group: number;
        min: number;
        id: string;
        weight: number;
        max: number;
        dynamicPoolId?: undefined;
    })[];
} | {
    data: ({
        step: number;
        weight: number;
        dynamicPoolId: string;
        min: number;
        id: string;
        bezier: null;
        _transform: null;
        group: number;
        max: number;
    } | {
        bezier: null;
        step: number;
        group: number;
        max: number;
        weight: number;
        min: number;
        _transform: null;
        id: string;
        dynamicPoolId?: undefined;
    })[];
    id: string;
} | {
    data: ({
        group: number;
        max: number;
        dynamicPoolId: string;
        id: string;
        step: number;
        weight: number;
        _transform: null;
        min: number;
        bezier: null;
    } | {
        step: number;
        group: number;
        max: number;
        weight: number;
        min: number;
        bezier: null;
        _transform: null;
        id: string;
        dynamicPoolId?: undefined;
    })[];
    id: string;
} | {
    data: ({
        step: number;
        weight: number;
        min: number;
        dynamicPoolId: string;
        group: number;
        max: number;
        bezier: null;
        id: string;
        _transform: null;
    } | {
        group: number;
        _transform: null;
        bezier: null;
        step: number;
        min: number;
        id: string;
        weight: number;
        max: number;
        dynamicPoolId?: undefined;
    })[];
    id: string;
} | {
    data: ({
        step: number;
        id: string;
        weight: number;
        min: number;
        dynamicPoolId: string;
        _transform: null;
        group: number;
        max: number;
        bezier: null;
    } | {
        group: number;
        _transform: null;
        max: number;
        bezier: null;
        weight: number;
        step: number;
        min: number;
        id: string;
        dynamicPoolId?: undefined;
    })[];
    id: string;
} | {
    id: string;
    data: {
        max: number;
        group: number;
        id: string;
        weight: number;
        _transform: null;
        step: number;
        bezier: null;
        min: number;
    }[];
} | {
    id: string;
    data: ({
        id: string;
        min: number;
        _transform: null;
        dynamicPoolId: string;
        group: number;
        weight: number;
        bezier: null;
        max: number;
        step: number;
    } | {
        group: number;
        weight: number;
        bezier: null;
        max: number;
        _transform: null;
        step: number;
        min: number;
        id: string;
        dynamicPoolId?: undefined;
    })[];
} | {
    id: string;
    data: ({
        min: number;
        weight: number;
        dynamicPoolId: string;
        max: number;
        _transform: null;
        step: number;
        group: number;
        bezier: null;
        id: string;
    } | {
        step: number;
        group: number;
        max: number;
        weight: number;
        min: number;
        bezier: null;
        _transform: null;
        id: string;
        dynamicPoolId?: undefined;
    })[];
} | {
    id: string;
    data: ({
        id: string;
        group: number;
        max: number;
        weight: number;
        _transform: null;
        min: number;
        bezier: null;
        step: number;
        dynamicPoolId: string;
    } | {
        max: number;
        bezier: null;
        id: string;
        step: number;
        group: number;
        min: number;
        weight: number;
        _transform: null;
        dynamicPoolId?: undefined;
    })[];
} | {
    data: {
        _transform: null;
        step: number;
        group: number;
        bezier: null;
        min: number;
        id: string;
        max: number;
        weight: number;
    }[];
    id: string;
} | {
    data: {
        _transform: null;
        bezier: null;
        max: number;
        weight: number;
        min: number;
        group: number;
        id: string;
        step: number;
    }[];
    id: string;
} | {
    data: {
        bezier: null;
        group: number;
        weight: number;
        id: string;
        min: number;
        step: number;
        max: number;
        _transform: null;
    }[];
    id: string;
} | {
    data: {
        step: number;
        group: number;
        bezier: null;
        _transform: null;
        min: number;
        weight: number;
        max: number;
        id: string;
    }[];
    id: string;
} | {
    id: string;
    data: {
        bezier: null;
        weight: number;
        step: number;
        group: number;
        min: number;
        max: number;
        id: string;
        _transform: null;
    }[];
} | {
    data: {
        id: string;
        group: number;
        step: number;
        min: number;
        bezier: null;
        weight: number;
        _transform: null;
        max: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        bezier: null;
        _transform: null;
        step: number;
        group: number;
        weight: number;
        id: string;
        max: number;
        min: number;
    }[];
} | {
    updatedAt: {
        _seconds: number;
        _nanoseconds: number;
    };
    createdAt: {
        _seconds: number;
        _nanoseconds: number;
    };
    id: string;
    data: {
        dynamicPoolId: null;
        min: number;
        max: number;
        id: string;
        step: number;
        group: number;
        weight: number;
    }[];
} | {
    id: string;
    data: {
        group: number;
        max: number;
        step: number;
        _transform: null;
        id: string;
        bezier: null;
        min: number;
        weight: number;
    }[];
} | {
    data: ({
        weight: number;
        min: number;
        bezier: null;
        step: number;
        id: string;
        _transform: null;
        group: number;
        max: number;
        dynamicPoolId?: undefined;
    } | {
        max: number;
        id: string;
        group: number;
        _transform: null;
        step: number;
        bezier: null;
        weight: number;
        min: number;
        dynamicPoolId: string;
    } | {
        group: number;
        max: number;
        id: null;
        bezier: null;
        step: number;
        weight: number;
        min: number;
        _transform: null;
        dynamicPoolId?: undefined;
    })[];
    id: string;
} | {
    data: ({
        dynamicPoolId: string;
        min: number;
        max: number;
        weight: number;
        bezier: null;
        group: number;
        step: number;
        id: string;
        _transform: null;
    } | {
        weight: number;
        max: number;
        group: number;
        step: number;
        id: string;
        min: number;
        bezier: null;
        _transform: null;
        dynamicPoolId?: undefined;
    })[];
    id: string;
} | {
    data: ({
        id: string;
        weight: number;
        bezier: null;
        step: number;
        dynamicPoolId: string;
        min: number;
        _transform: null;
        group: number;
        max: number;
    } | {
        max: number;
        weight: number;
        group: number;
        id: string;
        _transform: null;
        step: number;
        bezier: null;
        min: number;
        dynamicPoolId?: undefined;
    })[];
    id: string;
} | {
    id: string;
    data: ({
        dynamicPoolId: string;
        id: string;
        _transform: null;
        min: number;
        step: number;
        bezier: null;
        weight: number;
        max: number;
        group: number;
    } | {
        group: number;
        min: number;
        id: string;
        max: number;
        step: number;
        _transform: null;
        weight: number;
        bezier: null;
        dynamicPoolId?: undefined;
    })[];
} | {
    id: string;
    data: {
        bezier: null;
        _transform: null;
        min: number;
        id: string;
        group: number;
        step: number;
        max: number;
        weight: number;
    }[];
} | {
    id: string;
    data: {
        max: number;
        id: string;
        weight: number;
        bezier: null;
        min: number;
        _transform: null;
        group: number;
        step: number;
    }[];
} | {
    data: {
        bezier: null;
        _transform: null;
        min: number;
        weight: number;
        max: number;
        id: string;
        group: number;
        step: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        min: number;
        group: number;
        bezier: null;
        id: string;
        weight: number;
        step: number;
        max: number;
        _transform: null;
    }[];
} | {
    data: {
        group: number;
        id: string;
        max: number;
        step: number;
        min: number;
        bezier: null;
        weight: number;
        _transform: null;
    }[];
    id: string;
} | {
    id: string;
    data: {
        min: number;
        step: number;
        bezier: null;
        id: string;
        max: number;
        weight: number;
        _transform: null;
        group: number;
    }[];
} | {
    id: string;
    data: {
        bezier: null;
        weight: number;
        group: number;
        max: number;
        step: number;
        min: number;
        id: string;
        _transform: null;
    }[];
} | {
    id: string;
    data: {
        bezier: null;
        min: number;
        step: number;
        group: number;
        _transform: null;
        max: number;
        id: string;
        weight: number;
    }[];
} | {
    data: {
        id: string;
        weight: number;
        min: number;
        group: number;
        max: number;
        step: number;
        bezier: null;
        _transform: null;
    }[];
    id: string;
} | {
    data: {
        min: number;
        max: number;
        weight: number;
        _transform: null;
        step: number;
        id: string;
        group: number;
        bezier: null;
    }[];
    id: string;
} | {
    data: {
        group: number;
        min: number;
        max: number;
        _transform: null;
        bezier: null;
        id: string;
        weight: number;
        step: number;
    }[];
    id: string;
} | {
    data: {
        min: number;
        group: number;
        bezier: null;
        id: string;
        weight: number;
        max: number;
        _transform: null;
        step: number;
    }[];
    id: string;
} | {
    data: {
        group: number;
        min: number;
        max: number;
        _transform: null;
        weight: number;
        step: number;
        id: string;
        bezier: null;
    }[];
    id: string;
} | {
    id: string;
    data: {
        min: number;
        step: number;
        _transform: null;
        max: number;
        bezier: null;
        id: string;
        group: number;
        weight: number;
    }[];
} | {
    id: string;
    data: {
        _transform: null;
        bezier: null;
        min: number;
        step: number;
        max: number;
        id: string;
        weight: number;
        group: number;
    }[];
} | {
    data: {
        max: number;
        min: number;
        id: string;
        weight: number;
        group: number;
        _transform: null;
        step: number;
        bezier: null;
    }[];
    id: string;
} | {
    id: string;
    data: {
        group: number;
        weight: number;
        step: number;
        max: number;
        bezier: null;
        id: string;
        min: number;
        _transform: null;
    }[];
} | {
    data: {
        bezier: null;
        _transform: null;
        step: number;
        id: string;
        min: number;
        max: number;
        weight: number;
        group: number;
    }[];
    id: string;
} | {
    data: {
        _transform: null;
        max: number;
        weight: number;
        bezier: null;
        min: number;
        step: number;
        group: number;
        id: string;
    }[];
    id: string;
} | {
    data: ({
        group: number;
        min: number;
        step: number;
        max: number;
        id: string;
        _transform: null;
        weight: number;
        bezier: null;
    } | {
        max: number;
        weight: number;
        step: number;
        group: number;
        _transform: null;
        id: null;
        min: number;
        bezier: null;
    })[];
    id: string;
} | {
    id: string;
    data: ({
        group: number;
        _transform: null;
        max: number;
        id: string;
        step: number;
        bezier: null;
        min: number;
        weight: number;
    } | {
        bezier: null;
        _transform: null;
        max: number;
        min: number;
        weight: number;
        id: null;
        group: number;
        step: number;
    })[];
} | {
    data: ({
        group: number;
        id: string;
        _transform: null;
        max: number;
        bezier: null;
        min: number;
        weight: number;
        step: number;
    } | {
        _transform: null;
        step: number;
        id: null;
        min: number;
        weight: number;
        bezier: null;
        max: number;
        group: number;
    })[];
    id: string;
} | {
    data: ({
        _transform: null;
        weight: number;
        id: string;
        bezier: null;
        step: number;
        group: number;
        min: number;
        max: number;
    } | {
        min: number;
        step: number;
        _transform: null;
        weight: number;
        max: number;
        group: number;
        id: null;
        bezier: null;
    })[];
    id: string;
} | {
    data: ({
        max: number;
        bezier: null;
        min: number;
        id: string;
        _transform: null;
        weight: number;
        group: number;
        step: number;
    } | {
        weight: number;
        bezier: null;
        id: null;
        min: number;
        step: number;
        group: number;
        max: number;
        _transform: null;
    })[];
    id: string;
} | {
    id: string;
    data: ({
        weight: number;
        max: number;
        _transform: null;
        min: number;
        group: number;
        bezier: null;
        step: number;
        id: string;
    } | {
        bezier: null;
        id: null;
        _transform: null;
        weight: number;
        group: number;
        min: number;
        max: number;
        step: number;
    })[];
} | {
    data: {
        step: number;
        id: string;
        weight: number;
        max: number;
        _transform: null;
        min: number;
        group: number;
        bezier: null;
    }[];
    id: string;
} | {
    id: string;
    data: ({
        bezier: null;
        _transform: null;
        min: number;
        max: number;
        id: string;
        group: number;
        weight: number;
        step: number;
    } | {
        min: number;
        weight: number;
        group: number;
        step: number;
        bezier: null;
        _transform: null;
        max: number;
        id: null;
    })[];
} | {
    id: string;
    data: ({
        min: number;
        _transform: null;
        weight: number;
        bezier: null;
        group: number;
        max: number;
        step: number;
        id: string;
    } | {
        weight: number;
        min: number;
        bezier: null;
        step: number;
        group: number;
        id: null;
        _transform: null;
        max: number;
    })[];
} | {
    id: string;
    data: ({
        id: string;
        weight: number;
        step: number;
        _transform: null;
        min: number;
        bezier: null;
        group: number;
        max: number;
    } | {
        step: number;
        weight: number;
        id: null;
        _transform: null;
        max: number;
        group: number;
        bezier: null;
        min: number;
    })[];
} | {
    id: string;
    data: ({
        weight: number;
        max: number;
        id: string;
        step: number;
        min: number;
        group: number;
        _transform: null;
        bezier: null;
    } | {
        group: number;
        weight: number;
        bezier: null;
        id: null;
        max: number;
        step: number;
        _transform: null;
        min: number;
    })[];
} | {
    id: string;
    data: ({
        weight: number;
        _transform: null;
        min: number;
        group: number;
        max: number;
        bezier: null;
        id: string;
        step: number;
    } | {
        weight: number;
        group: number;
        bezier: null;
        _transform: null;
        step: number;
        min: number;
        max: number;
        id: null;
    })[];
} | {
    data: ({
        group: number;
        bezier: null;
        weight: number;
        _transform: null;
        min: number;
        max: number;
        step: number;
        id: string;
    } | {
        group: number;
        _transform: null;
        id: null;
        weight: number;
        bezier: null;
        max: number;
        step: number;
        min: number;
    })[];
    id: string;
} | {
    data: {
        group: number;
        id: string;
        bezier: null;
        step: number;
        max: number;
        _transform: null;
        weight: number;
        dynamicPoolId: string;
        min: number;
    }[];
    id: string;
} | {
    data: {
        bezier: null;
        weight: number;
        step: number;
        _transform: null;
        min: number;
        group: number;
        id: string;
        max: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        id: string;
        step: number;
        bezier: null;
        weight: number;
        max: number;
        _transform: null;
        min: number;
        group: number;
    }[];
} | {
    data: ({
        dynamicPoolId: string;
        group: number;
        min: number;
        bezier: null;
        max: number;
        weight: number;
        _transform: null;
        step: number;
        id: string;
    } | {
        min: number;
        weight: number;
        id: string;
        max: number;
        step: number;
        bezier: null;
        _transform: null;
        group: number;
        dynamicPoolId?: undefined;
    })[];
    id: string;
} | {
    id: string;
    data: ({
        id: string;
        max: number;
        dynamicPoolId: string;
        bezier: null;
        min: number;
        step: number;
        group: number;
        _transform: null;
        weight: number;
    } | {
        step: number;
        _transform: null;
        group: number;
        id: string;
        max: number;
        weight: number;
        min: number;
        bezier: null;
        dynamicPoolId?: undefined;
    })[];
} | {
    id: string;
    data: {
        min: number;
        group: number;
        weight: number;
        id: string;
        max: number;
        step: number;
        bezier: null;
        _transform: null;
    }[];
} | {
    data: {
        _transform: null;
        step: number;
        max: number;
        weight: number;
        bezier: null;
        id: string;
        group: number;
        min: number;
    }[];
    id: string;
} | {
    data: {
        bezier: null;
        min: number;
        max: number;
        id: string;
        _transform: null;
        weight: number;
        step: number;
        group: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        bezier: null;
        _transform: null;
        step: number;
        min: number;
        max: number;
        group: number;
        id: string;
        weight: number;
    }[];
} | {
    data: {
        min: number;
        step: number;
        group: number;
        id: string;
        max: number;
        _transform: null;
        bezier: null;
        weight: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        bezier: null;
        weight: number;
        id: string;
        max: number;
        _transform: null;
        group: number;
        min: number;
        step: number;
    }[];
} | {
    id: string;
    data: {
        bezier: null;
        weight: number;
        min: number;
        step: number;
        group: number;
        max: number;
        _transform: null;
        id: string;
    }[];
} | {
    id: string;
    data: {
        id: string;
        _transform: null;
        weight: number;
        min: number;
        group: number;
        max: number;
        step: number;
        bezier: null;
    }[];
} | {
    data: {
        id: string;
        min: number;
        step: number;
        group: number;
        _transform: null;
        weight: number;
        bezier: null;
        max: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        bezier: null;
        group: number;
        id: string;
        weight: number;
        min: number;
        step: number;
        _transform: null;
        max: number;
    }[];
} | {
    data: {
        bezier: null;
        weight: number;
        id: string;
        _transform: null;
        group: number;
        max: number;
        min: number;
        step: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        max: number;
        group: number;
        _transform: null;
        weight: number;
        bezier: null;
        min: number;
        id: string;
        step: number;
    }[];
} | {
    data: {
        group: number;
        min: number;
        id: string;
        step: number;
        _transform: null;
        max: number;
        weight: number;
        bezier: null;
    }[];
    id: string;
} | {
    data: {
        weight: number;
        bezier: null;
        _transform: null;
        id: string;
        step: number;
        group: number;
        min: number;
        max: number;
    }[];
    id: string;
} | {
    data: {
        max: number;
        weight: number;
        bezier: null;
        id: string;
        step: number;
        group: number;
        _transform: null;
        min: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        step: number;
        bezier: null;
        _transform: null;
        group: number;
        weight: number;
        min: number;
        id: string;
        max: number;
    }[];
} | {
    id: string;
    data: {
        max: number;
        min: number;
        group: number;
        step: number;
        bezier: null;
        _transform: null;
        weight: number;
        id: string;
    }[];
} | {
    id: string;
    data: {
        _transform: null;
        min: number;
        max: number;
        step: number;
        group: number;
        bezier: null;
        weight: number;
        id: string;
    }[];
} | {
    data: {
        max: number;
        step: number;
        id: string;
        min: number;
        bezier: null;
        group: number;
        _transform: null;
        weight: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        min: number;
        max: number;
        group: number;
        id: string;
        step: number;
        _transform: null;
        weight: number;
        bezier: null;
    }[];
} | {
    id: string;
    data: {
        group: number;
        bezier: null;
        _transform: null;
        weight: number;
        step: number;
        max: number;
        id: string;
        min: number;
    }[];
} | {
    data: {
        group: number;
        weight: number;
        id: string;
        min: number;
        _transform: null;
        max: number;
        bezier: null;
        step: number;
    }[];
    id: string;
} | {
    data: {
        weight: number;
        min: number;
        step: number;
        bezier: null;
        group: number;
        max: number;
        id: string;
        _transform: null;
    }[];
    id: string;
} | {
    id: string;
    data: {
        group: number;
        bezier: null;
        min: number;
        id: string;
        _transform: null;
        weight: number;
        max: number;
        step: number;
    }[];
} | {
    data: {
        id: string;
        weight: number;
        bezier: null;
        min: number;
        step: number;
        max: number;
        _transform: null;
        group: number;
    }[];
    id: string;
} | {
    id: string;
    updatedAt: {
        _seconds: number;
        _nanoseconds: number;
    };
    data: ({
        dynamicPoolId: string;
        group: number;
        min: number;
        id: string;
        _transform: null;
        step: number;
        weight: number;
        bezier: null;
        max: number;
    } | {
        min: number;
        weight: number;
        step: number;
        group: number;
        dynamicPoolId: string;
        id: string;
        max: number;
        _transform?: undefined;
        bezier?: undefined;
    })[];
} | {
    updatedAt: {
        _seconds: number;
        _nanoseconds: number;
    };
    data: ({
        step: number;
        group: number;
        id: string;
        bezier: null;
        min: number;
        _transform: null;
        max: number;
        weight: number;
        dynamicPoolId?: undefined;
    } | {
        id: string;
        weight: number;
        max: number;
        group: number;
        dynamicPoolId: string;
        min: number;
        step: number;
        bezier?: undefined;
        _transform?: undefined;
    })[];
    id: string;
} | {
    id: string;
    data: ({
        max: number;
        min: number;
        group: number;
        bezier: null;
        id: string;
        step: number;
        weight: number;
        _transform: null;
        dynamicPoolId?: undefined;
    } | {
        step: number;
        max: number;
        dynamicPoolId: string;
        group: number;
        id: string;
        min: number;
        bezier: null;
        weight: number;
        _transform: null;
    } | {
        max: number;
        id: null;
        weight: number;
        group: number;
        _transform: null;
        bezier: null;
        min: number;
        step: number;
        dynamicPoolId?: undefined;
    })[];
} | {
    data: ({
        step: number;
        group: number;
        bezier: null;
        max: number;
        _transform: null;
        min: number;
        id: string;
        weight: number;
        dynamicPoolId?: undefined;
    } | {
        step: number;
        _transform: null;
        group: number;
        min: number;
        dynamicPoolId: string;
        bezier: null;
        max: number;
        id: string;
        weight: number;
    } | {
        weight: number;
        group: number;
        step: number;
        _transform: null;
        id: null;
        max: number;
        bezier: null;
        min: number;
        dynamicPoolId?: undefined;
    })[];
    id: string;
} | {
    id: string;
    data: {
        group: number;
        _transform: null;
        min: number;
        id: string;
        max: number;
        step: number;
        weight: number;
        bezier: null;
    }[];
} | {
    id: string;
    data: {
        min: number;
        bezier: null;
        step: number;
        group: number;
        id: string;
        _transform: null;
        max: number;
        weight: number;
    }[];
} | {
    data: {
        bezier: null;
        step: number;
        id: string;
        _transform: null;
        weight: number;
        max: number;
        min: number;
        group: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        min: number;
        max: number;
        id: string;
        _transform: null;
        weight: number;
        step: number;
        group: number;
        bezier: null;
    }[];
} | {
    id: string;
    data: {
        bezier: null;
        max: number;
        weight: number;
        group: number;
        id: string;
        step: number;
        _transform: null;
        min: number;
    }[];
} | {
    id: string;
    data: {
        bezier: null;
        min: number;
        max: number;
        id: string;
        weight: number;
        step: number;
        group: number;
        _transform: null;
    }[];
} | {
    id: string;
    data: {
        id: string;
        max: number;
        group: number;
        bezier: null;
        step: number;
        weight: number;
        min: number;
        _transform: null;
    }[];
} | {
    id: string;
    data: {
        _transform: null;
        max: number;
        id: string;
        bezier: null;
        min: number;
        step: number;
        group: number;
        weight: number;
    }[];
} | {
    data: {
        group: number;
        step: number;
        bezier: null;
        id: string;
        _transform: null;
        max: number;
        weight: number;
        min: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        bezier: null;
        group: number;
        weight: number;
        step: number;
        _transform: null;
        id: string;
        min: number;
        max: number;
    }[];
} | {
    data: {
        _transform: null;
        bezier: null;
        group: number;
        weight: number;
        max: number;
        id: string;
        step: number;
        min: number;
    }[];
    id: string;
} | {
    data: {
        max: number;
        step: number;
        bezier: null;
        id: string;
        weight: number;
        min: number;
        _transform: null;
        group: number;
    }[];
    id: string;
} | {
    id: string;
    data: ({
        step: number;
        id: string;
        weight: number;
        bezier: null;
        _transform: null;
        min: number;
        group: number;
        max: number;
    } | {
        weight: number;
        min: number;
        group: number;
        id: null;
        _transform: null;
        bezier: null;
        max: number;
        step: number;
    })[];
} | {
    id: string;
    data: {
        min: number;
        weight: number;
        step: number;
        group: number;
        bezier: null;
        id: string;
        max: number;
        _transform: null;
    }[];
} | {
    id: string;
    data: {
        step: number;
        min: number;
        max: number;
        group: number;
        weight: number;
        bezier: null;
        id: string;
        _transform: null;
    }[];
} | {
    data: {
        step: number;
        max: number;
        _transform: null;
        weight: number;
        id: string;
        bezier: null;
        group: number;
        min: number;
    }[];
    id: string;
} | {
    data: {
        step: number;
        min: number;
        weight: number;
        bezier: null;
        max: number;
        id: string;
        group: number;
        _transform: null;
    }[];
    id: string;
} | {
    id: string;
    data: {
        _transform: null;
        min: number;
        step: number;
        bezier: null;
        id: string;
        weight: number;
        group: number;
        max: number;
    }[];
} | {
    id: string;
    data: {
        min: number;
        step: number;
        bezier: null;
        _transform: null;
        max: number;
        id: string;
        group: number;
        weight: number;
    }[];
} | {
    id: string;
    data: {
        _transform: null;
        min: number;
        bezier: null;
        weight: number;
        group: number;
        max: number;
        step: number;
        id: string;
    }[];
} | {
    id: string;
    data: {
        id: string;
        weight: number;
        group: number;
        _transform: null;
        min: number;
        bezier: null;
        step: number;
        max: number;
    }[];
} | {
    data: {
        max: number;
        group: number;
        min: number;
        step: number;
        _transform: null;
        weight: number;
        id: string;
        bezier: null;
    }[];
    id: string;
} | {
    id: string;
    data: {
        bezier: null;
        step: number;
        min: number;
        _transform: null;
        group: number;
        weight: number;
        max: number;
        id: string;
    }[];
} | {
    data: ({
        weight: number;
        bezier: null;
        step: number;
        group: number;
        max: number;
        _transform: null;
        min: number;
        id: string;
        dynamicPoolId?: undefined;
    } | {
        bezier: null;
        min: number;
        weight: number;
        id: null;
        max: number;
        step: number;
        _transform: null;
        group: number;
        dynamicPoolId?: undefined;
    } | {
        min: number;
        bezier: null;
        id: string;
        step: number;
        group: number;
        dynamicPoolId: string;
        _transform: null;
        weight: number;
        max: number;
    })[];
    id: string;
} | {
    data: {
        max: number;
        step: number;
        _transform: null;
        weight: number;
        group: number;
        id: string;
        min: number;
        bezier: null;
    }[];
    id: string;
} | {
    data: {
        max: number;
        weight: number;
        step: number;
        min: number;
        bezier: null;
        _transform: null;
        group: number;
        id: string;
    }[];
    id: string;
} | {
    data: {
        _transform: null;
        min: number;
        id: string;
        weight: number;
        bezier: null;
        group: number;
        max: number;
        step: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        min: number;
        id: string;
        group: number;
        step: number;
        bezier: null;
        max: number;
        weight: number;
        _transform: null;
    }[];
} | {
    data: {
        step: number;
        bezier: null;
        _transform: null;
        weight: number;
        group: number;
        min: number;
        max: number;
        id: string;
    }[];
    id: string;
} | {
    id: string;
    data: {
        min: number;
        id: string;
        weight: number;
        step: number;
        bezier: null;
        group: number;
        _transform: null;
        max: number;
    }[];
} | {
    id: string;
    data: {
        _transform: null;
        group: number;
        step: number;
        bezier: null;
        max: number;
        id: string;
        min: number;
        weight: number;
    }[];
} | {
    id: string;
    data: {
        _transform: null;
        min: number;
        group: number;
        id: string;
        max: number;
        step: number;
        bezier: null;
        weight: number;
    }[];
} | {
    id: string;
    data: {
        group: number;
        bezier: null;
        min: number;
        id: string;
        _transform: null;
        step: number;
        max: number;
        weight: number;
    }[];
} | {
    id: string;
    data: {
        group: number;
        weight: number;
        step: number;
        _transform: null;
        bezier: null;
        id: string;
        max: number;
        min: number;
    }[];
} | {
    id: string;
    data: {
        min: number;
        max: number;
        step: number;
        bezier: null;
        _transform: null;
        id: string;
        group: number;
        weight: number;
    }[];
} | {
    data: {
        max: number;
        group: number;
        weight: number;
        step: number;
        _transform: null;
        bezier: null;
        min: number;
        id: string;
    }[];
    id: string;
} | {
    data: {
        min: number;
        max: number;
        step: number;
        id: string;
        _transform: null;
        bezier: null;
        weight: number;
        group: number;
    }[];
    id: string;
} | {
    data: {
        id: string;
        step: number;
        group: number;
        _transform: null;
        max: number;
        weight: number;
        min: number;
        bezier: null;
    }[];
    id: string;
} | {
    data: {
        min: number;
        weight: number;
        step: number;
        _transform: null;
        id: string;
        max: number;
        group: number;
        bezier: null;
    }[];
    id: string;
} | {
    id: string;
    data: {
        bezier: null;
        group: number;
        max: number;
        step: number;
        id: string;
        weight: number;
        min: number;
        _transform: null;
    }[];
} | {
    id: string;
    data: {
        max: number;
        weight: number;
        step: number;
        min: number;
        _transform: null;
        group: number;
        bezier: null;
        id: string;
    }[];
} | {
    id: string;
    data: {
        step: number;
        group: number;
        min: number;
        _transform: null;
        id: string;
        max: number;
        weight: number;
        bezier: null;
    }[];
} | {
    data: {
        step: number;
        min: number;
        group: number;
        bezier: null;
        id: string;
        max: number;
        _transform: null;
        weight: number;
    }[];
    id: string;
} | {
    data: {
        bezier: null;
        max: number;
        group: number;
        min: number;
        weight: number;
        step: number;
        id: string;
        _transform: null;
    }[];
    id: string;
} | {
    data: {
        group: number;
        bezier: null;
        id: string;
        max: number;
        min: number;
        weight: number;
        _transform: null;
        step: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        group: number;
        weight: number;
        bezier: null;
        min: number;
        step: number;
        id: string;
        max: number;
        _transform: null;
    }[];
} | {
    id: string;
    data: {
        group: number;
        min: number;
        max: number;
        weight: number;
        bezier: null;
        step: number;
        id: string;
        _transform: null;
    }[];
} | {
    id: string;
    data: {
        group: number;
        id: string;
        min: number;
        weight: number;
        bezier: null;
        max: number;
        step: number;
        _transform: null;
    }[];
} | {
    data: {
        bezier: null;
        max: number;
        step: number;
        weight: number;
        _transform: null;
        id: string;
        group: number;
        min: number;
    }[];
    id: string;
} | {
    data: {
        id: string;
        step: number;
        group: number;
        min: number;
        _transform: null;
        max: number;
        weight: number;
        bezier: null;
    }[];
    id: string;
} | {
    data: {
        bezier: null;
        id: string;
        min: number;
        weight: number;
        _transform: null;
        group: number;
        max: number;
        step: number;
    }[];
    id: string;
} | {
    data: {
        id: string;
        _transform: null;
        step: number;
        group: number;
        weight: number;
        bezier: null;
        min: number;
        max: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        bezier: null;
        id: string;
        step: number;
        weight: number;
        min: number;
        max: number;
        _transform: null;
        group: number;
    }[];
} | {
    data: {
        _transform: null;
        group: number;
        weight: number;
        id: string;
        step: number;
        max: number;
        min: number;
        bezier: null;
    }[];
    id: string;
} | {
    data: {
        max: number;
        _transform: null;
        group: number;
        bezier: null;
        weight: number;
        id: string;
        min: number;
        step: number;
    }[];
    id: string;
} | {
    data: {
        min: number;
        _transform: null;
        group: number;
        weight: number;
        step: number;
        bezier: null;
        max: number;
        id: string;
    }[];
    id: string;
} | {
    id: string;
    data: {
        weight: number;
        step: number;
        id: string;
        group: number;
        max: number;
        bezier: null;
        _transform: null;
        min: number;
    }[];
} | {
    data: {
        max: number;
        weight: number;
        group: number;
        step: number;
        id: string;
        bezier: null;
        min: number;
        _transform: null;
    }[];
    id: string;
} | {
    id: string;
    data: {
        group: number;
        bezier: null;
        weight: number;
        min: number;
        max: number;
        step: number;
        id: string;
        _transform: null;
    }[];
} | {
    id: string;
    data: {
        min: number;
        max: number;
        weight: number;
        _transform: null;
        id: string;
        bezier: null;
        group: number;
        step: number;
    }[];
} | {
    data: {
        group: number;
        weight: number;
        _transform: null;
        max: number;
        bezier: null;
        id: string;
        min: number;
        step: number;
    }[];
    id: string;
} | {
    data: {
        _transform: null;
        bezier: null;
        min: number;
        max: number;
        step: number;
        group: number;
        id: string;
        weight: number;
    }[];
    id: string;
} | {
    data: {
        weight: number;
        _transform: null;
        group: number;
        id: string;
        max: number;
        min: number;
        bezier: null;
        step: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        group: number;
        bezier: null;
        _transform: null;
        min: number;
        max: number;
        id: string;
        weight: number;
        step: number;
    }[];
} | {
    id: string;
    data: {
        bezier: null;
        min: number;
        max: number;
        weight: number;
        group: number;
        step: number;
        _transform: null;
        id: string;
    }[];
} | {
    data: {
        step: number;
        bezier: null;
        _transform: null;
        max: number;
        group: number;
        min: number;
        weight: number;
        id: string;
    }[];
    id: string;
} | {
    data: {
        weight: number;
        group: number;
        min: number;
        bezier: null;
        max: number;
        step: number;
        _transform: null;
        id: string;
    }[];
    id: string;
} | {
    id: string;
    data: {
        min: number;
        weight: number;
        bezier: null;
        max: number;
        step: number;
        id: string;
        group: number;
        _transform: null;
    }[];
} | {
    data: ({
        weight: number;
        id: string;
        min: number;
        group: number;
        _transform: null;
        step: number;
        dynamicPoolId: string;
        bezier: null;
        max: number;
    } | {
        min: number;
        max: number;
        step: number;
        weight: number;
        bezier: null;
        _transform: null;
        id: string;
        group: number;
        dynamicPoolId?: undefined;
    })[];
    id: string;
} | {
    data: {
        bezier: null;
        min: number;
        _transform: null;
        weight: number;
        id: string;
        group: number;
        step: number;
        max: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        weight: number;
        max: number;
        id: string;
        min: number;
        _transform: null;
        bezier: null;
        group: number;
        step: number;
    }[];
} | {
    data: ({
        group: number;
        step: number;
        _transform: null;
        bezier: null;
        id: string;
        max: number;
        min: number;
        weight: number;
    } | {
        group: number;
        max: number;
        step: number;
        id: null;
        weight: number;
        min: number;
        _transform: null;
        bezier: null;
    })[];
    id: string;
} | {
    id: string;
    data: ({
        bezier: null;
        weight: number;
        step: number;
        min: number;
        _transform: null;
        max: number;
        group: number;
        id: string;
    } | {
        group: number;
        max: number;
        min: number;
        weight: number;
        _transform: null;
        bezier: null;
        step: number;
        id: null;
    })[];
} | {
    data: {
        min: number;
        weight: number;
        bezier: null;
        max: number;
        step: number;
        id: string;
        group: number;
        _transform: null;
    }[];
    id: string;
} | {
    data: {
        group: number;
        bezier: null;
        step: number;
        min: number;
        max: number;
        _transform: null;
        id: string;
        weight: number;
    }[];
    id: string;
} | {
    id: string;
    data: ({
        _transform: null;
        group: number;
        bezier: null;
        weight: number;
        step: number;
        max: number;
        min: number;
        id: string;
    } | {
        weight: number;
        group: number;
        id: null;
        step: number;
        max: number;
        min: number;
        bezier: null;
        _transform: null;
    })[];
} | {
    id: string;
    data: ({
        bezier: null;
        weight: number;
        group: number;
        max: number;
        id: string;
        min: number;
        _transform: null;
        step: number;
    } | {
        bezier: null;
        group: number;
        weight: number;
        id: null;
        min: number;
        step: number;
        max: number;
        _transform: null;
    })[];
} | {
    data: ({
        step: number;
        id: string;
        _transform: null;
        max: number;
        weight: number;
        bezier: null;
        group: number;
        min: number;
    } | {
        _transform: null;
        min: number;
        bezier: null;
        step: number;
        max: number;
        id: null;
        group: number;
        weight: number;
    })[];
    id: string;
} | {
    id: string;
    data: {
        min: number;
        _transform: null;
        weight: number;
        id: string;
        step: number;
        bezier: null;
        group: number;
        max: number;
    }[];
} | {
    id: string;
    data: {
        weight: number;
        group: number;
        min: number;
        max: number;
        step: number;
        bezier: null;
        id: string;
        _transform: null;
    }[];
} | {
    id: string;
    data: {
        max: number;
        _transform: null;
        step: number;
        group: number;
        id: string;
        min: number;
        bezier: null;
        weight: number;
    }[];
} | {
    data: {
        max: number;
        group: number;
        weight: number;
        step: number;
        bezier: null;
        _transform: null;
        id: string;
        min: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        min: number;
        weight: number;
        _transform: null;
        group: number;
        id: string;
        max: number;
        bezier: null;
        step: number;
    }[];
} | {
    data: {
        max: number;
        _transform: null;
        group: number;
        step: number;
        id: string;
        bezier: null;
        min: number;
        weight: number;
    }[];
    id: string;
} | {
    data: {
        bezier: null;
        id: string;
        max: number;
        group: number;
        step: number;
        _transform: null;
        weight: number;
        min: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        max: number;
        weight: number;
        min: number;
        id: string;
        _transform: null;
        bezier: null;
        step: number;
        group: number;
    }[];
} | {
    id: string;
    data: {
        step: number;
        group: number;
        id: string;
        _transform: null;
        min: number;
        weight: number;
        max: number;
        bezier: null;
    }[];
} | {
    id: string;
    data: {
        max: number;
        group: number;
        weight: number;
        step: number;
        min: number;
        bezier: null;
        _transform: null;
        id: string;
    }[];
} | {
    data: {
        id: string;
        weight: number;
        bezier: null;
        max: number;
        group: number;
        min: number;
        step: number;
        _transform: null;
    }[];
    id: string;
} | {
    id: string;
    data: {
        weight: number;
        min: number;
        group: number;
        step: number;
        id: string;
        bezier: null;
        _transform: null;
        max: number;
    }[];
} | {
    data: {
        _transform: null;
        id: string;
        group: number;
        weight: number;
        max: number;
        step: number;
        bezier: null;
        min: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        min: number;
        weight: number;
        group: number;
        _transform: null;
        step: number;
        bezier: null;
        id: string;
        max: number;
    }[];
} | {
    data: {
        min: number;
        step: number;
        bezier: null;
        id: string;
        _transform: null;
        weight: number;
        max: number;
        group: number;
    }[];
    id: string;
} | {
    data: {
        max: number;
        weight: number;
        id: string;
        group: number;
        step: number;
        bezier: null;
        min: number;
        _transform: null;
    }[];
    id: string;
} | {
    id: string;
    data: {
        bezier: null;
        _transform: null;
        max: number;
        step: number;
        id: string;
        group: number;
        weight: number;
        min: number;
    }[];
} | {
    data: {
        group: number;
        step: number;
        id: string;
        bezier: null;
        min: number;
        weight: number;
        _transform: null;
        max: number;
    }[];
    id: string;
} | {
    id: string;
    data: ({
        _transform: null;
        weight: number;
        group: number;
        bezier: null;
        min: number;
        max: number;
        id: string;
        step: number;
    } | {
        step: number;
        id: null;
        weight: number;
        bezier: null;
        _transform: null;
        min: number;
        group: number;
        max: number;
    })[];
} | {
    data: {
        id: string;
        group: number;
        _transform: null;
        max: number;
        step: number;
        bezier: null;
        min: number;
        weight: number;
    }[];
    id: string;
} | {
    data: {
        _transform: null;
        weight: number;
        max: number;
        bezier: null;
        group: number;
        min: number;
        id: string;
        step: number;
    }[];
    id: string;
} | {
    data: {
        bezier: null;
        max: number;
        _transform: null;
        weight: number;
        group: number;
        id: string;
        min: number;
        step: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        group: number;
        _transform: null;
        weight: number;
        bezier: null;
        id: string;
        step: number;
        max: number;
        min: number;
    }[];
} | {
    id: string;
    data: {
        id: string;
        step: number;
        max: number;
        min: number;
        group: number;
        _transform: null;
        weight: number;
        bezier: null;
    }[];
} | {
    id: string;
    data: {
        id: string;
        max: number;
        weight: number;
        step: number;
        group: number;
        bezier: null;
        min: number;
        _transform: null;
    }[];
} | {
    id: string;
    data: {
        group: number;
        id: string;
        max: number;
        min: number;
        _transform: null;
        step: number;
        bezier: null;
        weight: number;
    }[];
} | {
    id: string;
    data: {
        min: number;
        max: number;
        weight: number;
        group: number;
        _transform: null;
        bezier: null;
        step: number;
        id: string;
    }[];
} | {
    id: string;
    data: {
        _transform: null;
        step: number;
        max: number;
        bezier: null;
        min: number;
        group: number;
        id: string;
        weight: number;
    }[];
} | {
    data: {
        bezier: null;
        id: string;
        _transform: null;
        step: number;
        weight: number;
        max: number;
        min: number;
        group: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        id: string;
        min: number;
        max: number;
        step: number;
        bezier: null;
        weight: number;
        group: number;
        _transform: null;
    }[];
} | {
    data: {
        min: number;
        step: number;
        id: string;
        weight: number;
        max: number;
        bezier: null;
        group: number;
        _transform: null;
    }[];
    id: string;
} | {
    id: string;
    data: {
        _transform: null;
        group: number;
        min: number;
        bezier: null;
        dynamicPoolId: string;
        id: string;
        max: number;
        step: number;
        weight: number;
    }[];
} | {
    id: string;
    data: {
        weight: number;
        min: number;
        _transform: null;
        group: number;
        bezier: null;
        step: number;
        id: string;
        max: number;
    }[];
} | {
    id: string;
    data: {
        max: number;
        step: number;
        _transform: null;
        min: number;
        bezier: null;
        group: number;
        id: string;
        weight: number;
    }[];
} | {
    data: {
        bezier: null;
        _transform: null;
        weight: number;
        max: number;
        group: number;
        min: number;
        step: number;
        id: string;
    }[];
    id: string;
} | {
    data: {
        id: string;
        min: number;
        group: number;
        step: number;
        bezier: null;
        max: number;
        _transform: null;
        weight: number;
    }[];
    id: string;
} | {
    data: {
        _transform: null;
        min: number;
        bezier: null;
        weight: number;
        max: number;
        step: number;
        id: string;
        group: number;
    }[];
    id: string;
} | {
    data: {
        max: number;
        min: number;
        bezier: null;
        _transform: null;
        weight: number;
        group: number;
        id: string;
        step: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        max: number;
        step: number;
        bezier: null;
        min: number;
        group: number;
        id: string;
        _transform: null;
        weight: number;
    }[];
} | {
    id: string;
    data: {
        min: number;
        step: number;
        id: string;
        max: number;
        bezier: null;
        weight: number;
        _transform: null;
        group: number;
    }[];
} | {
    id: string;
    data: {
        _transform: null;
        id: string;
        weight: number;
        max: number;
        step: number;
        group: number;
        bezier: null;
        min: number;
    }[];
} | {
    data: {
        _transform: null;
        max: number;
        min: number;
        group: number;
        bezier: null;
        id: string;
        step: number;
        weight: number;
    }[];
    id: string;
} | {
    data: {
        _transform: null;
        step: number;
        weight: number;
        id: string;
        min: number;
        max: number;
        group: number;
        bezier: null;
    }[];
    id: string;
} | {
    id: string;
    data: {
        group: number;
        max: number;
        weight: number;
        _transform: null;
        bezier: null;
        min: number;
        step: number;
        id: string;
    }[];
} | {
    id: string;
    data: {
        max: number;
        group: number;
        step: number;
        bezier: null;
        min: number;
        _transform: null;
        weight: number;
        id: string;
    }[];
} | {
    data: {
        _transform: null;
        weight: number;
        group: number;
        step: number;
        max: number;
        id: string;
        min: number;
        bezier: null;
    }[];
    id: string;
} | {
    id: string;
    data: {
        bezier: null;
        min: number;
        group: number;
        max: number;
        id: string;
        step: number;
        weight: number;
        _transform: null;
    }[];
} | {
    id: string;
    data: ({
        dynamicPoolId: string;
        step: number;
        weight: number;
        id: string;
        _transform: null;
        min: number;
        max: number;
        group: number;
        bezier: null;
    } | {
        step: number;
        bezier: null;
        max: number;
        _transform: null;
        weight: number;
        group: number;
        min: number;
        id: string;
        dynamicPoolId?: undefined;
    })[];
} | {
    id: string;
    data: {
        _transform: null;
        max: number;
        weight: number;
        bezier: null;
        group: number;
        id: string;
        min: number;
        step: number;
    }[];
} | {
    id: string;
    data: {
        weight: number;
        step: number;
        id: string;
        group: number;
        _transform: null;
        bezier: null;
        max: number;
        min: number;
    }[];
} | {
    id: string;
    data: {
        bezier: null;
        _transform: null;
        min: number;
        step: number;
        group: number;
        weight: number;
        id: string;
        max: number;
    }[];
} | {
    id: string;
    data: {
        min: number;
        step: number;
        id: string;
        group: number;
        max: number;
        weight: number;
        _transform: null;
        bezier: null;
    }[];
} | {
    id: string;
    data: {
        weight: number;
        group: number;
        _transform: null;
        id: string;
        bezier: null;
        min: number;
        step: number;
        max: number;
    }[];
} | {
    data: {
        group: number;
        max: number;
        bezier: null;
        min: number;
        weight: number;
        step: number;
        id: string;
        _transform: null;
    }[];
    id: string;
} | {
    id: string;
    data: {
        min: number;
        bezier: null;
        _transform: null;
        step: number;
        group: number;
        weight: number;
        id: string;
        max: number;
    }[];
} | {
    id: string;
    data: {
        weight: number;
        id: string;
        group: number;
        bezier: null;
        max: number;
        min: number;
        _transform: null;
        step: number;
    }[];
} | {
    id: string;
    data: {
        max: number;
        weight: number;
        _transform: null;
        id: string;
        group: number;
        bezier: null;
        min: number;
        step: number;
    }[];
} | {
    data: {
        weight: number;
        group: number;
        bezier: null;
        id: string;
        step: number;
        _transform: null;
        min: number;
        max: number;
    }[];
    id: string;
} | {
    data: {
        group: number;
        id: string;
        min: number;
        _transform: null;
        weight: number;
        max: number;
        step: number;
        bezier: null;
    }[];
    id: string;
} | {
    id: string;
    data: {
        weight: number;
        group: number;
        min: number;
        id: string;
        max: number;
        _transform: null;
        step: number;
        bezier: null;
    }[];
} | {
    data: {
        group: number;
        bezier: null;
        id: string;
        max: number;
        min: number;
        weight: number;
        _transform: null;
        step: number;
    }[];
    id: string;
} | {
    data: {
        min: number;
        bezier: null;
        id: string;
        _transform: null;
        group: number;
        step: number;
        max: number;
        weight: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        max: number;
        step: number;
        weight: number;
        group: number;
        min: number;
        _transform: null;
        bezier: null;
        id: string;
    }[];
} | {
    data: {
        weight: number;
        bezier: null;
        step: number;
        _transform: null;
        min: number;
        max: number;
        group: number;
        id: string;
    }[];
    id: string;
} | {
    data: {
        group: number;
        _transform: null;
        bezier: null;
        weight: number;
        min: number;
        id: string;
        max: number;
        step: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        bezier: null;
        max: number;
        id: string;
        min: number;
        _transform: null;
        group: number;
        step: number;
        weight: number;
    }[];
} | {
    id: string;
    data: {
        min: number;
        step: number;
        _transform: null;
        group: number;
        bezier: null;
        weight: number;
        id: string;
        max: number;
    }[];
} | {
    id: string;
    data: {
        weight: number;
        max: number;
        _transform: null;
        bezier: null;
        step: number;
        id: string;
        min: number;
        group: number;
    }[];
} | {
    data: {
        _transform: null;
        step: number;
        weight: number;
        group: number;
        min: number;
        max: number;
        bezier: null;
        id: string;
    }[];
    id: string;
} | {
    data: {
        group: number;
        weight: number;
        step: number;
        max: number;
        id: string;
        _transform: null;
        min: number;
        bezier: null;
    }[];
    id: string;
} | {
    data: {
        weight: number;
        id: string;
        group: number;
        bezier: null;
        min: number;
        step: number;
        _transform: null;
        max: number;
    }[];
    id: string;
} | {
    data: {
        bezier: null;
        step: number;
        group: number;
        min: number;
        weight: number;
        max: number;
        id: string;
        _transform: null;
    }[];
    id: string;
} | {
    id: string;
    data: {
        group: number;
        step: number;
        max: number;
        weight: number;
        bezier: null;
        id: string;
        _transform: null;
        min: number;
    }[];
} | {
    data: {
        id: string;
        _transform: null;
        step: number;
        bezier: null;
        max: number;
        weight: number;
        min: number;
        group: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        weight: number;
        bezier: null;
        group: number;
        id: string;
        min: number;
        _transform: null;
        step: number;
        max: number;
    }[];
} | {
    data: {
        bezier: null;
        _transform: null;
        group: number;
        weight: number;
        min: number;
        max: number;
        step: number;
        id: string;
    }[];
    id: string;
} | {
    id: string;
    data: {
        step: number;
        max: number;
        weight: number;
        bezier: null;
        id: string;
        group: number;
        _transform: null;
        min: number;
    }[];
} | {
    id: string;
    data: {
        min: number;
        group: number;
        max: number;
        _transform: null;
        weight: number;
        step: number;
        bezier: null;
        id: string;
    }[];
} | {
    id: string;
    data: {
        bezier: null;
        id: string;
        group: number;
        step: number;
        max: number;
        weight: number;
        min: number;
        _transform: null;
    }[];
} | {
    id: string;
    data: {
        min: number;
        step: number;
        id: string;
        _transform: null;
        group: number;
        weight: number;
        bezier: null;
        max: number;
    }[];
} | {
    id: string;
    data: {
        step: number;
        group: number;
        max: number;
        bezier: null;
        min: number;
        weight: number;
        id: string;
        _transform: null;
    }[];
} | {
    data: {
        step: number;
        _transform: null;
        id: string;
        weight: number;
        group: number;
        min: number;
        max: number;
        bezier: null;
    }[];
    id: string;
} | {
    id: string;
    data: {
        group: number;
        bezier: null;
        min: number;
        max: number;
        _transform: null;
        id: string;
        weight: number;
        step: number;
    }[];
} | {
    data: {
        max: number;
        group: number;
        id: string;
        step: number;
        weight: number;
        bezier: null;
        _transform: null;
        min: number;
    }[];
    id: string;
} | {
    data: {
        step: number;
        max: number;
        group: number;
        weight: number;
        bezier: null;
        id: string;
        min: number;
        _transform: null;
    }[];
    id: string;
} | {
    id: string;
    data: {
        group: number;
        _transform: null;
        max: number;
        id: string;
        weight: number;
        bezier: null;
        step: number;
        min: number;
    }[];
} | {
    data: {
        id: string;
        min: number;
        weight: number;
        max: number;
        step: number;
        bezier: null;
        group: number;
        _transform: null;
    }[];
    id: string;
} | {
    id: string;
    data: {
        _transform: null;
        min: number;
        max: number;
        group: number;
        weight: number;
        bezier: null;
        step: number;
        id: string;
    }[];
} | {
    data: {
        step: number;
        min: number;
        id: string;
        max: number;
        bezier: null;
        weight: number;
        group: number;
        _transform: null;
    }[];
    id: string;
} | {
    id: string;
    data: {
        bezier: null;
        id: string;
        group: number;
        min: number;
        _transform: null;
        step: number;
        weight: number;
        max: number;
    }[];
} | {
    id: string;
    data: {
        group: number;
        max: number;
        id: string;
        _transform: null;
        min: number;
        weight: number;
        step: number;
        bezier: null;
    }[];
} | {
    data: {
        bezier: null;
        id: string;
        step: number;
        _transform: null;
        group: number;
        weight: number;
        min: number;
        max: number;
    }[];
    id: string;
} | {
    data: {
        min: number;
        step: number;
        max: number;
        bezier: null;
        _transform: null;
        group: number;
        weight: number;
        id: string;
    }[];
    id: string;
} | {
    id: string;
    data: {
        _transform: null;
        group: number;
        min: number;
        id: string;
        max: number;
        step: number;
        weight: number;
        bezier: null;
    }[];
} | {
    id: string;
    data: {
        _transform: null;
        step: number;
        bezier: null;
        id: string;
        weight: number;
        max: number;
        group: number;
        min: number;
    }[];
} | {
    id: string;
    data: {
        max: number;
        bezier: null;
        group: number;
        id: string;
        _transform: null;
        min: number;
        weight: number;
        step: number;
    }[];
} | {
    id: string;
    data: {
        id: string;
        _transform: null;
        group: number;
        step: number;
        weight: number;
        bezier: null;
        min: number;
        max: number;
    }[];
} | {
    id: string;
    data: {
        max: number;
        id: string;
        weight: number;
        _transform: null;
        group: number;
        bezier: null;
        min: number;
        step: number;
    }[];
} | {
    id: string;
    data: ({
        _transform: null;
        group: number;
        weight: number;
        min: number;
        max: number;
        bezier: null;
        step: number;
        id: string;
    } | {
        id: null;
        max: number;
        _transform: null;
        group: number;
        weight: number;
        step: number;
        min: number;
        bezier: null;
    })[];
} | {
    id: string;
    data: ({
        id: string;
        min: number;
        group: number;
        weight: number;
        _transform: null;
        max: number;
        step: number;
        bezier: null;
    } | {
        group: number;
        id: null;
        _transform: null;
        max: number;
        bezier: null;
        min: number;
        weight: number;
        step: number;
    })[];
} | {
    createdAt: string;
    updatedAt: string;
    id: string;
    data: {
        step: number;
        dynamicPoolId: string;
        id: string;
        max: number;
        _transform: null;
        weight: number;
        group: number;
        bezier: null;
        min: number;
    }[];
} | {
    data: {
        bezier: null;
        min: number;
        dynamicPoolId: string;
        group: number;
        weight: number;
        step: number;
        id: string;
        _transform: null;
        max: number;
    }[];
    id: string;
    createdAt: string;
    updatedAt: string;
} | {
    updatedAt: string;
    id: string;
    data: {
        step: number;
        weight: number;
        id: string;
        _transform: null;
        bezier: null;
        max: number;
        dynamicPoolId: string;
        group: number;
        min: number;
    }[];
    createdAt: string;
} | {
    updatedAt: {
        _seconds: number;
        _nanoseconds: number;
    };
    data: {
        max: number;
        dynamicPoolId: string;
        step: number;
        group: number;
        bezier: null;
        id: string;
        _transform: null;
        min: number;
        weight: number;
    }[];
    createdAt: {
        _seconds: number;
        _nanoseconds: number;
    };
    id: string;
} | {
    data: ({
        max: number;
        id: string;
        group: number;
        min: number;
        _transform: null;
        step: number;
        bezier: null;
        weight: number;
        dynamicPoolId?: undefined;
    } | {
        dynamicPoolId: null;
        weight: number;
        max: number;
        step: number;
        group: number;
        min: number;
        id: string;
        _transform?: undefined;
        bezier?: undefined;
    })[];
    createdAt: {
        _seconds: number;
        _nanoseconds: number;
    };
    updatedAt: {
        _seconds: number;
        _nanoseconds: number;
    };
    id: string;
} | {
    id: string;
    createdAt: string;
    updatedAt: string;
    data: ({
        max: number;
        dynamicPoolId: string;
        bezier: null;
        id: string;
        _transform: null;
        group: number;
        min: number;
        weight: number;
        step: number;
    } | {
        group: number;
        min: number;
        step: number;
        id: string;
        weight: number;
        max: number;
        dynamicPoolId: null;
        bezier?: undefined;
        _transform?: undefined;
    })[];
} | {
    id: string;
    updatedAt: string;
    createdAt: string;
    data: ({
        id: string;
        _transform: null;
        group: number;
        bezier: null;
        max: number;
        step: number;
        min: number;
        weight: number;
        dynamicPoolId?: undefined;
    } | {
        max: number;
        weight: number;
        min: number;
        step: number;
        id: string;
        group: number;
        dynamicPoolId: null;
        _transform?: undefined;
        bezier?: undefined;
    })[];
} | {
    data: ({
        min: number;
        bezier: null;
        id: string;
        _transform: null;
        weight: number;
        group: number;
        step: number;
        max: number;
        dynamicPoolId?: undefined;
    } | {
        id: string;
        step: number;
        min: number;
        dynamicPoolId: null;
        group: number;
        weight: number;
        max: number;
        bezier?: undefined;
        _transform?: undefined;
    })[];
    id: string;
    updatedAt: string;
    createdAt: string;
} | {
    createdAt: string;
    data: ({
        max: number;
        group: number;
        _transform: null;
        min: number;
        weight: number;
        step: number;
        id: string;
        bezier: null;
        dynamicPoolId?: undefined;
    } | {
        min: number;
        weight: number;
        group: number;
        max: number;
        dynamicPoolId: null;
        step: number;
        id: string;
        _transform?: undefined;
        bezier?: undefined;
    })[];
    id: string;
    updatedAt: string;
} | {
    id: string;
    data: {
        weight: number;
        min: number;
        id: string;
        _transform: null;
        max: number;
        group: number;
        bezier: null;
        step: number;
    }[];
} | {
    id: string;
    data: {
        max: number;
        step: number;
        _transform: null;
        group: number;
        min: number;
        weight: number;
        bezier: null;
        id: string;
    }[];
} | {
    data: {
        bezier: null;
        group: number;
        _transform: null;
        min: number;
        id: string;
        weight: number;
        max: number;
        step: number;
    }[];
    id: string;
} | {
    data: {
        _transform: null;
        min: number;
        max: number;
        weight: number;
        group: number;
        bezier: null;
        id: string;
        step: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        step: number;
        id: string;
        bezier: null;
        _transform: null;
        group: number;
        min: number;
        weight: number;
        max: number;
    }[];
} | {
    id: string;
    data: {
        id: string;
        weight: number;
        min: number;
        group: number;
        step: number;
        _transform: null;
        bezier: null;
        max: number;
    }[];
} | {
    id: string;
    data: {
        id: string;
        max: number;
        min: number;
        step: number;
        weight: number;
        bezier: null;
        _transform: null;
        group: number;
    }[];
} | {
    id: string;
    data: {
        id: string;
        _transform: null;
        weight: number;
        min: number;
        max: number;
        group: number;
        bezier: null;
        step: number;
    }[];
} | {
    id: string;
    data: {
        group: number;
        min: number;
        step: number;
        max: number;
        weight: number;
        _transform: null;
        bezier: null;
        id: string;
    }[];
} | {
    data: {
        weight: number;
        _transform: null;
        id: string;
        group: number;
        step: number;
        bezier: null;
        min: number;
        max: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        bezier: null;
        group: number;
        _transform: null;
        min: number;
        max: number;
        weight: number;
        step: number;
        id: string;
    }[];
} | {
    data: ({
        _transform: null;
        dynamicPoolId: string;
        min: number;
        bezier: null;
        group: number;
        id: string;
        weight: number;
        max: number;
        step: number;
    } | {
        max: number;
        id: string;
        min: number;
        bezier: null;
        weight: number;
        _transform: null;
        step: number;
        group: number;
        dynamicPoolId?: undefined;
    })[];
    id: string;
} | {
    data: ({
        dynamicPoolId: string;
        _transform: null;
        bezier: null;
        weight: number;
        group: number;
        id: string;
        step: number;
        min: number;
        max: number;
    } | {
        id: string;
        max: number;
        min: number;
        weight: number;
        step: number;
        _transform: null;
        group: number;
        bezier: null;
        dynamicPoolId?: undefined;
    })[];
    id: string;
} | {
    id: string;
    data: ({
        _transform: null;
        max: number;
        bezier: null;
        dynamicPoolId: string;
        min: number;
        weight: number;
        step: number;
        group: number;
        id: string;
    } | {
        _transform: null;
        bezier: null;
        id: string;
        weight: number;
        step: number;
        group: number;
        max: number;
        min: number;
        dynamicPoolId?: undefined;
    })[];
} | {
    id: string;
    data: ({
        weight: number;
        group: number;
        max: number;
        id: string;
        bezier: null;
        min: number;
        _transform: null;
        dynamicPoolId: string;
        step: number;
    } | {
        step: number;
        min: number;
        weight: number;
        bezier: null;
        max: number;
        _transform: null;
        id: string;
        group: number;
        dynamicPoolId?: undefined;
    })[];
} | {
    data: ({
        _transform: null;
        bezier: null;
        max: number;
        min: number;
        id: string;
        weight: number;
        step: number;
        dynamicPoolId: string;
        group: number;
    } | {
        max: number;
        bezier: null;
        id: string;
        step: number;
        _transform: null;
        min: number;
        weight: number;
        group: number;
        dynamicPoolId?: undefined;
    } | {
        weight: number;
        group: number;
        _transform: null;
        max: number;
        step: number;
        bezier: null;
        id: null;
        min: number;
        dynamicPoolId?: undefined;
    })[];
    id: string;
} | {
    id: string;
    data: ({
        dynamicPoolId: string;
        _transform: null;
        step: number;
        bezier: null;
        id: string;
        max: number;
        weight: number;
        group: number;
        min: number;
    } | {
        step: number;
        min: number;
        _transform: null;
        bezier: null;
        weight: number;
        group: number;
        max: number;
        id: string;
        dynamicPoolId?: undefined;
    } | {
        weight: number;
        group: number;
        _transform: null;
        id: null;
        max: number;
        step: number;
        min: number;
        bezier: null;
        dynamicPoolId?: undefined;
    })[];
} | {
    data: ({
        min: number;
        id: string;
        step: number;
        bezier: null;
        _transform: null;
        max: number;
        weight: number;
        group: number;
        dynamicPoolId?: undefined;
    } | {
        bezier: null;
        _transform: null;
        max: number;
        weight: number;
        dynamicPoolId: string;
        id: string;
        min: number;
        group: number;
        step: number;
    } | {
        step: number;
        id: null;
        _transform: null;
        max: number;
        group: number;
        bezier: null;
        min: number;
        weight: number;
        dynamicPoolId?: undefined;
    })[];
    id: string;
} | {
    data: ({
        max: number;
        id: string;
        group: number;
        min: number;
        _transform: null;
        step: number;
        bezier: null;
        weight: number;
    } | {
        group: number;
        max: number;
        _transform: null;
        bezier: null;
        id: null;
        step: number;
        min: number;
        weight: number;
    })[];
    id: string;
} | {
    id: string;
    data: ({
        bezier: null;
        _transform: null;
        max: number;
        id: string;
        weight: number;
        step: number;
        group: number;
        min: number;
    } | {
        id: null;
        weight: number;
        max: number;
        step: number;
        min: number;
        group: number;
        _transform: null;
        bezier: null;
    })[];
} | {
    data: ({
        group: number;
        min: number;
        id: string;
        max: number;
        bezier: null;
        weight: number;
        step: number;
        _transform: null;
    } | {
        weight: number;
        max: number;
        id: null;
        bezier: null;
        step: number;
        group: number;
        _transform: null;
        min: number;
    })[];
    id: string;
} | {
    data: {
        _transform: null;
        min: number;
        weight: number;
        bezier: null;
        max: number;
        group: number;
        step: number;
        id: string;
    }[];
    id: string;
} | {
    id: string;
    data: ({
        max: number;
        step: number;
        min: number;
        group: number;
        id: string;
        weight: number;
        _transform: null;
        bezier: null;
    } | {
        step: number;
        max: number;
        _transform: null;
        group: number;
        min: number;
        weight: number;
        bezier: null;
        id: null;
    })[];
} | {
    data: {
        weight: number;
        _transform: null;
        bezier: null;
        id: string;
        min: number;
        step: number;
        max: number;
        group: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        _transform: null;
        min: number;
        max: number;
        bezier: null;
        weight: number;
        id: string;
        group: number;
        step: number;
    }[];
} | {
    data: {
        _transform: null;
        min: number;
        max: number;
        group: number;
        weight: number;
        id: string;
        step: number;
        bezier: null;
    }[];
    id: string;
} | {
    data: {
        weight: number;
        bezier: null;
        min: number;
        id: string;
        _transform: null;
        step: number;
        group: number;
        max: number;
    }[];
    id: string;
} | {
    data: {
        weight: number;
        id: string;
        step: number;
        bezier: null;
        _transform: null;
        max: number;
        group: number;
        min: number;
    }[];
    id: string;
} | {
    data: {
        step: number;
        min: number;
        _transform: null;
        max: number;
        bezier: null;
        group: number;
        id: string;
        weight: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        group: number;
        _transform: null;
        min: number;
        weight: number;
        max: number;
        step: number;
        bezier: null;
        id: string;
    }[];
} | {
    id: string;
    data: {
        bezier: null;
        min: number;
        max: number;
        weight: number;
        _transform: null;
        group: number;
        id: string;
        step: number;
    }[];
} | {
    id: string;
    data: {
        bezier: null;
        _transform: null;
        group: number;
        id: string;
        min: number;
        step: number;
        max: number;
        weight: number;
    }[];
} | {
    data: {
        bezier: null;
        min: number;
        max: number;
        weight: number;
        _transform: null;
        id: string;
        group: number;
        step: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        min: number;
        weight: number;
        _transform: null;
        step: number;
        group: number;
        max: number;
        id: string;
        bezier: null;
    }[];
} | {
    id: string;
    data: {
        step: number;
        max: number;
        bezier: null;
        id: string;
        _transform: null;
        weight: number;
        min: number;
        group: number;
    }[];
} | {
    data: {
        max: number;
        id: string;
        _transform: null;
        group: number;
        step: number;
        min: number;
        weight: number;
        bezier: null;
    }[];
    id: string;
} | {
    id: string;
    data: {
        id: string;
        min: number;
        _transform: null;
        max: number;
        weight: number;
        step: number;
        group: number;
        bezier: null;
    }[];
} | {
    data: {
        step: number;
        _transform: null;
        min: number;
        max: number;
        group: number;
        bezier: null;
        weight: number;
        id: string;
    }[];
    id: string;
} | {
    id: string;
    data: {
        group: number;
        _transform: null;
        bezier: null;
        min: number;
        id: string;
        max: number;
        weight: number;
        step: number;
    }[];
} | {
    id: string;
    data: {
        weight: number;
        step: number;
        bezier: null;
        _transform: null;
        min: number;
        id: string;
        max: number;
        group: number;
    }[];
} | {
    id: string;
    data: {
        min: number;
        weight: number;
        step: number;
        group: number;
        id: string;
        max: number;
        bezier: null;
        _transform: null;
    }[];
} | {
    id: string;
    data: {
        min: number;
        bezier: null;
        _transform: null;
        step: number;
        group: number;
        weight: number;
        id: string;
        max: number;
    }[];
} | {
    id: string;
    data: {
        max: number;
        _transform: null;
        step: number;
        weight: number;
        bezier: null;
        id: string;
        group: number;
        min: number;
    }[];
} | {
    id: string;
    data: {
        weight: number;
        bezier: null;
        step: number;
        min: number;
        max: number;
        group: number;
        id: string;
        _transform: null;
    }[];
} | {
    data: {
        bezier: null;
        group: number;
        step: number;
        _transform: null;
        max: number;
        id: string;
        weight: number;
        min: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        bezier: null;
        step: number;
        _transform: null;
        id: string;
        weight: number;
        group: number;
        min: number;
        max: number;
    }[];
} | {
    id: string;
    data: {
        bezier: null;
        step: number;
        _transform: null;
        group: number;
        id: string;
        min: number;
        max: number;
        weight: number;
    }[];
} | {
    data: {
        _transform: null;
        id: string;
        weight: number;
        step: number;
        bezier: null;
        min: number;
        max: number;
        group: number;
    }[];
    id: string;
} | {
    data: {
        max: number;
        _transform: null;
        min: number;
        weight: number;
        step: number;
        id: string;
        bezier: null;
        group: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        group: number;
        id: string;
        bezier: null;
        min: number;
        max: number;
        weight: number;
        step: number;
        _transform: null;
    }[];
} | {
    id: string;
    updatedAt: {
        _nanoseconds: number;
        _seconds: number;
    };
    data: {
        min: number;
        max: number;
        weight: number;
        _transform: null;
        bezier: null;
        id: string;
        step: number;
        group: number;
    }[];
} | {
    data: {
        bezier: null;
        group: number;
        max: number;
        min: number;
        step: number;
        id: string;
        _transform: null;
        weight: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        step: number;
        max: number;
        min: number;
        group: number;
        weight: number;
        bezier: null;
        _transform: null;
        id: string;
    }[];
} | {
    id: string;
    data: {
        weight: number;
        group: number;
        bezier: null;
        id: string;
        max: number;
        _transform: null;
        step: number;
        min: number;
    }[];
} | {
    id: string;
    data: {
        _transform: null;
        step: number;
        bezier: null;
        weight: number;
        max: number;
        group: number;
        id: string;
        min: number;
    }[];
} | {
    id: string;
    data: {
        max: number;
        group: number;
        bezier: null;
        weight: number;
        step: number;
        min: number;
        id: string;
        _transform: null;
    }[];
} | {
    id: string;
    data: {
        step: number;
        min: number;
        max: number;
        group: number;
        bezier: null;
        id: string;
        _transform: null;
        weight: number;
    }[];
} | {
    data: {
        weight: number;
        group: number;
        id: string;
        max: number;
        min: number;
        bezier: null;
        step: number;
        _transform: null;
    }[];
    id: string;
} | {
    data: {
        _transform: null;
        max: number;
        id: string;
        weight: number;
        step: number;
        min: number;
        group: number;
        bezier: null;
    }[];
    id: string;
} | {
    data: {
        bezier: null;
        max: number;
        step: number;
        group: number;
        weight: number;
        min: number;
        _transform: null;
        id: string;
    }[];
    id: string;
} | {
    id: string;
    data: {
        group: number;
        min: number;
        id: string;
        max: number;
        weight: number;
        bezier: null;
        _transform: null;
        step: number;
    }[];
} | {
    id: string;
    data: {
        step: number;
        min: number;
        id: string;
        bezier: null;
        _transform: null;
        group: number;
        max: number;
        weight: number;
    }[];
} | {
    data: {
        weight: number;
        step: number;
        _transform: null;
        id: string;
        min: number;
        group: number;
        bezier: null;
        max: number;
    }[];
    id: string;
} | {
    data: {
        bezier: null;
        max: number;
        step: number;
        min: number;
        _transform: null;
        id: string;
        weight: number;
        group: number;
    }[];
    id: string;
} | {
    data: ({
        dynamicPoolId: string;
        bezier: null;
        group: number;
        min: number;
        max: number;
        weight: number;
        step: number;
        id: string;
        _transform: null;
    } | {
        _transform: null;
        weight: number;
        max: number;
        step: number;
        bezier: null;
        group: number;
        id: string;
        min: number;
        dynamicPoolId?: undefined;
    })[];
    id: string;
} | {
    id: string;
    data: {
        group: number;
        weight: number;
        max: number;
        _transform: null;
        min: number;
        step: number;
        id: string;
        bezier: null;
    }[];
} | {
    data: {
        max: number;
        step: number;
        _transform: null;
        weight: number;
        id: string;
        min: number;
        bezier: null;
        group: number;
    }[];
    id: string;
} | {
    data: {
        min: number;
        step: number;
        id: string;
        weight: number;
        max: number;
        group: number;
        _transform: null;
        bezier: null;
    }[];
    id: string;
} | {
    id: string;
    data: {
        id: string;
        max: number;
        weight: number;
        group: number;
        _transform: null;
        bezier: null;
        step: number;
        min: number;
    }[];
} | {
    id: string;
    data: {
        _transform: null;
        min: number;
        id: string;
        bezier: null;
        step: number;
        group: number;
        weight: number;
        max: number;
    }[];
} | {
    id: string;
    data: {
        max: number;
        id: string;
        weight: number;
        _transform: null;
        step: number;
        bezier: null;
        min: number;
        group: number;
    }[];
} | {
    id: string;
    data: {
        id: string;
        step: number;
        group: number;
        _transform: null;
        max: number;
        bezier: null;
        min: number;
        weight: number;
    }[];
} | {
    id: string;
    data: {
        min: number;
        group: number;
        id: string;
        _transform: null;
        weight: number;
        max: number;
        bezier: null;
        step: number;
    }[];
} | {
    id: string;
    data: {
        max: number;
        id: string;
        step: number;
        group: number;
        _transform: null;
        min: number;
        bezier: null;
        weight: number;
    }[];
} | {
    id: string;
    data: {
        group: number;
        bezier: null;
        step: number;
        id: string;
        _transform: null;
        min: number;
        max: number;
        weight: number;
    }[];
} | {
    data: {
        bezier: null;
        weight: number;
        group: number;
        _transform: null;
        min: number;
        step: number;
        max: number;
        id: string;
    }[];
    id: string;
} | {
    id: string;
    data: {
        weight: number;
        min: number;
        step: number;
        bezier: null;
        max: number;
        group: number;
        id: string;
        _transform: null;
    }[];
} | {
    data: {
        group: number;
        bezier: null;
        step: number;
        weight: number;
        _transform: null;
        id: string;
        min: number;
        max: number;
    }[];
    id: string;
} | {
    data: {
        bezier: null;
        _transform: null;
        min: number;
        group: number;
        id: string;
        max: number;
        weight: number;
        step: number;
    }[];
    id: string;
} | {
    data: {
        bezier: null;
        id: string;
        _transform: null;
        group: number;
        min: number;
        weight: number;
        max: number;
        step: number;
    }[];
    id: string;
} | {
    data: {
        step: number;
        id: string;
        min: number;
        max: number;
        group: number;
        weight: number;
        bezier: null;
        _transform: null;
    }[];
    id: string;
} | {
    data: {
        min: number;
        _transform: null;
        bezier: null;
        id: string;
        group: number;
        max: number;
        step: number;
        weight: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        _transform: null;
        step: number;
        bezier: null;
        group: number;
        id: string;
        max: number;
        weight: number;
        min: number;
    }[];
} | {
    data: {
        id: string;
        group: number;
        _transform: null;
        bezier: null;
        min: number;
        step: number;
        max: number;
        weight: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        weight: number;
        step: number;
        _transform: null;
        group: number;
        bezier: null;
        min: number;
        max: number;
        id: string;
    }[];
} | {
    data: {
        group: number;
        bezier: null;
        _transform: null;
        weight: number;
        step: number;
        id: string;
        min: number;
        max: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        step: number;
        min: number;
        group: number;
        bezier: null;
        _transform: null;
        id: string;
        max: number;
        weight: number;
    }[];
} | {
    id: string;
    data: {
        min: number;
        weight: number;
        group: number;
        _transform: null;
        max: number;
        step: number;
        bezier: null;
        id: string;
    }[];
} | {
    id: string;
    data: {
        _transform: null;
        id: string;
        max: number;
        bezier: null;
        min: number;
        weight: number;
        step: number;
        group: number;
    }[];
} | {
    data: {
        id: string;
        _transform: null;
        bezier: null;
        weight: number;
        group: number;
        min: number;
        max: number;
        step: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        max: number;
        step: number;
        bezier: null;
        weight: number;
        _transform: null;
        id: string;
        group: number;
        min: number;
    }[];
} | {
    id: string;
    data: {
        group: number;
        weight: number;
        id: string;
        step: number;
        bezier: null;
        max: number;
        min: number;
        _transform: null;
    }[];
} | {
    data: {
        group: number;
        id: string;
        min: number;
        bezier: null;
        _transform: null;
        max: number;
        weight: number;
        step: number;
    }[];
    id: string;
} | {
    data: {
        group: number;
        min: number;
        max: number;
        step: number;
        weight: number;
        _transform: null;
        bezier: null;
        id: string;
    }[];
    id: string;
} | {
    id: string;
    data: {
        bezier: null;
        id: string;
        min: number;
        max: number;
        _transform: null;
        step: number;
        weight: number;
        group: number;
    }[];
} | {
    id: string;
    data: {
        step: number;
        group: number;
        max: number;
        bezier: null;
        id: string;
        weight: number;
        _transform: null;
        min: number;
    }[];
} | {
    id: string;
    data: {
        min: number;
        bezier: null;
        weight: number;
        max: number;
        group: number;
        id: string;
        step: number;
        _transform: null;
    }[];
} | {
    id: string;
    data: {
        bezier: null;
        step: number;
        id: string;
        _transform: null;
        group: number;
        max: number;
        min: number;
        weight: number;
    }[];
} | {
    data: {
        id: string;
        max: number;
        step: number;
        min: number;
        bezier: null;
        weight: number;
        group: number;
        _transform: null;
    }[];
    id: string;
} | {
    data: {
        weight: number;
        id: string;
        group: number;
        max: number;
        _transform: null;
        step: number;
        bezier: null;
        min: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        weight: number;
        step: number;
        max: number;
        id: string;
        group: number;
        bezier: null;
        min: number;
        _transform: null;
    }[];
} | {
    id: string;
    data: {
        min: number;
        max: number;
        group: number;
        weight: number;
        id: string;
        _transform: null;
        bezier: null;
        step: number;
    }[];
} | {
    id: string;
    data: {
        step: number;
        max: number;
        bezier: null;
        id: string;
        weight: number;
        group: number;
        min: number;
        _transform: null;
    }[];
} | {
    data: {
        min: number;
        id: string;
        weight: number;
        bezier: null;
        _transform: null;
        group: number;
        max: number;
        step: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        step: number;
        group: number;
        min: number;
        _transform: null;
        weight: number;
        id: string;
        bezier: null;
        max: number;
    }[];
} | {
    id: string;
    data: {
        max: number;
        min: number;
        weight: number;
        _transform: null;
        id: string;
        step: number;
        bezier: null;
        group: number;
    }[];
} | {
    data: {
        max: number;
        bezier: null;
        id: string;
        _transform: null;
        weight: number;
        min: number;
        step: number;
        group: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        weight: number;
        group: number;
        step: number;
        _transform: null;
        min: number;
        bezier: null;
        id: string;
        max: number;
    }[];
} | {
    id: string;
    data: ({
        id: string;
        group: number;
        weight: number;
        step: number;
        dynamicPoolId: string;
        _transform: null;
        max: number;
        min: number;
        bezier: null;
    } | {
        max: number;
        step: number;
        weight: number;
        min: number;
        bezier: null;
        group: number;
        id: string;
        _transform: null;
        dynamicPoolId?: undefined;
    })[];
} | {
    data: ({
        min: number;
        max: number;
        bezier: null;
        id: string;
        step: number;
        dynamicPoolId: string;
        group: number;
        _transform: null;
        weight: number;
    } | {
        id: string;
        group: number;
        max: number;
        min: number;
        bezier: null;
        _transform: null;
        weight: number;
        step: number;
        dynamicPoolId?: undefined;
    })[];
    id: string;
} | {
    data: ({
        group: number;
        bezier: null;
        dynamicPoolId: string;
        id: string;
        step: number;
        min: number;
        max: number;
        _transform: null;
        weight: number;
    } | {
        _transform: null;
        bezier: null;
        max: number;
        weight: number;
        group: number;
        min: number;
        id: string;
        step: number;
        dynamicPoolId?: undefined;
    })[];
    id: string;
} | {
    id: string;
    data: ({
        weight: number;
        step: number;
        min: number;
        id: string;
        group: number;
        dynamicPoolId: string;
        bezier: null;
        max: number;
        _transform: null;
    } | {
        weight: number;
        group: number;
        _transform: null;
        id: string;
        max: number;
        min: number;
        bezier: null;
        step: number;
        dynamicPoolId?: undefined;
    })[];
} | {
    id: string;
    data: ({
        max: number;
        dynamicPoolId: string;
        bezier: null;
        _transform: null;
        min: number;
        group: number;
        weight: number;
        step: number;
        id: string;
    } | {
        _transform: null;
        group: number;
        max: number;
        min: number;
        weight: number;
        id: string;
        step: number;
        bezier: null;
        dynamicPoolId?: undefined;
    })[];
} | {
    id: string;
    data: ({
        dynamicPoolId: string;
        step: number;
        _transform: null;
        min: number;
        id: string;
        max: number;
        group: number;
        weight: number;
        bezier: null;
    } | {
        max: number;
        weight: number;
        bezier: null;
        min: number;
        group: number;
        _transform: null;
        step: number;
        id: string;
        dynamicPoolId?: undefined;
    })[];
} | {
    data: ({
        max: number;
        group: number;
        bezier: null;
        _transform: null;
        dynamicPoolId: string;
        step: number;
        min: number;
        weight: number;
        id: string;
    } | {
        group: number;
        weight: number;
        id: string;
        max: number;
        step: number;
        min: number;
        bezier: null;
        _transform: null;
        dynamicPoolId?: undefined;
    })[];
    id: string;
} | {
    id: string;
    data: ({
        bezier: null;
        _transform: null;
        id: string;
        step: number;
        dynamicPoolId: string;
        weight: number;
        min: number;
        group: number;
        max: number;
    } | {
        _transform: null;
        step: number;
        max: number;
        group: number;
        id: string;
        weight: number;
        bezier: null;
        min: number;
        dynamicPoolId?: undefined;
    })[];
} | {
    data: ({
        min: number;
        bezier: null;
        id: string;
        max: number;
        _transform: null;
        step: number;
        weight: number;
        dynamicPoolId: string;
        group: number;
    } | {
        id: string;
        step: number;
        _transform: null;
        bezier: null;
        min: number;
        max: number;
        group: number;
        weight: number;
        dynamicPoolId?: undefined;
    })[];
    id: string;
} | {
    data: ({
        _transform: null;
        id: string;
        max: number;
        weight: number;
        dynamicPoolId: string;
        group: number;
        step: number;
        bezier: null;
        min: number;
    } | {
        group: number;
        bezier: null;
        max: number;
        weight: number;
        _transform: null;
        id: string;
        min: number;
        step: number;
        dynamicPoolId?: undefined;
    })[];
    id: string;
} | {
    id: string;
    data: ({
        max: number;
        weight: number;
        min: number;
        group: number;
        _transform: null;
        bezier: null;
        dynamicPoolId: string;
        step: number;
        id: string;
    } | {
        _transform: null;
        min: number;
        group: number;
        max: number;
        bezier: null;
        step: number;
        id: string;
        weight: number;
        dynamicPoolId?: undefined;
    })[];
} | {
    id: string;
    data: ({
        bezier: null;
        step: number;
        group: number;
        weight: number;
        id: string;
        max: number;
        min: number;
        _transform: null;
        dynamicPoolId: string;
    } | {
        bezier: null;
        id: string;
        min: number;
        weight: number;
        group: number;
        _transform: null;
        max: number;
        step: number;
        dynamicPoolId?: undefined;
    })[];
} | {
    id: string;
    data: ({
        dynamicPoolId: string;
        bezier: null;
        min: number;
        step: number;
        id: string;
        weight: number;
        group: number;
        _transform: null;
        max: number;
    } | {
        group: number;
        bezier: null;
        weight: number;
        id: string;
        step: number;
        min: number;
        max: number;
        _transform: null;
        dynamicPoolId?: undefined;
    })[];
} | {
    id: string;
    data: ({
        id: string;
        _transform: null;
        group: number;
        max: number;
        step: number;
        weight: number;
        dynamicPoolId: string;
        min: number;
        bezier: null;
    } | {
        id: string;
        _transform: null;
        max: number;
        weight: number;
        bezier: null;
        step: number;
        group: number;
        min: number;
        dynamicPoolId?: undefined;
    })[];
} | {
    data: ({
        dynamicPoolId: string;
        _transform: null;
        min: number;
        id: string;
        bezier: null;
        max: number;
        step: number;
        group: number;
        weight: number;
    } | {
        bezier: null;
        min: number;
        max: number;
        group: number;
        weight: number;
        id: string;
        _transform: null;
        step: number;
        dynamicPoolId?: undefined;
    })[];
    id: string;
} | {
    id: string;
    data: ({
        id: string;
        min: number;
        step: number;
        group: number;
        dynamicPoolId: string;
        bezier: null;
        max: number;
        weight: number;
        _transform: null;
    } | {
        step: number;
        max: number;
        _transform: null;
        group: number;
        id: string;
        min: number;
        weight: number;
        bezier: null;
        dynamicPoolId?: undefined;
    })[];
} | {
    id: string;
    data: ({
        bezier: null;
        weight: number;
        max: number;
        dynamicPoolId: string;
        group: number;
        _transform: null;
        id: string;
        min: number;
        step: number;
    } | {
        id: string;
        step: number;
        max: number;
        weight: number;
        bezier: null;
        min: number;
        group: number;
        _transform: null;
        dynamicPoolId?: undefined;
    })[];
} | {
    data: ({
        group: number;
        dynamicPoolId: string;
        min: number;
        bezier: null;
        id: string;
        _transform: null;
        max: number;
        step: number;
        weight: number;
    } | {
        id: string;
        step: number;
        group: number;
        _transform: null;
        weight: number;
        bezier: null;
        min: number;
        max: number;
        dynamicPoolId?: undefined;
    })[];
    id: string;
} | {
    id: string;
    data: ({
        group: number;
        _transform: null;
        dynamicPoolId: string;
        bezier: null;
        min: number;
        step: number;
        max: number;
        weight: number;
        id: string;
    } | {
        max: number;
        group: number;
        _transform: null;
        id: string;
        bezier: null;
        min: number;
        step: number;
        weight: number;
        dynamicPoolId?: undefined;
    })[];
} | {
    id: string;
    data: ({
        id: string;
        min: number;
        weight: number;
        step: number;
        group: number;
        bezier: null;
        dynamicPoolId: string;
        _transform: null;
        max: number;
    } | {
        group: number;
        weight: number;
        bezier: null;
        id: string;
        _transform: null;
        max: number;
        step: number;
        min: number;
        dynamicPoolId?: undefined;
    })[];
} | {
    data: ({
        bezier: null;
        id: string;
        step: number;
        max: number;
        min: number;
        dynamicPoolId: string;
        group: number;
        weight: number;
        _transform: null;
    } | {
        step: number;
        max: number;
        bezier: null;
        _transform: null;
        id: string;
        min: number;
        group: number;
        weight: number;
        dynamicPoolId?: undefined;
    })[];
    id: string;
} | {
    id: string;
    data: ({
        max: number;
        dynamicPoolId: string;
        bezier: null;
        id: string;
        min: number;
        step: number;
        _transform: null;
        weight: number;
        group: number;
    } | {
        step: number;
        max: number;
        min: number;
        _transform: null;
        bezier: null;
        group: number;
        weight: number;
        id: string;
        dynamicPoolId?: undefined;
    })[];
} | {
    id: string;
    data: ({
        dynamicPoolId: string;
        max: number;
        _transform: null;
        group: number;
        step: number;
        bezier: null;
        weight: number;
        id: string;
        min: number;
    } | {
        weight: number;
        _transform: null;
        max: number;
        step: number;
        min: number;
        id: string;
        bezier: null;
        group: number;
        dynamicPoolId?: undefined;
    })[];
} | {
    id: string;
    data: ({
        group: number;
        bezier: null;
        dynamicPoolId: string;
        id: string;
        _transform: null;
        step: number;
        min: number;
        max: number;
        weight: number;
    } | {
        min: number;
        group: number;
        _transform: null;
        id: string;
        max: number;
        bezier: null;
        step: number;
        weight: number;
        dynamicPoolId?: undefined;
    })[];
} | {
    data: ({
        max: number;
        weight: number;
        min: number;
        dynamicPoolId: string;
        id: string;
        group: number;
        _transform: null;
        bezier: null;
        step: number;
    } | {
        _transform: null;
        bezier: null;
        id: string;
        group: number;
        weight: number;
        step: number;
        max: number;
        min: number;
        dynamicPoolId?: undefined;
    })[];
    id: string;
} | {
    id: string;
    data: ({
        _transform: null;
        group: number;
        max: number;
        dynamicPoolId: string;
        id: string;
        bezier: null;
        min: number;
        step: number;
        weight: number;
    } | {
        weight: number;
        _transform: null;
        max: number;
        bezier: null;
        id: string;
        step: number;
        group: number;
        min: number;
        dynamicPoolId?: undefined;
    })[];
} | {
    data: ({
        dynamicPoolId: string;
        weight: number;
        id: string;
        bezier: null;
        min: number;
        step: number;
        max: number;
        group: number;
        _transform: null;
    } | {
        group: number;
        id: string;
        _transform: null;
        step: number;
        bezier: null;
        max: number;
        min: number;
        weight: number;
        dynamicPoolId?: undefined;
    })[];
    id: string;
} | {
    id: string;
    data: ({
        max: number;
        group: number;
        bezier: null;
        weight: number;
        id: string;
        _transform: null;
        step: number;
        dynamicPoolId: string;
        min: number;
    } | {
        bezier: null;
        min: number;
        group: number;
        _transform: null;
        max: number;
        step: number;
        id: string;
        weight: number;
        dynamicPoolId?: undefined;
    })[];
} | {
    id: string;
    data: ({
        group: number;
        min: number;
        id: string;
        weight: number;
        bezier: null;
        step: number;
        _transform: null;
        max: number;
        dynamicPoolId: string;
    } | {
        bezier: null;
        step: number;
        max: number;
        weight: number;
        group: number;
        id: string;
        _transform: null;
        min: number;
        dynamicPoolId?: undefined;
    })[];
} | {
    data: ({
        bezier: null;
        min: number;
        group: number;
        dynamicPoolId: string;
        _transform: null;
        id: string;
        max: number;
        step: number;
        weight: number;
    } | {
        min: number;
        group: number;
        _transform: null;
        max: number;
        id: string;
        bezier: null;
        weight: number;
        step: number;
        dynamicPoolId?: undefined;
    })[];
    id: string;
} | {
    id: string;
    data: ({
        max: number;
        bezier: null;
        id: string;
        _transform: null;
        weight: number;
        group: number;
        min: number;
        dynamicPoolId: string;
        step: number;
    } | {
        weight: number;
        min: number;
        bezier: null;
        _transform: null;
        group: number;
        max: number;
        step: number;
        id: string;
        dynamicPoolId?: undefined;
    })[];
} | {
    data: ({
        id: string;
        step: number;
        _transform: null;
        min: number;
        max: number;
        weight: number;
        group: number;
        bezier: null;
        dynamicPoolId: string;
    } | {
        max: number;
        min: number;
        group: number;
        _transform: null;
        bezier: null;
        id: string;
        step: number;
        weight: number;
        dynamicPoolId?: undefined;
    })[];
    id: string;
} | {
    data: ({
        id: string;
        step: number;
        group: number;
        bezier: null;
        min: number;
        dynamicPoolId: string;
        _transform: null;
        weight: number;
        max: number;
    } | {
        weight: number;
        id: string;
        max: number;
        min: number;
        group: number;
        bezier: null;
        _transform: null;
        step: number;
        dynamicPoolId?: undefined;
    })[];
    id: string;
} | {
    id: string;
    data: ({
        _transform: null;
        weight: number;
        step: number;
        bezier: null;
        min: number;
        group: number;
        id: string;
        dynamicPoolId: string;
        max: number;
    } | {
        step: number;
        weight: number;
        bezier: null;
        min: number;
        _transform: null;
        id: string;
        group: number;
        max: number;
        dynamicPoolId?: undefined;
    })[];
} | {
    data: {
        weight: number;
        min: number;
        _transform: null;
        group: number;
        bezier: null;
        step: number;
        id: string;
        max: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        max: number;
        weight: number;
        step: number;
        min: number;
        id: string;
        group: number;
        bezier: null;
        _transform: null;
    }[];
} | {
    id: string;
    data: {
        max: number;
        step: number;
        id: string;
        min: number;
        bezier: null;
        _transform: null;
        weight: number;
        group: number;
    }[];
} | {
    data: {
        id: string;
        bezier: null;
        group: number;
        min: number;
        weight: number;
        _transform: null;
        step: number;
        max: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        weight: number;
        step: number;
        min: number;
        _transform: null;
        group: number;
        bezier: null;
        id: string;
        max: number;
    }[];
} | {
    id: string;
    data: {
        weight: number;
        bezier: null;
        id: string;
        step: number;
        _transform: null;
        max: number;
        group: number;
        min: number;
    }[];
} | {
    data: {
        min: number;
        bezier: null;
        weight: number;
        group: number;
        id: string;
        _transform: null;
        max: number;
        step: number;
    }[];
    id: string;
} | {
    data: {
        group: number;
        step: number;
        weight: number;
        id: string;
        min: number;
        _transform: null;
        bezier: null;
        max: number;
    }[];
    id: string;
} | {
    data: {
        _transform: null;
        group: number;
        step: number;
        bezier: null;
        min: number;
        weight: number;
        max: number;
        id: string;
    }[];
    id: string;
} | {
    id: string;
    data: {
        max: number;
        _transform: null;
        weight: number;
        id: string;
        step: number;
        min: number;
        bezier: null;
        group: number;
    }[];
} | {
    id: string;
    data: {
        step: number;
        _transform: null;
        max: number;
        group: number;
        bezier: null;
        min: number;
        id: string;
        weight: number;
    }[];
} | {
    id: string;
    data: {
        bezier: null;
        max: number;
        step: number;
        group: number;
        _transform: null;
        id: string;
        min: number;
        weight: number;
    }[];
} | {
    id: string;
    data: {
        bezier: null;
        step: number;
        group: number;
        min: number;
        weight: number;
        id: string;
        _transform: null;
        max: number;
    }[];
} | {
    data: {
        id: string;
        group: number;
        bezier: null;
        max: number;
        step: number;
        _transform: null;
        weight: number;
        min: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        step: number;
        bezier: null;
        id: string;
        min: number;
        _transform: null;
        max: number;
        group: number;
        weight: number;
    }[];
} | {
    data: {
        id: string;
        max: number;
        weight: number;
        bezier: null;
        _transform: null;
        group: number;
        min: number;
        step: number;
    }[];
    id: string;
} | {
    data: {
        bezier: null;
        step: number;
        group: number;
        min: number;
        max: number;
        weight: number;
        _transform: null;
        id: string;
    }[];
    id: string;
} | {
    id: string;
    data: {
        max: number;
        bezier: null;
        id: string;
        min: number;
        _transform: null;
        step: number;
        weight: number;
        group: number;
    }[];
} | {
    data: {
        min: number;
        max: number;
        step: number;
        bezier: null;
        _transform: null;
        weight: number;
        group: number;
        id: string;
    }[];
    id: string;
} | {
    data: {
        weight: number;
        group: number;
        max: number;
        step: number;
        bezier: null;
        _transform: null;
        id: string;
        min: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        group: number;
        max: number;
        step: number;
        id: string;
        weight: number;
        _transform: null;
        min: number;
        bezier: null;
    }[];
} | {
    data: {
        bezier: null;
        step: number;
        max: number;
        weight: number;
        min: number;
        id: string;
        group: number;
        _transform: null;
    }[];
    id: string;
} | {
    id: string;
    data: {
        id: string;
        step: number;
        _transform: null;
        bezier: null;
        max: number;
        min: number;
        group: number;
        weight: number;
    }[];
} | {
    id: string;
    data: {
        id: string;
        bezier: null;
        weight: number;
        _transform: null;
        group: number;
        min: number;
        max: number;
        step: number;
    }[];
} | {
    id: string;
    data: {
        weight: number;
        group: number;
        min: number;
        _transform: null;
        max: number;
        step: number;
        bezier: null;
        id: string;
    }[];
} | {
    data: {
        group: number;
        _transform: null;
        weight: number;
        bezier: null;
        min: number;
        id: null;
        step: number;
        max: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        bezier: null;
        step: number;
        group: number;
        min: number;
        id: null;
        weight: number;
        _transform: null;
        max: number;
    }[];
} | {
    id: string;
    data: {
        step: number;
        group: number;
        id: string;
        bezier: null;
        weight: number;
        _transform: null;
        min: number;
        max: number;
    }[];
} | {
    id: string;
    data: {
        step: number;
        weight: number;
        bezier: null;
        group: number;
        _transform: null;
        max: number;
        min: number;
        id: string;
    }[];
} | {
    id: string;
    data: {
        max: number;
        step: number;
        weight: number;
        bezier: null;
        id: string;
        min: number;
        group: number;
        _transform: null;
    }[];
} | {
    id: string;
    data: {
        bezier: null;
        step: number;
        group: number;
        _transform: null;
        min: number;
        max: number;
        weight: number;
        id: string;
    }[];
} | {
    updatedAt: {
        _seconds: number;
        _nanoseconds: number;
    };
    id: string;
    data: {
        max: number;
        weight: number;
        step: number;
        id: string;
        min: number;
        bezier: null;
        _transform: null;
        group: number;
    }[];
} | {
    data: {
        _transform: null;
        max: number;
        id: string;
        weight: number;
        group: number;
        step: number;
        bezier: null;
        min: number;
    }[];
    id: string;
} | {
    data: {
        bezier: null;
        group: number;
        min: number;
        step: number;
        _transform: null;
        weight: number;
        id: string;
        max: number;
    }[];
    id: string;
} | {
    data: {
        weight: number;
        _transform: null;
        group: number;
        id: string;
        step: number;
        bezier: null;
        max: number;
        min: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        id: string;
        weight: number;
        step: number;
        max: number;
        _transform: null;
        bezier: null;
        group: number;
        min: number;
    }[];
} | {
    id: string;
    data: {
        id: string;
        step: number;
        group: number;
        bezier: null;
        _transform: null;
        min: number;
        weight: number;
        max: number;
    }[];
} | {
    id: string;
    data: {
        bezier: null;
        _transform: null;
        max: number;
        id: string;
        group: number;
        weight: number;
        min: number;
        step: number;
    }[];
} | {
    data: {
        min: number;
        step: number;
        weight: number;
        group: number;
        _transform: null;
        bezier: null;
        max: number;
        id: string;
    }[];
    id: string;
} | {
    id: string;
    data: {
        _transform: null;
        min: number;
        group: number;
        step: number;
        weight: number;
        bezier: null;
        id: string;
        max: number;
    }[];
} | {
    id: string;
    data: {
        _transform: null;
        id: string;
        bezier: null;
        group: number;
        max: number;
        weight: number;
        step: number;
        min: number;
    }[];
} | {
    id: string;
    data: {
        step: number;
        _transform: null;
        min: number;
        weight: number;
        group: number;
        id: string;
        max: number;
        bezier: null;
    }[];
} | {
    data: {
        id: string;
        _transform: null;
        min: number;
        step: number;
        max: number;
        bezier: null;
        group: number;
        weight: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        group: number;
        bezier: null;
        _transform: null;
        step: number;
        id: string;
        weight: number;
        min: number;
        max: number;
    }[];
} | {
    id: string;
    data: {
        weight: number;
        _transform: null;
        step: number;
        max: number;
        bezier: null;
        id: string;
        min: number;
        group: number;
    }[];
} | {
    data: {
        bezier: null;
        id: string;
        max: number;
        step: number;
        _transform: null;
        weight: number;
        group: number;
        min: number;
    }[];
    id: string;
} | {
    data: {
        group: number;
        bezier: null;
        id: string;
        min: number;
        max: number;
        step: number;
        weight: number;
        _transform: null;
    }[];
    id: string;
} | {
    id: string;
    data: {
        _transform: null;
        step: number;
        bezier: null;
        min: number;
        id: string;
        max: number;
        group: number;
        weight: number;
    }[];
} | {
    data: {
        group: number;
        min: number;
        id: string;
        weight: number;
        step: number;
        _transform: null;
        max: number;
        bezier: null;
    }[];
    id: string;
} | {
    data: {
        _transform: null;
        group: number;
        step: number;
        id: string;
        max: number;
        bezier: null;
        weight: number;
        min: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        _transform: null;
        bezier: null;
        weight: number;
        max: number;
        group: number;
        step: number;
        id: string;
        min: number;
    }[];
} | {
    data: {
        group: number;
        weight: number;
        max: number;
        _transform: null;
        id: string;
        step: number;
        min: number;
        bezier: null;
    }[];
    id: string;
} | {
    data: {
        id: string;
        step: number;
        min: number;
        max: number;
        group: number;
        bezier: null;
        _transform: null;
        weight: number;
    }[];
    id: string;
} | {
    data: {
        group: number;
        min: number;
        id: string;
        bezier: null;
        weight: number;
        _transform: null;
        max: number;
        step: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        id: string;
        max: number;
        bezier: null;
        _transform: null;
        weight: number;
        min: number;
        group: number;
        step: number;
    }[];
} | {
    id: string;
    data: {
        _transform: null;
        min: number;
        max: number;
        id: string;
        weight: number;
        bezier: null;
        group: number;
        step: number;
    }[];
} | {
    id: string;
    data: {
        min: number;
        bezier: null;
        weight: number;
        _transform: null;
        group: number;
        step: number;
        id: string;
        max: number;
    }[];
} | {
    data: {
        id: string;
        step: number;
        min: number;
        group: number;
        _transform: null;
        weight: number;
        max: number;
        bezier: null;
    }[];
    id: string;
} | {
    id: string;
    data: {
        _transform: null;
        id: string;
        group: number;
        step: number;
        max: number;
        bezier: null;
        min: number;
        weight: number;
    }[];
} | {
    data: {
        min: number;
        group: number;
        step: number;
        _transform: null;
        max: number;
        weight: number;
        bezier: null;
        id: string;
    }[];
    id: string;
} | {
    id: string;
    data: {
        min: number;
        _transform: null;
        id: string;
        group: number;
        step: number;
        max: number;
        bezier: null;
        weight: number;
    }[];
} | {
    id: string;
    data: {
        _transform: null;
        step: number;
        min: number;
        max: number;
        weight: number;
        id: string;
        group: number;
        bezier: null;
    }[];
} | {
    id: string;
    data: {
        group: number;
        min: number;
        bezier: null;
        max: number;
        step: number;
        weight: number;
        id: string;
        _transform: null;
    }[];
} | {
    data: {
        min: number;
        group: number;
        bezier: null;
        id: string;
        step: number;
        _transform: null;
        max: number;
        weight: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        bezier: null;
        _transform: null;
        step: number;
        max: number;
        group: number;
        weight: number;
        id: string;
        min: number;
    }[];
} | {
    id: string;
    data: {
        id: string;
        _transform: null;
        max: number;
        group: number;
        bezier: null;
        weight: number;
        min: number;
        step: number;
    }[];
} | {
    data: {
        bezier: null;
        id: string;
        _transform: null;
        max: number;
        weight: number;
        group: number;
        min: number;
        step: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        group: number;
        step: number;
        _transform: null;
        max: number;
        weight: number;
        min: number;
        id: string;
        bezier: null;
    }[];
} | {
    data: {
        step: number;
        group: number;
        max: number;
        min: number;
        bezier: null;
        id: string;
        weight: number;
        _transform: null;
    }[];
    id: string;
} | {
    id: string;
    data: {
        step: number;
        bezier: null;
        min: number;
        id: string;
        max: number;
        weight: number;
        group: number;
        _transform: null;
    }[];
} | {
    data: {
        _transform: null;
        weight: number;
        step: number;
        bezier: null;
        group: number;
        id: string;
        min: number;
        max: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        _transform: null;
        bezier: null;
        step: number;
        id: string;
        group: number;
        min: number;
        max: number;
        weight: number;
    }[];
} | {
    id: string;
    data: {
        group: number;
        _transform: null;
        step: number;
        id: string;
        max: number;
        min: number;
        weight: number;
        bezier: null;
    }[];
} | {
    id: string;
    data: {
        min: number;
        id: string;
        bezier: null;
        step: number;
        _transform: null;
        max: number;
        group: number;
        weight: number;
    }[];
} | {
    id: string;
    data: {
        group: number;
        step: number;
        min: number;
        id: string;
        bezier: null;
        _transform: null;
        max: number;
        weight: number;
    }[];
} | {
    id: string;
    data: {
        step: number;
        bezier: null;
        min: number;
        _transform: null;
        weight: number;
        id: string;
        group: number;
        max: number;
    }[];
} | {
    id: string;
    data: {
        max: number;
        bezier: null;
        group: number;
        weight: number;
        id: string;
        min: number;
        step: number;
        _transform: null;
    }[];
} | {
    id: string;
    data: {
        _transform: null;
        group: number;
        weight: number;
        max: number;
        min: number;
        step: number;
        bezier: null;
        id: string;
    }[];
} | {
    id: string;
    data: {
        step: number;
        group: number;
        min: number;
        weight: number;
        bezier: null;
        max: number;
        id: string;
        _transform: null;
    }[];
} | {
    data: {
        _transform: null;
        min: number;
        max: number;
        step: number;
        bezier: null;
        group: number;
        id: string;
        weight: number;
    }[];
    id: string;
} | {
    data: {
        weight: number;
        min: number;
        step: number;
        bezier: null;
        max: number;
        group: number;
        id: string;
        _transform: null;
    }[];
    id: string;
} | {
    id: string;
    data: {
        id: string;
        _transform: null;
        max: number;
        group: number;
        min: number;
        step: number;
        bezier: null;
        weight: number;
    }[];
} | {
    id: string;
    data: {
        id: string;
        step: number;
        max: number;
        weight: number;
        min: number;
        bezier: null;
        group: number;
        _transform: null;
    }[];
} | {
    id: string;
    data: {
        min: number;
        bezier: null;
        max: number;
        _transform: null;
        group: number;
        id: string;
        weight: number;
        step: number;
    }[];
} | {
    id: string;
    data: {
        group: number;
        id: string;
        max: number;
        step: number;
        min: number;
        bezier: null;
        weight: number;
        _transform: null;
    }[];
} | {
    id: string;
    data: {
        id: string;
        group: number;
        max: number;
        _transform: null;
        step: number;
        bezier: null;
        weight: number;
        min: number;
    }[];
} | {
    id: string;
    data: {
        bezier: null;
        _transform: null;
        group: number;
        id: string;
        step: number;
        min: number;
        max: number;
        weight: number;
    }[];
} | {
    data: {
        max: number;
        _transform: null;
        group: number;
        min: number;
        step: number;
        bezier: null;
        id: string;
        weight: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        id: string;
        weight: number;
        max: number;
        bezier: null;
        min: number;
        group: number;
        _transform: null;
        step: number;
    }[];
} | {
    data: {
        group: number;
        weight: number;
        _transform: null;
        id: string;
        bezier: null;
        min: number;
        step: number;
        max: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        group: number;
        weight: number;
        bezier: null;
        max: number;
        min: number;
        id: string;
        step: number;
        _transform: null;
    }[];
} | {
    id: string;
    data: {
        bezier: null;
        weight: number;
        max: number;
        step: number;
        _transform: null;
        id: string;
        group: number;
        min: number;
    }[];
} | {
    id: string;
    data: {
        group: number;
        _transform: null;
        max: number;
        weight: number;
        bezier: null;
        min: number;
        id: string;
        step: number;
    }[];
} | {
    id: string;
    data: {
        group: number;
        id: string;
        weight: number;
        _transform: null;
        min: number;
        bezier: null;
        max: number;
        step: number;
    }[];
} | {
    id: string;
    data: {
        bezier: null;
        max: number;
        _transform: null;
        step: number;
        group: number;
        id: string;
        weight: number;
        min: number;
    }[];
} | {
    data: {
        step: number;
        group: number;
        _transform: null;
        id: string;
        min: number;
        bezier: null;
        weight: number;
        max: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        id: string;
        bezier: null;
        _transform: null;
        min: number;
        group: number;
        max: number;
        step: number;
        weight: number;
    }[];
} | {
    data: {
        min: number;
        max: number;
        step: number;
        id: string;
        group: number;
        _transform: null;
        bezier: null;
        weight: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        step: number;
        id: string;
        bezier: null;
        weight: number;
        _transform: null;
        group: number;
        min: number;
        max: number;
    }[];
} | {
    id: string;
    data: {
        step: number;
        group: number;
        weight: number;
        min: number;
        id: string;
        _transform: null;
        bezier: null;
        max: number;
    }[];
} | {
    id: string;
    data: {
        group: number;
        max: number;
        bezier: null;
        min: number;
        _transform: null;
        id: string;
        weight: number;
        step: number;
    }[];
} | {
    data: {
        bezier: null;
        max: number;
        min: number;
        step: number;
        id: string;
        _transform: null;
        group: number;
        weight: number;
    }[];
    id: string;
} | {
    data: {
        group: number;
        id: string;
        min: number;
        step: number;
        bezier: null;
        weight: number;
        _transform: null;
        max: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        _transform: null;
        min: number;
        id: string;
        bezier: null;
        group: number;
        max: number;
        weight: number;
        step: number;
    }[];
} | {
    id: string;
    data: {
        step: number;
        min: number;
        group: number;
        id: string;
        weight: number;
        bezier: null;
        _transform: null;
        max: number;
    }[];
} | {
    id: string;
    data: {
        group: number;
        weight: number;
        max: number;
        bezier: null;
        _transform: null;
        min: number;
        id: string;
        step: number;
    }[];
} | {
    id: string;
    data: {
        _transform: null;
        group: number;
        step: number;
        min: number;
        bezier: null;
        max: number;
        id: string;
        weight: number;
    }[];
} | {
    id: string;
    data: {
        group: number;
        bezier: null;
        weight: number;
        _transform: null;
        min: number;
        id: string;
        step: number;
        max: number;
    }[];
} | {
    id: string;
    data: {
        group: number;
        bezier: null;
        _transform: null;
        max: number;
        min: number;
        id: string;
        weight: number;
        step: number;
    }[];
} | {
    id: string;
    data: ({
        max: number;
        weight: number;
        bezier: null;
        id: string;
        _transform: null;
        min: number;
        step: number;
        group: number;
        dynamicPoolId?: undefined;
    } | {
        max: number;
        _transform: null;
        group: number;
        id: string;
        step: number;
        bezier: null;
        min: number;
        weight: number;
        dynamicPoolId: string;
    })[];
} | {
    data: {
        bezier: null;
        min: number;
        _transform: null;
        step: number;
        group: number;
        max: number;
        weight: number;
        id: string;
    }[];
    id: string;
} | {
    data: ({
        id: string;
        min: number;
        step: number;
        group: number;
        _transform: null;
        max: number;
        weight: number;
        bezier: null;
        dynamicPoolId?: undefined;
    } | {
        id: string;
        min: number;
        weight: number;
        max: number;
        step: number;
        dynamicPoolId: string;
        bezier: null;
        group: number;
        _transform: null;
    })[];
    id: string;
} | {
    data: {
        _transform: null;
        max: number;
        step: number;
        group: number;
        min: number;
        bezier: null;
        weight: number;
        id: string;
    }[];
    id: string;
} | {
    data: {
        weight: number;
        step: number;
        group: number;
        id: string;
        max: number;
        min: number;
        bezier: null;
        _transform: null;
    }[];
    id: string;
} | {
    data: {
        step: number;
        _transform: null;
        bezier: null;
        max: number;
        min: number;
        group: number;
        id: string;
        weight: number;
    }[];
    id: string;
} | {
    data: ({
        max: number;
        id: string;
        weight: number;
        min: number;
        group: number;
        bezier: null;
        step: number;
        _transform: null;
        dynamicPoolId?: undefined;
    } | {
        dynamicPoolId: string;
        id: string;
        weight: number;
        _transform: null;
        step: number;
        min: number;
        bezier: null;
        group: number;
        max: number;
    })[];
    id: string;
} | {
    data: ({
        id: string;
        max: number;
        group: number;
        min: number;
        _transform: null;
        bezier: null;
        weight: number;
        step: number;
        dynamicPoolId?: undefined;
    } | {
        id: string;
        bezier: null;
        max: number;
        _transform: null;
        group: number;
        weight: number;
        dynamicPoolId: string;
        min: number;
        step: number;
    })[];
    id: string;
    updatedAt: {
        _seconds: number;
        _nanoseconds: number;
    };
} | {
    data: {
        group: number;
        bezier: null;
        min: number;
        _transform: null;
        weight: number;
        max: number;
        id: string;
        step: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        group: number;
        weight: number;
        bezier: null;
        min: number;
        step: number;
        max: number;
        id: string;
        _transform: null;
    }[];
} | {
    id: string;
    data: {
        min: number;
        id: string;
        weight: number;
        max: number;
        step: number;
        group: number;
        _transform: null;
        bezier: null;
    }[];
} | {
    id: string;
    data: {
        step: number;
        bezier: null;
        weight: number;
        min: number;
        id: string;
        group: number;
        _transform: null;
        max: number;
    }[];
} | {
    id: string;
    data: {
        _transform: null;
        max: number;
        weight: number;
        bezier: null;
        group: number;
        step: number;
        id: string;
        min: number;
    }[];
} | {
    data: {
        max: number;
        bezier: null;
        id: string;
        step: number;
        min: number;
        weight: number;
        group: number;
        _transform: null;
    }[];
    id: string;
} | {
    id: string;
    data: {
        _transform: null;
        min: number;
        weight: number;
        group: number;
        bezier: null;
        id: string;
        max: number;
        step: number;
    }[];
} | {
    id: string;
    data: {
        id: string;
        bezier: null;
        _transform: null;
        group: number;
        min: number;
        weight: number;
        max: number;
        step: number;
    }[];
} | {
    id: string;
    data: {
        _transform: null;
        step: number;
        min: number;
        weight: number;
        group: number;
        max: number;
        bezier: null;
        id: string;
    }[];
} | {
    id: string;
    data: {
        group: number;
        bezier: null;
        step: number;
        weight: number;
        min: number;
        _transform: null;
        id: string;
        max: number;
    }[];
} | {
    data: {
        max: number;
        group: number;
        bezier: null;
        step: number;
        min: number;
        id: string;
        weight: number;
        _transform: null;
    }[];
    id: string;
} | {
    id: string;
    data: {
        _transform: null;
        weight: number;
        id: string;
        max: number;
        group: number;
        min: number;
        step: number;
        bezier: null;
    }[];
} | {
    id: string;
    data: {
        bezier: null;
        id: string;
        step: number;
        _transform: null;
        weight: number;
        group: number;
        min: number;
        max: number;
    }[];
} | {
    data: {
        group: number;
        bezier: null;
        min: number;
        weight: number;
        _transform: null;
        step: number;
        max: number;
        id: string;
    }[];
    id: string;
} | {
    data: {
        step: number;
        max: number;
        group: number;
        id: string;
        min: number;
        _transform: null;
        weight: number;
        bezier: null;
    }[];
    id: string;
} | {
    id: string;
    data: {
        id: string;
        step: number;
        max: number;
        _transform: null;
        group: number;
        min: number;
        bezier: null;
        weight: number;
    }[];
} | {
    data: {
        min: number;
        max: number;
        weight: number;
        bezier: null;
        step: number;
        group: number;
        id: string;
        _transform: null;
    }[];
    id: string;
} | {
    id: string;
    data: {
        bezier: null;
        step: number;
        _transform: null;
        min: number;
        id: string;
        weight: number;
        group: number;
        max: number;
    }[];
} | {
    data: {
        id: string;
        weight: number;
        bezier: null;
        _transform: null;
        max: number;
        step: number;
        group: number;
        min: number;
    }[];
    id: string;
} | {
    data: {
        _transform: null;
        bezier: null;
        step: number;
        max: number;
        group: number;
        weight: number;
        min: number;
        id: string;
    }[];
    id: string;
} | {
    id: string;
    data: {
        weight: number;
        step: number;
        group: number;
        bezier: null;
        min: number;
        _transform: null;
        max: number;
        id: string;
    }[];
} | {
    data: {
        weight: number;
        id: string;
        _transform: null;
        max: number;
        step: number;
        bezier: null;
        min: number;
        group: number;
    }[];
    id: string;
} | {
    data: {
        max: number;
        weight: number;
        _transform: null;
        group: number;
        min: number;
        bezier: null;
        id: string;
        step: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        weight: number;
        step: number;
        max: number;
        min: number;
        bezier: null;
        _transform: null;
        group: number;
        id: string;
    }[];
} | {
    id: string;
    data: {
        weight: number;
        group: number;
        step: number;
        bezier: null;
        id: string;
        _transform: null;
        max: number;
        min: number;
    }[];
} | {
    id: string;
    data: {
        step: number;
        group: number;
        id: string;
        max: number;
        _transform: null;
        weight: number;
        min: number;
        bezier: null;
    }[];
} | {
    id: string;
    data: {
        weight: number;
        bezier: null;
        step: number;
        id: string;
        _transform: null;
        group: number;
        min: number;
        max: number;
    }[];
} | {
    data: {
        max: number;
        step: number;
        group: number;
        weight: number;
        min: number;
        bezier: null;
        id: string;
        _transform: null;
    }[];
    id: string;
} | {
    data: {
        bezier: null;
        group: number;
        step: number;
        max: number;
        weight: number;
        min: number;
        id: string;
        _transform: null;
    }[];
    id: string;
} | {
    data: {
        step: number;
        max: number;
        id: string;
        weight: number;
        group: number;
        bezier: null;
        _transform: null;
        min: number;
    }[];
    id: string;
} | {
    id: string;
    data: ({
        id: string;
        _transform: null;
        bezier: null;
        step: number;
        min: number;
        dynamicPoolId: string;
        group: number;
        max: number;
        weight: number;
    } | {
        bezier: null;
        step: number;
        group: number;
        weight: number;
        id: string;
        _transform: null;
        min: number;
        max: number;
        dynamicPoolId?: undefined;
    })[];
} | {
    id: string;
    data: ({
        weight: number;
        max: number;
        group: number;
        min: number;
        id: string;
        step: number;
        bezier: null;
        _transform: null;
    } | {
        group: number;
        bezier: null;
        _transform: null;
        weight: number;
        id: null;
        max: number;
        step: number;
        min: number;
    })[];
} | {
    data: {
        bezier: null;
        step: number;
        id: string;
        _transform: null;
        weight: number;
        group: number;
        min: number;
        max: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        min: number;
        bezier: null;
        id: string;
        _transform: null;
        max: number;
        weight: number;
        group: number;
        step: number;
    }[];
} | {
    data: ({
        weight: number;
        group: number;
        _transform: null;
        bezier: null;
        min: number;
        id: string;
        max: number;
        step: number;
    } | {
        step: number;
        weight: number;
        max: number;
        min: number;
        bezier: null;
        id: null;
        group: number;
        _transform: null;
    })[];
    id: string;
} | {
    data: {
        _transform: null;
        weight: number;
        step: number;
        min: number;
        id: string;
        group: number;
        bezier: null;
        max: number;
    }[];
    id: string;
} | {
    data: {
        bezier: null;
        _transform: null;
        group: number;
        weight: number;
        id: string;
        max: number;
        min: number;
        step: number;
    }[];
    id: string;
} | {
    data: {
        id: string;
        bezier: null;
        _transform: null;
        weight: number;
        max: number;
        group: number;
        min: number;
        step: number;
    }[];
    id: string;
} | {
    data: {
        _transform: null;
        bezier: null;
        max: number;
        min: number;
        group: number;
        weight: number;
        id: string;
        step: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        id: string;
        group: number;
        bezier: null;
        min: number;
        step: number;
        max: number;
        _transform: null;
        weight: number;
    }[];
} | {
    data: {
        max: number;
        min: number;
        _transform: null;
        id: string;
        group: number;
        bezier: null;
        step: number;
        weight: number;
    }[];
    id: string;
} | {
    data: {
        bezier: null;
        min: number;
        max: number;
        _transform: null;
        weight: number;
        step: number;
        id: string;
        group: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        step: number;
        _transform: null;
        group: number;
        bezier: null;
        id: string;
        min: number;
        weight: number;
        max: number;
    }[];
} | {
    id: string;
    data: {
        group: number;
        bezier: null;
        step: number;
        weight: number;
        id: string;
        _transform: null;
        min: number;
        max: number;
    }[];
} | {
    data: {
        id: string;
        min: number;
        max: number;
        weight: number;
        step: number;
        bezier: null;
        _transform: null;
        group: number;
    }[];
    id: string;
} | {
    data: {
        min: number;
        max: number;
        _transform: null;
        id: string;
        step: number;
        bezier: null;
        weight: number;
        group: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        bezier: null;
        _transform: null;
        step: number;
        max: number;
        group: number;
        min: number;
        weight: number;
        id: string;
    }[];
} | {
    id: string;
    data: {
        _transform: null;
        min: number;
        step: number;
        id: string;
        max: number;
        bezier: null;
        group: number;
        weight: number;
    }[];
} | {
    id: string;
    data: {
        bezier: null;
        id: string;
        max: number;
        min: number;
        _transform: null;
        step: number;
        group: number;
        weight: number;
    }[];
} | {
    data: {
        weight: number;
        bezier: null;
        step: number;
        _transform: null;
        max: number;
        min: number;
        group: number;
        id: string;
    }[];
    id: string;
} | {
    id: string;
    data: {
        id: string;
        _transform: null;
        max: number;
        min: number;
        weight: number;
        step: number;
        group: number;
        bezier: null;
    }[];
} | {
    id: string;
    data: {
        id: string;
        weight: number;
        _transform: null;
        group: number;
        step: number;
        bezier: null;
        min: number;
        max: number;
    }[];
} | {
    id: string;
    data: {
        step: number;
        max: number;
        id: string;
        min: number;
        bezier: null;
        _transform: null;
        group: number;
        weight: number;
    }[];
} | {
    data: {
        group: number;
        id: string;
        _transform: null;
        step: number;
        min: number;
        bezier: null;
        weight: number;
        max: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        bezier: null;
        id: string;
        max: number;
        _transform: null;
        min: number;
        group: number;
        weight: number;
        step: number;
    }[];
} | {
    id: string;
    data: {
        id: string;
        _transform: null;
        min: number;
        group: number;
        max: number;
        step: number;
        bezier: null;
        weight: number;
    }[];
} | {
    data: {
        step: number;
        max: number;
        group: number;
        weight: number;
        bezier: null;
        min: number;
        _transform: null;
        id: string;
    }[];
    id: string;
} | {
    id: string;
    data: {
        step: number;
        max: number;
        weight: number;
        min: number;
        id: string;
        group: number;
        _transform: null;
        bezier: null;
    }[];
} | {
    id: string;
    data: {
        group: number;
        id: string;
        max: number;
        min: number;
        weight: number;
        step: number;
        bezier: null;
        _transform: null;
    }[];
} | {
    id: string;
    data: {
        min: number;
        group: number;
        bezier: null;
        id: string;
        step: number;
        _transform: null;
        weight: number;
        max: number;
    }[];
} | {
    id: string;
    data: {
        bezier: null;
        weight: number;
        step: number;
        min: number;
        _transform: null;
        max: number;
        group: number;
        id: string;
    }[];
} | {
    data: {
        group: number;
        _transform: null;
        weight: number;
        step: number;
        bezier: null;
        id: string;
        max: number;
        min: number;
    }[];
    id: string;
} | {
    data: {
        min: number;
        bezier: null;
        max: number;
        step: number;
        _transform: null;
        id: string;
        weight: number;
        group: number;
    }[];
    id: string;
} | {
    data: {
        min: number;
        _transform: null;
        bezier: null;
        weight: number;
        max: number;
        step: number;
        group: number;
        id: string;
    }[];
    id: string;
} | {
    id: string;
    data: {
        min: number;
        step: number;
        bezier: null;
        _transform: null;
        max: number;
        id: string;
        group: number;
        weight: number;
    }[];
} | {
    id: string;
    data: {
        max: number;
        bezier: null;
        group: number;
        id: string;
        _transform: null;
        weight: number;
        min: number;
        step: number;
    }[];
} | {
    data: {
        group: number;
        id: string;
        bezier: null;
        _transform: null;
        weight: number;
        step: number;
        min: number;
        max: number;
    }[];
    id: string;
} | {
    data: {
        _transform: null;
        bezier: null;
        group: number;
        weight: number;
        min: number;
        step: number;
        id: string;
        max: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        weight: number;
        min: number;
        group: number;
        max: number;
        bezier: null;
        id: string;
        _transform: null;
        step: number;
    }[];
} | {
    id: string;
    data: {
        _transform: null;
        step: number;
        max: number;
        group: number;
        id: string;
        min: number;
        bezier: null;
        weight: number;
    }[];
} | {
    data: {
        step: number;
        id: string;
        group: number;
        bezier: null;
        weight: number;
        _transform: null;
        max: number;
        min: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        id: string;
        bezier: null;
        _transform: null;
        weight: number;
        min: number;
        max: number;
        step: number;
        group: number;
    }[];
} | {
    id: string;
    data: {
        max: number;
        step: number;
        min: number;
        weight: number;
        _transform: null;
        group: number;
        bezier: null;
        id: string;
    }[];
} | {
    id: string;
    data: {
        min: number;
        group: number;
        _transform: null;
        id: string;
        bezier: null;
        max: number;
        weight: number;
        step: number;
    }[];
} | {
    id: string;
    data: {
        min: number;
        step: number;
        bezier: null;
        max: number;
        _transform: null;
        weight: number;
        group: number;
        id: string;
    }[];
} | {
    id: string;
    data: {
        id: string;
        weight: number;
        step: number;
        bezier: null;
        min: number;
        group: number;
        _transform: null;
        max: number;
    }[];
} | {
    data: {
        bezier: null;
        max: number;
        min: number;
        group: number;
        _transform: null;
        weight: number;
        id: string;
        step: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        step: number;
        min: number;
        id: string;
        bezier: null;
        group: number;
        max: number;
        _transform: null;
        weight: number;
    }[];
} | {
    id: string;
    data: {
        group: number;
        step: number;
        id: string;
        _transform: null;
        min: number;
        weight: number;
        max: number;
        bezier: null;
    }[];
} | {
    data: {
        _transform: null;
        max: number;
        bezier: null;
        group: number;
        id: string;
        min: number;
        weight: number;
        step: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        bezier: null;
        max: number;
        weight: number;
        group: number;
        _transform: null;
        min: number;
        id: string;
        step: number;
    }[];
} | {
    data: {
        max: number;
        min: number;
        step: number;
        id: string;
        group: number;
        _transform: null;
        bezier: null;
        weight: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        id: string;
        min: number;
        group: number;
        _transform: null;
        step: number;
        bezier: null;
        max: number;
        weight: number;
    }[];
} | {
    id: string;
    data: {
        min: number;
        group: number;
        bezier: null;
        step: number;
        max: number;
        _transform: null;
        id: string;
        weight: number;
    }[];
} | {
    data: {
        step: number;
        weight: number;
        group: number;
        id: string;
        _transform: null;
        max: number;
        min: number;
        bezier: null;
    }[];
    id: string;
} | {
    id: string;
    data: {
        group: number;
        min: number;
        id: string;
        max: number;
        bezier: null;
        _transform: null;
        weight: number;
        step: number;
    }[];
} | {
    id: string;
    data: {
        bezier: null;
        group: number;
        step: number;
        min: number;
        weight: number;
        id: string;
        _transform: null;
        max: number;
    }[];
} | {
    id: string;
    data: {
        weight: number;
        _transform: null;
        max: number;
        id: string;
        min: number;
        step: number;
        bezier: null;
        group: number;
    }[];
} | {
    data: {
        bezier: null;
        group: number;
        weight: number;
        min: number;
        step: number;
        id: string;
        max: number;
        _transform: null;
    }[];
    id: string;
} | {
    id: string;
    data: {
        weight: number;
        group: number;
        max: number;
        min: number;
        step: number;
        bezier: null;
        id: string;
        _transform: null;
    }[];
} | {
    data: {
        min: number;
        max: number;
        bezier: null;
        id: string;
        _transform: null;
        weight: number;
        step: number;
        group: number;
    }[];
    id: string;
} | {
    data: {
        step: number;
        bezier: null;
        max: number;
        weight: number;
        id: string;
        group: number;
        _transform: null;
        min: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        id: string;
        min: number;
        group: number;
        bezier: null;
        _transform: null;
        step: number;
        weight: number;
        max: number;
    }[];
} | {
    id: string;
    data: {
        step: number;
        group: number;
        max: number;
        _transform: null;
        weight: number;
        min: number;
        id: string;
        bezier: null;
    }[];
} | {
    data: {
        step: number;
        min: number;
        group: number;
        max: number;
        bezier: null;
        id: string;
        _transform: null;
        weight: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        bezier: null;
        min: number;
        max: number;
        group: number;
        id: string;
        step: number;
        weight: number;
        _transform: null;
    }[];
} | {
    data: {
        id: string;
        step: number;
        max: number;
        weight: number;
        group: number;
        bezier: null;
        min: number;
        _transform: null;
    }[];
    id: string;
} | {
    id: string;
    data: {
        step: number;
        bezier: null;
        _transform: null;
        weight: number;
        group: number;
        id: string;
        max: number;
        min: number;
    }[];
} | {
    id: string;
    data: {
        _transform: null;
        step: number;
        group: number;
        bezier: null;
        max: number;
        weight: number;
        id: string;
        min: number;
    }[];
} | {
    data: {
        id: string;
        min: number;
        _transform: null;
        bezier: null;
        step: number;
        max: number;
        weight: number;
        group: number;
    }[];
    id: string;
} | {
    data: {
        step: number;
        _transform: null;
        min: number;
        weight: number;
        max: number;
        id: string;
        group: number;
        bezier: null;
    }[];
    id: string;
} | {
    data: {
        step: number;
        group: number;
        id: string;
        min: number;
        bezier: null;
        max: number;
        _transform: null;
        weight: number;
    }[];
    id: string;
} | {
    data: {
        max: number;
        step: number;
        bezier: null;
        weight: number;
        _transform: null;
        min: number;
        group: number;
        id: string;
    }[];
    id: string;
} | {
    data: {
        group: number;
        min: number;
        _transform: null;
        max: number;
        bezier: null;
        id: string;
        step: number;
        weight: number;
    }[];
    id: string;
} | {
    data: {
        bezier: null;
        _transform: null;
        min: number;
        max: number;
        step: number;
        group: number;
        id: string;
        weight: number;
    }[];
    id: string;
} | {
    data: {
        step: number;
        bezier: null;
        min: number;
        _transform: null;
        group: number;
        id: string;
        weight: number;
        max: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        group: number;
        weight: number;
        step: number;
        _transform: null;
        id: string;
        min: number;
        max: number;
        bezier: null;
    }[];
} | {
    id: string;
    data: {
        max: number;
        _transform: null;
        step: number;
        id: string;
        bezier: null;
        group: number;
        min: number;
        weight: number;
    }[];
} | {
    data: {
        id: string;
        max: number;
        step: number;
        _transform: null;
        min: number;
        group: number;
        bezier: null;
        weight: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        step: number;
        group: number;
        _transform: null;
        weight: number;
        id: string;
        min: number;
        bezier: null;
        max: number;
    }[];
} | {
    data: {
        weight: number;
        _transform: null;
        id: string;
        min: number;
        bezier: null;
        step: number;
        max: number;
        group: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        _transform: null;
        id: string;
        weight: number;
        group: number;
        min: number;
        bezier: null;
        step: number;
        max: number;
    }[];
} | {
    id: string;
    data: {
        group: number;
        min: number;
        step: number;
        weight: number;
        id: string;
        _transform: null;
        max: number;
        bezier: null;
    }[];
} | {
    id: string;
    data: {
        weight: number;
        max: number;
        step: number;
        _transform: null;
        group: number;
        id: string;
        min: number;
        bezier: null;
    }[];
} | {
    id: string;
    data: {
        id: string;
        weight: number;
        _transform: null;
        max: number;
        min: number;
        group: number;
        step: number;
        bezier: null;
    }[];
} | {
    id: string;
    data: {
        max: number;
        _transform: null;
        bezier: null;
        weight: number;
        id: string;
        min: number;
        group: number;
        step: number;
    }[];
} | {
    id: string;
    data: {
        bezier: null;
        min: number;
        group: number;
        step: number;
        id: string;
        _transform: null;
        weight: number;
        max: number;
    }[];
} | {
    data: {
        weight: number;
        step: number;
        group: number;
        bezier: null;
        min: number;
        id: string;
        _transform: null;
        max: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        min: number;
        id: string;
        weight: number;
        group: number;
        bezier: null;
        _transform: null;
        max: number;
        step: number;
    }[];
} | {
    data: {
        min: number;
        id: string;
        _transform: null;
        step: number;
        max: number;
        group: number;
        bezier: null;
        weight: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        step: number;
        weight: number;
        max: number;
        group: number;
        id: string;
        _transform: null;
        bezier: null;
        min: number;
    }[];
} | {
    id: string;
    data: {
        bezier: null;
        _transform: null;
        weight: number;
        group: number;
        min: number;
        step: number;
        id: string;
        max: number;
    }[];
} | {
    data: {
        group: number;
        bezier: null;
        min: number;
        id: string;
        step: number;
        _transform: null;
        max: number;
        weight: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        weight: number;
        step: number;
        _transform: null;
        bezier: null;
        min: number;
        max: number;
        group: number;
        id: string;
    }[];
} | {
    id: string;
    data: {
        bezier: null;
        id: string;
        weight: number;
        max: number;
        _transform: null;
        step: number;
        min: number;
        group: number;
    }[];
} | {
    id: string;
    data: {
        group: number;
        id: string;
        weight: number;
        _transform: null;
        step: number;
        bezier: null;
        min: number;
        max: number;
    }[];
} | {
    id: string;
    data: {
        step: number;
        _transform: null;
        weight: number;
        id: string;
        max: number;
        group: number;
        min: number;
        bezier: null;
    }[];
} | {
    id: string;
    data: {
        id: string;
        weight: number;
        bezier: null;
        _transform: null;
        group: number;
        step: number;
        min: number;
        max: number;
    }[];
} | {
    data: {
        group: number;
        bezier: null;
        _transform: null;
        min: number;
        weight: number;
        step: number;
        max: number;
        id: string;
    }[];
    id: string;
} | {
    id: string;
    data: {
        weight: number;
        min: number;
        id: string;
        max: number;
        _transform: null;
        step: number;
        group: number;
        bezier: null;
    }[];
} | {
    id: string;
    data: {
        weight: number;
        id: string;
        step: number;
        _transform: null;
        max: number;
        min: number;
        group: number;
        bezier: null;
    }[];
} | {
    data: {
        id: string;
        bezier: null;
        max: number;
        group: number;
        _transform: null;
        weight: number;
        step: number;
        min: number;
    }[];
    id: string;
} | {
    data: {
        group: number;
        id: string;
        max: number;
        bezier: null;
        min: number;
        step: number;
        _transform: null;
        weight: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        step: number;
        min: number;
        max: number;
        _transform: null;
        group: number;
        weight: number;
        id: string;
        bezier: null;
    }[];
} | {
    data: {
        bezier: null;
        group: number;
        weight: number;
        _transform: null;
        step: number;
        min: number;
        max: number;
        id: string;
    }[];
    id: string;
} | {
    id: string;
    data: {
        min: number;
        step: number;
        max: number;
        _transform: null;
        id: string;
        weight: number;
        group: number;
        bezier: null;
    }[];
} | {
    id: string;
    data: {
        _transform: null;
        group: number;
        max: number;
        id: string;
        weight: number;
        bezier: null;
        step: number;
        min: number;
    }[];
} | {
    data: {
        group: number;
        _transform: null;
        max: number;
        weight: number;
        step: number;
        id: string;
        bezier: null;
        min: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        id: string;
        max: number;
        _transform: null;
        bezier: null;
        weight: number;
        group: number;
        min: number;
        step: number;
    }[];
} | {
    id: string;
    data: {
        step: number;
        weight: number;
        bezier: null;
        min: number;
        _transform: null;
        group: number;
        id: string;
        max: number;
    }[];
} | {
    data: {
        bezier: null;
        id: string;
        group: number;
        min: number;
        weight: number;
        _transform: null;
        max: number;
        step: number;
    }[];
    id: string;
} | {
    data: {
        step: number;
        bezier: null;
        weight: number;
        _transform: null;
        min: number;
        id: string;
        group: number;
        max: number;
    }[];
    id: string;
} | {
    data: {
        id: string;
        step: number;
        max: number;
        bezier: null;
        group: number;
        min: number;
        weight: number;
        _transform: null;
    }[];
    id: string;
} | {
    id: string;
    data: {
        max: number;
        group: number;
        id: string;
        min: number;
        weight: number;
        _transform: null;
        step: number;
        bezier: null;
    }[];
} | {
    data: {
        _transform: null;
        weight: number;
        bezier: null;
        max: number;
        id: string;
        min: number;
        group: number;
        step: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        group: number;
        _transform: null;
        id: string;
        min: number;
        step: number;
        weight: number;
        max: number;
        bezier: null;
    }[];
} | {
    id: string;
    data: {
        id: string;
        bezier: null;
        weight: number;
        min: number;
        max: number;
        group: number;
        _transform: null;
        step: number;
    }[];
} | {
    id: string;
    data: {
        min: number;
        bezier: null;
        step: number;
        max: number;
        weight: number;
        id: string;
        group: number;
        _transform: null;
    }[];
} | {
    data: {
        _transform: null;
        bezier: null;
        group: number;
        id: string;
        min: number;
        max: number;
        step: number;
        weight: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        id: string;
        bezier: null;
        weight: number;
        _transform: null;
        step: number;
        max: number;
        min: number;
        group: number;
    }[];
} | {
    data: {
        group: number;
        _transform: null;
        id: string;
        step: number;
        max: number;
        weight: number;
        min: number;
        bezier: null;
    }[];
    id: string;
} | {
    data: {
        group: number;
        min: number;
        step: number;
        _transform: null;
        bezier: null;
        max: number;
        weight: number;
        id: string;
    }[];
    id: string;
} | {
    id: string;
    data: {
        max: number;
        group: number;
        _transform: null;
        weight: number;
        id: string;
        step: number;
        bezier: null;
        min: number;
    }[];
} | {
    id: string;
    data: {
        weight: number;
        id: string;
        max: number;
        _transform: null;
        min: number;
        bezier: null;
        group: number;
        step: number;
    }[];
} | {
    id: string;
    data: {
        _transform: null;
        bezier: null;
        min: number;
        step: number;
        id: string;
        group: number;
        max: number;
        weight: number;
    }[];
} | {
    id: string;
    data: {
        min: number;
        step: number;
        max: number;
        weight: number;
        bezier: null;
        id: string;
        _transform: null;
        group: number;
    }[];
} | {
    id: string;
    data: {
        max: number;
        step: number;
        _transform: null;
        min: number;
        group: number;
        bezier: null;
        weight: number;
        id: string;
    }[];
} | {
    data: {
        bezier: null;
        id: string;
        weight: number;
        min: number;
        group: number;
        step: number;
        max: number;
        _transform: null;
    }[];
    id: string;
} | {
    data: {
        bezier: null;
        id: string;
        weight: number;
        group: number;
        max: number;
        _transform: null;
        step: number;
        min: number;
    }[];
    id: string;
} | {
    data: {
        _transform: null;
        max: number;
        id: string;
        weight: number;
        group: number;
        step: number;
        bezier: null;
        min: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        step: number;
        weight: number;
        group: number;
        bezier: null;
        min: number;
        _transform: null;
        id: string;
        max: number;
    }[];
} | {
    data: {
        _transform: null;
        min: number;
        max: number;
        bezier: null;
        group: number;
        id: string;
        step: number;
        weight: number;
    }[];
    id: string;
} | {
    data: {
        id: string;
        max: number;
        _transform: null;
        min: number;
        step: number;
        group: number;
        weight: number;
        bezier: null;
    }[];
    id: string;
} | {
    id: string;
    data: {
        step: number;
        max: number;
        bezier: null;
        id: string;
        min: number;
        group: number;
        weight: number;
        _transform: null;
    }[];
} | {
    data: {
        max: number;
        _transform: null;
        group: number;
        step: number;
        weight: number;
        min: number;
        id: string;
        bezier: null;
    }[];
    id: string;
} | {
    data: {
        _transform: null;
        id: string;
        min: number;
        weight: number;
        bezier: null;
        group: number;
        step: number;
        max: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        max: number;
        min: number;
        step: number;
        bezier: null;
        weight: number;
        id: string;
        _transform: null;
        group: number;
    }[];
} | {
    id: string;
    data: {
        max: number;
        weight: number;
        bezier: null;
        min: number;
        _transform: null;
        step: number;
        group: number;
        id: string;
    }[];
} | {
    data: {
        id: string;
        _transform: null;
        max: number;
        group: number;
        step: number;
        min: number;
        weight: number;
        bezier: null;
    }[];
    id: string;
} | {
    id: string;
    data: {
        _transform: null;
        min: number;
        weight: number;
        step: number;
        id: string;
        max: number;
        group: number;
        bezier: null;
    }[];
} | {
    data: {
        id: string;
        min: number;
        weight: number;
        _transform: null;
        step: number;
        bezier: null;
        max: number;
        group: number;
    }[];
    id: string;
} | {
    data: {
        id: string;
        min: number;
        group: number;
        bezier: null;
        max: number;
        step: number;
        _transform: null;
        weight: number;
    }[];
    id: string;
} | {
    data: {
        group: number;
        _transform: null;
        id: string;
        max: number;
        min: number;
        bezier: null;
        weight: number;
        step: number;
    }[];
    id: string;
} | {
    data: {
        bezier: null;
        step: number;
        min: number;
        _transform: null;
        max: number;
        weight: number;
        group: number;
        id: string;
    }[];
    id: string;
} | {
    id: string;
    data: {
        _transform: null;
        step: number;
        bezier: null;
        group: number;
        max: number;
        min: number;
        weight: number;
        id: string;
    }[];
} | {
    data: {
        group: number;
        max: number;
        step: number;
        min: number;
        bezier: null;
        _transform: null;
        id: string;
        weight: number;
    }[];
    id: string;
} | {
    data: {
        bezier: null;
        _transform: null;
        id: string;
        group: number;
        min: number;
        weight: number;
        step: number;
        max: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        _transform: null;
        min: number;
        bezier: null;
        max: number;
        weight: number;
        step: number;
        id: string;
        group: number;
    }[];
} | {
    data: {
        max: number;
        id: string;
        weight: number;
        group: number;
        min: number;
        step: number;
        _transform: null;
        bezier: null;
    }[];
    id: string;
} | {
    data: {
        group: number;
        _transform: null;
        id: string;
        max: number;
        weight: number;
        step: number;
        min: number;
        bezier: null;
    }[];
    id: string;
} | {
    data: {
        max: number;
        step: number;
        bezier: null;
        id: string;
        _transform: null;
        min: number;
        group: number;
        weight: number;
    }[];
    id: string;
} | {
    data: {
        group: number;
        id: string;
        min: number;
        weight: number;
        _transform: null;
        bezier: null;
        step: number;
        max: number;
    }[];
    id: string;
} | {
    data: {
        min: number;
        bezier: null;
        id: string;
        _transform: null;
        weight: number;
        max: number;
        step: number;
        group: number;
    }[];
    id: string;
} | {
    data: {
        group: number;
        bezier: null;
        _transform: null;
        weight: number;
        step: number;
        min: number;
        max: number;
        id: string;
    }[];
    id: string;
} | {
    data: {
        group: number;
        _transform: null;
        id: string;
        bezier: null;
        max: number;
        min: number;
        weight: number;
        step: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        id: string;
        bezier: null;
        weight: number;
        _transform: null;
        max: number;
        step: number;
        min: number;
        group: number;
    }[];
} | {
    id: string;
    data: ({
        max: number;
        weight: number;
        group: number;
        id: string;
        bezier: null;
        step: number;
        _transform: null;
        min: number;
    } | {
        id: null;
        _transform: null;
        step: number;
        weight: number;
        bezier: null;
        max: number;
        min: number;
        group: number;
    })[];
} | {
    data: {
        weight: number;
        id: null;
        bezier: null;
        max: number;
        group: number;
        _transform: null;
        step: number;
        min: number;
    }[];
    id: string;
} | {
    data: {
        step: number;
        min: number;
        _transform: null;
        max: number;
        weight: number;
        group: number;
        dynamicPoolId: string;
        bezier: null;
        id: string;
    }[];
    id: string;
} | {
    data: {
        step: number;
        max: number;
        id: string;
        weight: number;
        bezier: null;
        _transform: null;
        dynamicPoolId: string;
        group: number;
        min: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        dynamicPoolId: string;
        id: string;
        _transform: null;
        bezier: null;
        max: number;
        weight: number;
        min: number;
        group: number;
        step: number;
    }[];
} | {
    data: {
        bezier: null;
        _transform: null;
        min: number;
        dynamicPoolId: string;
        max: number;
        id: string;
        weight: number;
        group: number;
        step: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        group: number;
        weight: number;
        dynamicPoolId: string;
        _transform: null;
        max: number;
        bezier: null;
        step: number;
        id: string;
        min: number;
    }[];
} | {
    id: string;
    data: {
        group: number;
        bezier: null;
        _transform: null;
        max: number;
        weight: number;
        dynamicPoolId: string;
        min: number;
        id: string;
        step: number;
    }[];
} | {
    data: {
        max: number;
        id: string;
        step: number;
        dynamicPoolId: string;
        weight: number;
        group: number;
        bezier: null;
        _transform: null;
        min: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        bezier: null;
        id: string;
        step: number;
        max: number;
        min: number;
        group: number;
        weight: number;
        _transform: null;
    }[];
} | {
    id: string;
    data: {
        _transform: null;
        group: number;
        bezier: null;
        step: number;
        id: string;
        max: number;
        min: number;
        weight: number;
    }[];
} | {
    data: {
        _transform: null;
        max: number;
        bezier: null;
        min: number;
        group: number;
        id: string;
        step: number;
        weight: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        bezier: null;
        _transform: null;
        step: number;
        min: number;
        max: number;
        id: string;
        group: number;
        weight: number;
    }[];
} | {
    data: {
        id: string;
        step: number;
        weight: number;
        bezier: null;
        max: number;
        group: number;
        min: number;
        _transform: null;
    }[];
    id: string;
} | {
    id: string;
    data: {
        bezier: null;
        min: number;
        max: number;
        group: number;
        id: string;
        weight: number;
        _transform: null;
        step: number;
    }[];
} | {
    data: ({
        min: number;
        id: string;
        _transform: null;
        max: number;
        weight: number;
        dynamicPoolId: string;
        bezier: null;
        step: number;
        group: number;
    } | {
        _transform: null;
        group: number;
        id: string;
        step: number;
        max: number;
        min: number;
        bezier: null;
        weight: number;
        dynamicPoolId?: undefined;
    })[];
    id: string;
} | {
    data: {
        min: number;
        max: number;
        group: number;
        _transform: null;
        id: string;
        weight: number;
        bezier: null;
        step: number;
    }[];
    id: string;
} | {
    id: string;
    data: ({
        group: number;
        bezier: null;
        weight: number;
        step: number;
        _transform: null;
        max: number;
        id: string;
        min: number;
    } | {
        _transform: null;
        id: null;
        weight: number;
        group: number;
        step: number;
        max: number;
        bezier: null;
        min: number;
    })[];
} | {
    id: string;
    data: {
        step: number;
        bezier: null;
        min: number;
        weight: number;
        _transform: null;
        group: number;
        id: string;
        max: number;
    }[];
} | {
    data: {
        max: number;
        min: number;
        _transform: null;
        bezier: null;
        step: number;
        group: number;
        id: string;
        weight: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        max: number;
        group: number;
        bezier: null;
        weight: number;
        min: number;
        id: string;
        step: number;
        _transform: null;
    }[];
} | {
    id: string;
    data: {
        step: number;
        group: number;
        min: number;
        max: number;
        bezier: null;
        _transform: null;
        id: string;
        weight: number;
    }[];
} | {
    data: {
        min: number;
        max: number;
        bezier: null;
        group: number;
        step: number;
        id: string;
        _transform: null;
        weight: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        min: number;
        _transform: null;
        bezier: null;
        max: number;
        id: string;
        step: number;
        group: number;
        weight: number;
    }[];
} | {
    data: {
        min: number;
        group: number;
        step: number;
        weight: number;
        _transform: null;
        id: string;
        bezier: null;
        max: number;
    }[];
    id: string;
} | {
    data: {
        min: number;
        bezier: null;
        group: number;
        max: number;
        id: string;
        step: number;
        weight: number;
        _transform: null;
    }[];
    id: string;
} | {
    data: {
        step: number;
        group: number;
        id: string;
        min: number;
        weight: number;
        bezier: null;
        max: number;
        _transform: null;
    }[];
    id: string;
} | {
    data: {
        group: number;
        min: number;
        id: string;
        weight: number;
        step: number;
        bezier: null;
        _transform: null;
        max: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        step: number;
        _transform: null;
        group: number;
        id: string;
        max: number;
        min: number;
        weight: number;
        bezier: null;
    }[];
} | {
    data: {
        step: number;
        weight: number;
        max: number;
        bezier: null;
        min: number;
        _transform: null;
        group: number;
        id: string;
    }[];
    id: string;
} | {
    data: {
        weight: number;
        _transform: null;
        group: number;
        id: string;
        max: number;
        min: number;
        step: number;
        bezier: null;
    }[];
    id: string;
} | {
    id: string;
    data: {
        _transform: null;
        weight: number;
        id: string;
        group: number;
        max: number;
        bezier: null;
        min: number;
        step: number;
    }[];
} | {
    id: string;
    data: {
        step: number;
        min: number;
        group: number;
        _transform: null;
        weight: number;
        max: number;
        bezier: null;
        id: string;
    }[];
} | {
    id: string;
    data: {
        group: number;
        max: number;
        weight: number;
        step: number;
        min: number;
        bezier: null;
        id: string;
        _transform: null;
    }[];
} | {
    id: string;
    data: {
        step: number;
        group: number;
        weight: number;
        max: number;
        bezier: null;
        id: string;
        _transform: null;
        min: number;
    }[];
} | {
    data: {
        weight: number;
        id: string;
        _transform: null;
        max: number;
        group: number;
        min: number;
        step: number;
        bezier: null;
    }[];
    id: string;
} | {
    id: string;
    data: {
        bezier: null;
        max: number;
        _transform: null;
        step: number;
        min: number;
        weight: number;
        group: number;
        id: string;
    }[];
} | {
    id: string;
    data: {
        group: number;
        min: number;
        max: number;
        weight: number;
        id: string;
        step: number;
        bezier: null;
        _transform: null;
    }[];
} | {
    data: {
        id: string;
        weight: number;
        group: number;
        _transform: null;
        max: number;
        step: number;
        min: number;
        bezier: null;
    }[];
    id: string;
} | {
    data: {
        bezier: null;
        id: string;
        max: number;
        step: number;
        _transform: null;
        group: number;
        min: number;
        weight: number;
    }[];
    id: string;
} | {
    data: {
        bezier: null;
        weight: number;
        max: number;
        min: number;
        id: string;
        _transform: null;
        step: number;
        group: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        bezier: null;
        id: string;
        _transform: null;
        weight: number;
        group: number;
        max: number;
        step: number;
        min: number;
    }[];
} | {
    id: string;
    data: {
        group: number;
        bezier: null;
        _transform: null;
        max: number;
        min: number;
        step: number;
        id: string;
        weight: number;
    }[];
} | {
    data: {
        min: number;
        id: string;
        bezier: null;
        step: number;
        group: number;
        _transform: null;
        max: number;
        weight: number;
    }[];
    id: string;
} | {
    data: {
        _transform: null;
        group: number;
        id: string;
        step: number;
        max: number;
        weight: number;
        min: number;
        bezier: null;
    }[];
    id: string;
} | {
    id: string;
    data: {
        bezier: null;
        group: number;
        step: number;
        id: string;
        weight: number;
        min: number;
        max: number;
        _transform: null;
    }[];
} | {
    id: string;
    data: {
        id: string;
        _transform: null;
        min: number;
        weight: number;
        group: number;
        bezier: null;
        max: number;
        step: number;
    }[];
} | {
    data: {
        bezier: null;
        group: number;
        weight: number;
        step: number;
        _transform: null;
        max: number;
        id: string;
        min: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        max: number;
        min: number;
        bezier: null;
        id: string;
        _transform: null;
        step: number;
        group: number;
        weight: number;
    }[];
} | {
    data: {
        min: number;
        group: number;
        max: number;
        _transform: null;
        id: string;
        weight: number;
        step: number;
        bezier: null;
    }[];
    id: string;
} | {
    data: {
        bezier: null;
        group: number;
        max: number;
        id: string;
        weight: number;
        min: number;
        _transform: null;
        step: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        group: number;
        max: number;
        _transform: null;
        id: string;
        weight: number;
        bezier: null;
        min: number;
        step: number;
    }[];
} | {
    id: string;
    data: {
        id: string;
        group: number;
        max: number;
        _transform: null;
        weight: number;
        step: number;
        min: number;
        bezier: null;
    }[];
} | {
    id: string;
    data: {
        bezier: null;
        max: number;
        id: string;
        _transform: null;
        min: number;
        group: number;
        weight: number;
        step: number;
    }[];
} | {
    id: string;
    data: {
        weight: number;
        bezier: null;
        step: number;
        group: number;
        id: string;
        _transform: null;
        min: number;
        max: number;
    }[];
} | {
    id: string;
    data: {
        id: string;
        weight: number;
        max: number;
        bezier: null;
        group: number;
        min: number;
        _transform: null;
        step: number;
    }[];
} | {
    data: {
        min: number;
        max: number;
        bezier: null;
        id: string;
        step: number;
        group: number;
        weight: number;
        _transform: null;
    }[];
    id: string;
} | {
    data: {
        bezier: null;
        weight: number;
        max: number;
        _transform: null;
        step: number;
        group: number;
        min: number;
        id: string;
    }[];
    id: string;
} | {
    id: string;
    data: {
        step: number;
        id: string;
        min: number;
        bezier: null;
        _transform: null;
        max: number;
        weight: number;
        group: number;
    }[];
} | {
    id: string;
    data: {
        step: number;
        id: string;
        group: number;
        bezier: null;
        min: number;
        _transform: null;
        weight: number;
        max: number;
    }[];
} | {
    id: string;
    data: {
        weight: number;
        bezier: null;
        _transform: null;
        max: number;
        min: number;
        id: string;
        group: number;
        step: number;
    }[];
} | {
    data: {
        weight: number;
        _transform: null;
        max: number;
        step: number;
        id: string;
        group: number;
        bezier: null;
        min: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        _transform: null;
        max: number;
        step: number;
        bezier: null;
        min: number;
        group: number;
        id: string;
        weight: number;
    }[];
} | {
    id: string;
    data: {
        _transform: null;
        bezier: null;
        max: number;
        group: number;
        id: string;
        min: number;
        weight: number;
        step: number;
    }[];
} | {
    id: string;
    data: {
        id: string;
        min: number;
        weight: number;
        _transform: null;
        bezier: null;
        step: number;
        group: number;
        max: number;
    }[];
} | {
    id: string;
    data: {
        step: number;
        weight: number;
        min: number;
        group: number;
        bezier: null;
        id: string;
        _transform: null;
        max: number;
    }[];
} | {
    data: {
        bezier: null;
        group: number;
        weight: number;
        step: number;
        id: string;
        _transform: null;
        min: number;
        max: number;
    }[];
    id: string;
} | {
    data: {
        weight: number;
        id: string;
        max: number;
        group: number;
        step: number;
        _transform: null;
        bezier: null;
        min: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        weight: number;
        bezier: null;
        id: string;
        min: number;
        max: number;
        group: number;
        _transform: null;
        step: number;
    }[];
} | {
    data: {
        id: string;
        _transform: null;
        weight: number;
        bezier: null;
        group: number;
        max: number;
        min: number;
        step: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        bezier: null;
        min: number;
        id: string;
        weight: number;
        max: number;
        group: number;
        _transform: null;
        step: number;
    }[];
} | {
    id: string;
    data: {
        min: number;
        _transform: null;
        weight: number;
        id: string;
        step: number;
        max: number;
        group: number;
        bezier: null;
    }[];
} | {
    id: string;
    data: {
        step: number;
        id: string;
        max: number;
        _transform: null;
        bezier: null;
        min: number;
        weight: number;
        group: number;
    }[];
} | {
    id: string;
    data: {
        group: number;
        bezier: null;
        id: string;
        max: number;
        step: number;
        min: number;
        _transform: null;
        weight: number;
    }[];
} | {
    data: {
        bezier: null;
        weight: number;
        group: number;
        step: number;
        _transform: null;
        id: string;
        max: number;
        min: number;
    }[];
    id: string;
} | {
    data: {
        max: number;
        step: number;
        weight: number;
        id: string;
        group: number;
        bezier: null;
        _transform: null;
        min: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        min: number;
        id: string;
        max: number;
        bezier: null;
        weight: number;
        group: number;
        _transform: null;
        step: number;
    }[];
} | {
    id: string;
    data: {
        min: number;
        weight: number;
        bezier: null;
        step: number;
        group: number;
        id: string;
        _transform: null;
        max: number;
    }[];
} | {
    id: string;
    data: {
        group: number;
        bezier: null;
        _transform: null;
        min: number;
        id: string;
        weight: number;
        max: number;
        step: number;
    }[];
} | {
    data: {
        group: number;
        bezier: null;
        max: number;
        _transform: null;
        weight: number;
        id: string;
        step: number;
        min: number;
    }[];
    id: string;
} | {
    data: {
        bezier: null;
        id: string;
        min: number;
        step: number;
        group: number;
        _transform: null;
        max: number;
        weight: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        _transform: null;
        max: number;
        step: number;
        bezier: null;
        group: number;
        id: string;
        weight: number;
        min: number;
    }[];
} | {
    id: string;
    data: {
        step: number;
        id: string;
        weight: number;
        max: number;
        group: number;
        min: number;
        _transform: null;
        bezier: null;
    }[];
} | {
    data: {
        id: string;
        step: number;
        _transform: null;
        group: number;
        min: number;
        max: number;
        bezier: null;
        weight: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        bezier: null;
        min: number;
        weight: number;
        _transform: null;
        group: number;
        id: string;
        max: number;
        step: number;
    }[];
} | {
    id: string;
    data: {
        id: string;
        _transform: null;
        min: number;
        bezier: null;
        step: number;
        group: number;
        weight: number;
        max: number;
    }[];
} | {
    id: string;
    data: {
        step: number;
        bezier: null;
        _transform: null;
        max: number;
        group: number;
        id: string;
        weight: number;
        min: number;
    }[];
} | {
    id: string;
    data: {
        bezier: null;
        id: string;
        step: number;
        min: number;
        group: number;
        weight: number;
        max: number;
        _transform: null;
    }[];
} | {
    id: string;
    data: {
        id: string;
        group: number;
        bezier: null;
        max: number;
        _transform: null;
        min: number;
        weight: number;
        step: number;
    }[];
} | {
    id: string;
    data: {
        id: string;
        bezier: null;
        max: number;
        group: number;
        _transform: null;
        min: number;
        weight: number;
        step: number;
    }[];
} | {
    id: string;
    data: {
        min: number;
        group: number;
        id: string;
        step: number;
        max: number;
        weight: number;
        _transform: null;
        bezier: null;
    }[];
} | {
    id: string;
    data: {
        group: number;
        bezier: null;
        weight: number;
        step: number;
        min: number;
        max: number;
        id: string;
        _transform: null;
    }[];
} | {
    data: {
        bezier: null;
        _transform: null;
        max: number;
        id: string;
        step: number;
        min: number;
        group: number;
        weight: number;
    }[];
    id: string;
} | {
    data: {
        _transform: null;
        max: number;
        bezier: null;
        group: number;
        min: number;
        step: number;
        weight: number;
        id: string;
    }[];
    id: string;
} | {
    id: string;
    data: {
        weight: number;
        max: number;
        _transform: null;
        step: number;
        min: number;
        group: number;
        bezier: null;
        id: string;
    }[];
} | {
    id: string;
    data: {
        id: string;
        weight: number;
        group: number;
        _transform: null;
        bezier: null;
        max: number;
        min: number;
        step: number;
    }[];
} | {
    data: {
        id: string;
        min: number;
        weight: number;
        bezier: null;
        step: number;
        group: number;
        _transform: null;
        max: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        id: string;
        group: number;
        max: number;
        _transform: null;
        step: number;
        min: number;
        weight: number;
        bezier: null;
    }[];
} | {
    id: string;
    data: {
        group: number;
        weight: number;
        max: number;
        min: number;
        _transform: null;
        step: number;
        bezier: null;
        id: string;
    }[];
} | {
    data: {
        _transform: null;
        group: number;
        step: number;
        bezier: null;
        id: string;
        min: number;
        max: number;
        weight: number;
    }[];
    id: string;
} | {
    data: {
        weight: number;
        bezier: null;
        id: string;
        min: number;
        _transform: null;
        max: number;
        step: number;
        group: number;
    }[];
    id: string;
} | {
    data: {
        group: number;
        weight: number;
        step: number;
        id: string;
        bezier: null;
        max: number;
        _transform: null;
        min: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        min: number;
        weight: number;
        max: number;
        _transform: null;
        group: number;
        bezier: null;
        id: string;
        step: number;
    }[];
} | {
    data: {
        group: number;
        step: number;
        _transform: null;
        id: string;
        bezier: null;
        weight: number;
        min: number;
        max: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        id: string;
        bezier: null;
        min: number;
        max: number;
        step: number;
        _transform: null;
        group: number;
        weight: number;
    }[];
} | {
    id: string;
    data: {
        group: number;
        bezier: null;
        max: number;
        min: number;
        weight: number;
        step: number;
        _transform: null;
        id: string;
    }[];
} | {
    data: {
        bezier: null;
        group: number;
        min: number;
        step: number;
        id: string;
        weight: number;
        max: number;
        _transform: null;
    }[];
    id: string;
} | {
    id: string;
    data: {
        weight: number;
        group: number;
        bezier: null;
        _transform: null;
        max: number;
        id: string;
        step: number;
        min: number;
    }[];
} | {
    id: string;
    data: {
        bezier: null;
        weight: number;
        step: number;
        id: string;
        max: number;
        group: number;
        min: number;
        _transform: null;
    }[];
} | {
    id: string;
    data: {
        bezier: null;
        max: number;
        group: number;
        step: number;
        min: number;
        _transform: null;
        id: string;
        weight: number;
    }[];
} | {
    id: string;
    data: {
        bezier: null;
        _transform: null;
        min: number;
        group: number;
        id: string;
        max: number;
        weight: number;
        step: number;
    }[];
} | {
    data: {
        max: number;
        step: number;
        weight: number;
        id: string;
        group: number;
        min: number;
        bezier: null;
        _transform: null;
    }[];
    id: string;
} | {
    data: {
        group: number;
        id: string;
        _transform: null;
        max: number;
        min: number;
        step: number;
        weight: number;
        bezier: null;
    }[];
    id: string;
} | {
    data: {
        min: number;
        bezier: null;
        id: string;
        group: number;
        max: number;
        _transform: null;
        weight: number;
        step: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        bezier: null;
        group: number;
        min: number;
        weight: number;
        _transform: null;
        id: string;
        max: number;
        step: number;
    }[];
} | {
    data: {
        min: number;
        weight: number;
        _transform: null;
        id: string;
        group: number;
        bezier: null;
        max: number;
        step: number;
    }[];
    id: string;
} | {
    data: {
        min: number;
        weight: number;
        group: number;
        _transform: null;
        bezier: null;
        id: string;
        step: number;
        max: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        min: number;
        bezier: null;
        id: string;
        step: number;
        max: number;
        _transform: null;
        weight: number;
        group: number;
    }[];
} | {
    data: {
        _transform: null;
        max: number;
        group: number;
        weight: number;
        min: number;
        step: number;
        bezier: null;
        id: string;
    }[];
    id: string;
} | {
    id: string;
    data: {
        _transform: null;
        weight: number;
        id: string;
        min: number;
        max: number;
        group: number;
        bezier: null;
        step: number;
    }[];
} | {
    data: {
        _transform: null;
        min: number;
        group: number;
        max: number;
        step: number;
        id: string;
        weight: number;
        bezier: null;
    }[];
    id: string;
} | {
    data: {
        min: number;
        max: number;
        id: string;
        group: number;
        weight: number;
        bezier: null;
        _transform: null;
        step: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        bezier: null;
        step: number;
        min: number;
        id: string;
        _transform: null;
        group: number;
        weight: number;
        max: number;
    }[];
} | {
    data: {
        min: number;
        id: string;
        step: number;
        bezier: null;
        _transform: null;
        group: number;
        weight: number;
        max: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        bezier: null;
        step: number;
        _transform: null;
        group: number;
        min: number;
        max: number;
        id: string;
        weight: number;
    }[];
} | {
    id: string;
    data: {
        group: number;
        _transform: null;
        bezier: null;
        min: number;
        step: number;
        id: string;
        weight: number;
        max: number;
    }[];
} | {
    data: {
        min: number;
        _transform: null;
        group: number;
        id: string;
        bezier: null;
        weight: number;
        step: number;
        max: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        id: string;
        step: number;
        bezier: null;
        min: number;
        _transform: null;
        max: number;
        weight: number;
        group: number;
    }[];
} | {
    data: {
        bezier: null;
        id: string;
        weight: number;
        step: number;
        _transform: null;
        min: number;
        max: number;
        group: number;
    }[];
    id: string;
} | {
    data: {
        id: string;
        _transform: null;
        min: number;
        bezier: null;
        max: number;
        group: number;
        weight: number;
        step: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        _transform: null;
        id: string;
        min: number;
        bezier: null;
        max: number;
        group: number;
        weight: number;
        step: number;
    }[];
} | {
    data: {
        group: number;
        weight: number;
        id: string;
        min: number;
        _transform: null;
        bezier: null;
        max: number;
        step: number;
    }[];
    id: string;
} | {
    data: {
        step: number;
        min: number;
        bezier: null;
        max: number;
        group: number;
        weight: number;
        _transform: null;
        id: string;
    }[];
    id: string;
} | {
    id: string;
    data: {
        min: number;
        group: number;
        _transform: null;
        step: number;
        id: string;
        bezier: null;
        max: number;
        weight: number;
    }[];
} | {
    id: string;
    data: {
        group: number;
        _transform: null;
        min: number;
        bezier: null;
        step: number;
        weight: number;
        id: string;
        max: number;
    }[];
} | {
    data: {
        _transform: null;
        weight: number;
        min: number;
        step: number;
        id: string;
        group: number;
        bezier: null;
        max: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        group: number;
        max: number;
        step: number;
        bezier: null;
        min: number;
        id: string;
        _transform: null;
        weight: number;
    }[];
} | {
    data: {
        id: string;
        max: number;
        group: number;
        weight: number;
        step: number;
        _transform: null;
        min: number;
        bezier: null;
    }[];
    id: string;
} | {
    id: string;
    data: {
        bezier: null;
        id: string;
        group: number;
        _transform: null;
        min: number;
        step: number;
        weight: number;
        max: number;
    }[];
} | {
    id: string;
    data: {
        max: number;
        group: number;
        bezier: null;
        id: string;
        weight: number;
        min: number;
        _transform: null;
        step: number;
    }[];
} | {
    id: string;
    data: {
        max: number;
        weight: number;
        bezier: null;
        id: string;
        group: number;
        step: number;
        min: number;
        _transform: null;
    }[];
} | {
    data: {
        group: number;
        max: number;
        bezier: null;
        _transform: null;
        id: string;
        min: number;
        weight: number;
        step: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        id: string;
        step: number;
        group: number;
        min: number;
        max: number;
        bezier: null;
        _transform: null;
        weight: number;
    }[];
} | {
    data: {
        min: number;
        group: number;
        weight: number;
        max: number;
        bezier: null;
        id: string;
        step: number;
        _transform: null;
    }[];
    id: string;
} | {
    id: string;
    data: {
        group: number;
        step: number;
        min: number;
        weight: number;
        _transform: null;
        max: number;
        id: string;
        bezier: null;
    }[];
} | {
    data: {
        group: number;
        step: number;
        max: number;
        weight: number;
        _transform: null;
        bezier: null;
        min: number;
        id: string;
    }[];
    id: string;
} | {
    id: string;
    data: {
        weight: number;
        group: number;
        id: string;
        bezier: null;
        _transform: null;
        min: number;
        step: number;
        max: number;
    }[];
} | {
    id: string;
    data: {
        _transform: null;
        min: number;
        step: number;
        group: number;
        bezier: null;
        max: number;
        weight: number;
        id: string;
    }[];
} | {
    id: string;
    data: {
        id: string;
        bezier: null;
        group: number;
        step: number;
        max: number;
        _transform: null;
        weight: number;
        min: number;
    }[];
} | {
    id: string;
    data: {
        min: number;
        group: number;
        id: string;
        _transform: null;
        step: number;
        bezier: null;
        max: number;
        weight: number;
    }[];
} | {
    data: {
        id: string;
        group: number;
        min: number;
        max: number;
        weight: number;
        bezier: null;
        step: number;
        _transform: null;
    }[];
    id: string;
} | {
    id: string;
    data: {
        max: number;
        step: number;
        bezier: null;
        _transform: null;
        id: string;
        group: number;
        weight: number;
        min: number;
    }[];
} | {
    id: string;
    data: {
        bezier: null;
        _transform: null;
        max: number;
        group: number;
        min: number;
        id: string;
        step: number;
        weight: number;
    }[];
} | {
    data: {
        min: number;
        bezier: null;
        max: number;
        id: string;
        _transform: null;
        weight: number;
        step: number;
        group: number;
    }[];
    id: string;
} | {
    data: {
        bezier: null;
        min: number;
        max: number;
        _transform: null;
        weight: number;
        step: number;
        group: number;
        id: string;
    }[];
    id: string;
} | {
    id: string;
    data: {
        max: number;
        step: number;
        weight: number;
        bezier: null;
        _transform: null;
        min: number;
        group: number;
        id: string;
    }[];
} | {
    data: {
        min: number;
        bezier: null;
        _transform: null;
        group: number;
        max: number;
        weight: number;
        id: string;
        step: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        min: number;
        id: string;
        max: number;
        bezier: null;
        _transform: null;
        group: number;
        weight: number;
        step: number;
    }[];
} | {
    data: {
        max: number;
        weight: number;
        bezier: null;
        group: number;
        step: number;
        min: number;
        id: string;
        _transform: null;
    }[];
    id: string;
} | {
    id: string;
    data: {
        min: number;
        max: number;
        step: number;
        group: number;
        bezier: null;
        weight: number;
        id: string;
        _transform: null;
    }[];
} | {
    id: string;
    data: {
        _transform: null;
        id: string;
        bezier: null;
        weight: number;
        step: number;
        min: number;
        group: number;
        max: number;
    }[];
} | {
    id: string;
    data: {
        weight: number;
        group: number;
        id: string;
        max: number;
        bezier: null;
        step: number;
        _transform: null;
        min: number;
    }[];
} | {
    id: string;
    data: {
        id: string;
        step: number;
        min: number;
        max: number;
        weight: number;
        bezier: null;
        _transform: null;
        group: number;
    }[];
} | {
    data: {
        weight: number;
        bezier: null;
        max: number;
        id: string;
        _transform: null;
        min: number;
        step: number;
        group: number;
    }[];
    id: string;
} | {
    data: {
        _transform: null;
        weight: number;
        max: number;
        bezier: null;
        group: number;
        id: string;
        min: number;
        step: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        id: string;
        max: number;
        weight: number;
        _transform: null;
        step: number;
        group: number;
        min: number;
        bezier: null;
    }[];
} | {
    data: {
        min: number;
        step: number;
        bezier: null;
        _transform: null;
        weight: number;
        group: number;
        id: string;
        max: number;
    }[];
    id: string;
} | {
    data: {
        max: number;
        weight: number;
        step: number;
        group: number;
        min: number;
        _transform: null;
        id: string;
        bezier: null;
    }[];
    id: string;
} | {
    data: {
        group: number;
        bezier: null;
        id: string;
        max: number;
        step: number;
        min: number;
        _transform: null;
        weight: number;
    }[];
    id: string;
} | {
    data: {
        group: number;
        max: number;
        _transform: null;
        min: number;
        bezier: null;
        step: number;
        weight: number;
        id: string;
    }[];
    id: string;
} | {
    id: string;
    data: {
        step: number;
        _transform: null;
        min: number;
        weight: number;
        bezier: null;
        id: string;
        max: number;
        group: number;
    }[];
} | {
    data: {
        weight: number;
        min: number;
        group: number;
        bezier: null;
        id: string;
        _transform: null;
        max: number;
        step: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        max: number;
        id: string;
        min: number;
        group: number;
        _transform: null;
        step: number;
        bezier: null;
        weight: number;
    }[];
} | {
    id: string;
    data: {
        group: number;
        step: number;
        bezier: null;
        min: number;
        weight: number;
        id: string;
        max: number;
        _transform: null;
    }[];
} | {
    id: string;
    data: {
        id: string;
        min: number;
        _transform: null;
        max: number;
        bezier: null;
        weight: number;
        group: number;
        step: number;
    }[];
} | {
    id: string;
    data: {
        step: number;
        group: number;
        max: number;
        id: string;
        min: number;
        bezier: null;
        _transform: null;
        weight: number;
    }[];
} | {
    id: string;
    data: {
        bezier: null;
        step: number;
        group: number;
        id: string;
        _transform: null;
        min: number;
        weight: number;
        max: number;
    }[];
} | {
    data: {
        bezier: null;
        step: number;
        max: number;
        group: number;
        _transform: null;
        id: string;
        min: number;
        weight: number;
    }[];
    id: string;
} | {
    data: {
        min: number;
        max: number;
        bezier: null;
        id: string;
        _transform: null;
        step: number;
        group: number;
        weight: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        _transform: null;
        group: number;
        weight: number;
        step: number;
        min: number;
        bezier: null;
        id: string;
        max: number;
    }[];
} | {
    id: string;
    data: {
        min: number;
        group: number;
        bezier: null;
        _transform: null;
        max: number;
        weight: number;
        step: number;
        id: string;
    }[];
} | {
    id: string;
    data: {
        min: number;
        _transform: null;
        step: number;
        max: number;
        weight: number;
        group: number;
        bezier: null;
        id: string;
    }[];
} | {
    id: string;
    data: {
        min: number;
        step: number;
        group: number;
        max: number;
        id: string;
        bezier: null;
        _transform: null;
        weight: number;
    }[];
} | {
    id: string;
    data: {
        id: string;
        min: number;
        group: number;
        _transform: null;
        step: number;
        weight: number;
        bezier: null;
        max: number;
    }[];
} | {
    data: {
        max: number;
        bezier: null;
        weight: number;
        min: number;
        step: number;
        group: number;
        id: string;
        _transform: null;
    }[];
    id: string;
} | {
    data: {
        id: string;
        step: number;
        bezier: null;
        max: number;
        min: number;
        group: number;
        _transform: null;
        weight: number;
    }[];
    id: string;
} | {
    data: {
        id: string;
        max: number;
        bezier: null;
        min: number;
        step: number;
        _transform: null;
        group: number;
        weight: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        weight: number;
        min: number;
        _transform: null;
        max: number;
        id: string;
        group: number;
        bezier: null;
        step: number;
    }[];
} | {
    id: string;
    data: {
        bezier: null;
        id: string;
        max: number;
        weight: number;
        _transform: null;
        step: number;
        group: number;
        min: number;
    }[];
} | {
    data: {
        step: number;
        id: string;
        weight: number;
        bezier: null;
        min: number;
        _transform: null;
        max: number;
        group: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        bezier: null;
        weight: number;
        min: number;
        step: number;
        group: number;
        max: number;
        id: string;
        _transform: null;
    }[];
} | {
    id: string;
    data: {
        weight: number;
        id: string;
        group: number;
        step: number;
        min: number;
        _transform: null;
        bezier: null;
        max: number;
    }[];
} | {
    id: string;
    data: {
        bezier: null;
        min: number;
        max: number;
        weight: number;
        _transform: null;
        id: string;
        step: number;
        group: number;
    }[];
} | {
    data: {
        group: number;
        weight: number;
        step: number;
        min: number;
        bezier: null;
        id: string;
        _transform: null;
        max: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        id: string;
        min: number;
        _transform: null;
        max: number;
        step: number;
        group: number;
        bezier: null;
        weight: number;
    }[];
} | {
    data: {
        group: number;
        bezier: null;
        _transform: null;
        weight: number;
        min: number;
        step: number;
        max: number;
        id: string;
    }[];
    id: string;
} | {
    id: string;
    data: {
        id: string;
        _transform: null;
        group: number;
        bezier: null;
        max: number;
        step: number;
        min: number;
        weight: number;
    }[];
} | {
    id: string;
    data: {
        id: string;
        weight: number;
        max: number;
        step: number;
        _transform: null;
        min: number;
        group: number;
        bezier: null;
    }[];
} | {
    data: {
        bezier: null;
        _transform: null;
        weight: number;
        min: number;
        max: number;
        group: number;
        id: string;
        step: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        _transform: null;
        max: number;
        group: number;
        bezier: null;
        weight: number;
        id: string;
        min: number;
        step: number;
    }[];
} | {
    data: {
        min: number;
        _transform: null;
        max: number;
        id: string;
        bezier: null;
        group: number;
        weight: number;
        step: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        max: number;
        min: number;
        id: string;
        _transform: null;
        weight: number;
        step: number;
        bezier: null;
        group: number;
    }[];
} | {
    data: {
        group: number;
        min: number;
        id: string;
        weight: number;
        step: number;
        bezier: null;
        _transform: null;
        max: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        max: number;
        group: number;
        weight: number;
        id: string;
        step: number;
        min: number;
        _transform: null;
        bezier: null;
    }[];
} | {
    id: string;
    data: {
        bezier: null;
        max: number;
        weight: number;
        _transform: null;
        min: number;
        group: number;
        step: number;
        id: string;
    }[];
} | {
    data: {
        group: number;
        bezier: null;
        id: string;
        max: number;
        _transform: null;
        step: number;
        min: number;
        weight: number;
    }[];
    id: string;
} | {
    data: {
        _transform: null;
        weight: number;
        step: number;
        group: number;
        id: string;
        min: number;
        bezier: null;
        max: number;
    }[];
    id: string;
} | {
    data: {
        _transform: null;
        group: number;
        min: number;
        weight: number;
        step: number;
        bezier: null;
        max: number;
        id: string;
    }[];
    id: string;
} | {
    id: string;
    data: {
        min: number;
        bezier: null;
        step: number;
        group: number;
        _transform: null;
        weight: number;
        id: string;
        max: number;
    }[];
} | {
    data: {
        _transform: null;
        step: number;
        max: number;
        id: string;
        bezier: null;
        min: number;
        weight: number;
        group: number;
    }[];
    id: string;
} | {
    data: {
        step: number;
        id: string;
        group: number;
        weight: number;
        bezier: null;
        max: number;
        min: number;
        _transform: null;
    }[];
    id: string;
} | {
    id: string;
    data: {
        min: number;
        group: number;
        bezier: null;
        _transform: null;
        max: number;
        id: string;
        step: number;
        weight: number;
    }[];
} | {
    data: {
        id: string;
        _transform: null;
        bezier: null;
        group: number;
        max: number;
        step: number;
        min: number;
        weight: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        bezier: null;
        _transform: null;
        step: number;
        group: number;
        min: number;
        id: string;
        max: number;
        weight: number;
    }[];
} | {
    data: {
        group: number;
        bezier: null;
        step: number;
        max: number;
        min: number;
        id: string;
        _transform: null;
        weight: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        min: number;
        id: string;
        max: number;
        step: number;
        bezier: null;
        group: number;
        weight: number;
        _transform: null;
    }[];
} | {
    id: string;
    data: {
        max: number;
        step: number;
        min: number;
        bezier: null;
        _transform: null;
        group: number;
        weight: number;
        id: string;
    }[];
} | {
    id: string;
    data: {
        id: string;
        step: number;
        max: number;
        weight: number;
        group: number;
        _transform: null;
        bezier: null;
        min: number;
    }[];
} | {
    data: {
        id: string;
        step: number;
        weight: number;
        max: number;
        bezier: null;
        _transform: null;
        min: number;
        group: number;
    }[];
    id: string;
} | {
    data: {
        bezier: null;
        min: number;
        group: number;
        id: string;
        max: number;
        step: number;
        _transform: null;
        weight: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        min: number;
        group: number;
        id: string;
        _transform: null;
        bezier: null;
        step: number;
        weight: number;
        max: number;
    }[];
} | {
    id: string;
    data: {
        id: string;
        min: number;
        step: number;
        group: number;
        bezier: null;
        _transform: null;
        weight: number;
        max: number;
    }[];
} | {
    id: string;
    data: {
        step: number;
        weight: number;
        id: string;
        bezier: null;
        _transform: null;
        max: number;
        min: number;
        group: number;
    }[];
} | {
    data: {
        step: number;
        bezier: null;
        min: number;
        max: number;
        weight: number;
        group: number;
        id: string;
        _transform: null;
    }[];
    id: string;
} | {
    id: string;
    data: {
        id: string;
        group: number;
        bezier: null;
        step: number;
        min: number;
        weight: number;
        max: number;
        _transform: null;
    }[];
} | {
    id: string;
    data: {
        bezier: null;
        weight: number;
        min: number;
        max: number;
        step: number;
        id: string;
        _transform: null;
        group: number;
    }[];
} | {
    id: string;
    data: {
        step: number;
        weight: number;
        id: string;
        group: number;
        _transform: null;
        bezier: null;
        min: number;
        max: number;
    }[];
} | {
    id: string;
    data: {
        min: number;
        bezier: null;
        weight: number;
        group: number;
        step: number;
        _transform: null;
        max: number;
        id: string;
    }[];
} | {
    data: {
        bezier: null;
        _transform: null;
        group: number;
        step: number;
        id: string;
        max: number;
        weight: number;
        min: number;
    }[];
    id: string;
} | {
    data: {
        min: number;
        id: string;
        _transform: null;
        weight: number;
        group: number;
        bezier: null;
        step: number;
        max: number;
    }[];
    id: string;
} | {
    data: {
        id: string;
        _transform: null;
        min: number;
        step: number;
        group: number;
        max: number;
        weight: number;
        bezier: null;
    }[];
    id: string;
} | {
    data: {
        weight: number;
        max: number;
        bezier: null;
        _transform: null;
        min: number;
        id: string;
        step: number;
        group: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        step: number;
        min: number;
        weight: number;
        max: number;
        bezier: null;
        id: string;
        group: number;
        _transform: null;
    }[];
} | {
    data: {
        bezier: null;
        weight: number;
        step: number;
        _transform: null;
        min: number;
        group: number;
        id: string;
        max: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        bezier: null;
        _transform: null;
        id: string;
        min: number;
        step: number;
        max: number;
        group: number;
        weight: number;
    }[];
} | {
    data: {
        id: string;
        step: number;
        max: number;
        weight: number;
        group: number;
        bezier: null;
        _transform: null;
        min: number;
    }[];
    id: string;
} | {
    data: {
        _transform: null;
        max: number;
        min: number;
        group: number;
        bezier: null;
        step: number;
        id: string;
        weight: number;
    }[];
    id: string;
} | {
    data: {
        group: number;
        max: number;
        id: string;
        _transform: null;
        bezier: null;
        weight: number;
        step: number;
        min: number;
    }[];
    id: string;
} | {
    data: {
        id: string;
        max: number;
        weight: number;
        bezier: null;
        _transform: null;
        step: number;
        min: number;
        group: number;
    }[];
    id: string;
} | {
    data: {
        id: string;
        bezier: null;
        weight: number;
        step: number;
        min: number;
        group: number;
        _transform: null;
        max: number;
    }[];
    id: string;
} | {
    data: {
        group: number;
        weight: number;
        min: number;
        step: number;
        _transform: null;
        id: string;
        bezier: null;
        max: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        _transform: null;
        group: number;
        id: string;
        bezier: null;
        weight: number;
        step: number;
        max: number;
        min: number;
    }[];
} | {
    id: string;
    data: {
        group: number;
        min: number;
        weight: number;
        bezier: null;
        id: string;
        max: number;
        step: number;
        _transform: null;
    }[];
} | {
    id: string;
    data: {
        step: number;
        min: number;
        group: number;
        id: string;
        bezier: null;
        weight: number;
        max: number;
        _transform: null;
    }[];
} | {
    data: {
        bezier: null;
        min: number;
        weight: number;
        id: string;
        max: number;
        step: number;
        group: number;
        _transform: null;
    }[];
    id: string;
} | {
    data: {
        step: number;
        bezier: null;
        min: number;
        max: number;
        id: string;
        group: number;
        weight: number;
        _transform: null;
    }[];
    id: string;
} | {
    data: {
        weight: number;
        step: number;
        id: string;
        max: number;
        group: number;
        _transform: null;
        min: number;
        bezier: null;
    }[];
    id: string;
} | {
    id: string;
    data: {
        step: number;
        id: string;
        _transform: null;
        max: number;
        bezier: null;
        weight: number;
        group: number;
        min: number;
    }[];
} | {
    data: {
        group: number;
        weight: number;
        id: string;
        min: number;
        max: number;
        bezier: null;
        _transform: null;
        step: number;
    }[];
    id: string;
} | {
    data: {
        min: number;
        id: string;
        step: number;
        bezier: null;
        group: number;
        max: number;
        weight: number;
        _transform: null;
    }[];
    id: string;
} | {
    id: string;
    data: {
        group: number;
        weight: number;
        _transform: null;
        id: string;
        max: number;
        min: number;
        bezier: null;
        step: number;
    }[];
} | {
    data: {
        id: string;
        step: number;
        min: number;
        max: number;
        bezier: null;
        _transform: null;
        weight: number;
        group: number;
    }[];
    id: string;
} | {
    data: {
        step: number;
        id: string;
        group: number;
        weight: number;
        bezier: null;
        min: number;
        _transform: null;
        max: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        step: number;
        min: number;
        group: number;
        max: number;
        _transform: null;
        id: string;
        bezier: null;
        weight: number;
    }[];
} | {
    id: string;
    data: {
        weight: number;
        _transform: null;
        bezier: null;
        max: number;
        step: number;
        group: number;
        min: number;
        id: string;
    }[];
} | {
    id: string;
    data: {
        weight: number;
        min: number;
        group: number;
        max: number;
        _transform: null;
        bezier: null;
        id: string;
        step: number;
    }[];
} | {
    id: string;
    data: {
        weight: number;
        max: number;
        min: number;
        group: number;
        id: string;
        _transform: null;
        bezier: null;
        step: number;
    }[];
} | {
    data: {
        id: string;
        step: number;
        group: number;
        bezier: null;
        min: number;
        weight: number;
        max: number;
        _transform: null;
    }[];
    id: string;
} | {
    id: string;
    data: {
        min: number;
        id: string;
        weight: number;
        group: number;
        max: number;
        bezier: null;
        _transform: null;
        step: number;
    }[];
} | {
    data: {
        min: number;
        _transform: null;
        group: number;
        step: number;
        bezier: null;
        weight: number;
        max: number;
        id: string;
    }[];
    id: string;
} | {
    id: string;
    data: {
        weight: number;
        id: string;
        max: number;
        step: number;
        group: number;
        bezier: null;
        _transform: null;
        min: number;
    }[];
} | {
    id: string;
    data: {
        group: number;
        min: number;
        max: number;
        _transform: null;
        step: number;
        bezier: null;
        id: string;
        weight: number;
    }[];
} | {
    id: string;
    data: {
        weight: number;
        id: string;
        bezier: null;
        step: number;
        max: number;
        group: number;
        _transform: null;
        min: number;
    }[];
} | {
    data: {
        weight: number;
        group: number;
        id: string;
        min: number;
        max: number;
        bezier: null;
        _transform: null;
        step: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        min: number;
        bezier: null;
        id: string;
        weight: number;
        max: number;
        _transform: null;
        group: number;
        step: number;
    }[];
} | {
    id: string;
    data: {
        max: number;
        step: number;
        group: number;
        min: number;
        weight: number;
        _transform: null;
        bezier: null;
        id: string;
    }[];
} | {
    data: {
        step: number;
        id: string;
        max: number;
        weight: number;
        _transform: null;
        group: number;
        bezier: null;
        min: number;
    }[];
    id: string;
} | {
    data: {
        group: number;
        min: number;
        step: number;
        weight: number;
        _transform: null;
        id: string;
        max: number;
        bezier: null;
    }[];
    id: string;
} | {
    id: string;
    data: {
        id: string;
        _transform: null;
        min: number;
        bezier: null;
        max: number;
        step: number;
        group: number;
        weight: number;
    }[];
} | {
    id: string;
    data: {
        group: number;
        bezier: null;
        weight: number;
        id: string;
        max: number;
        _transform: null;
        min: number;
        step: number;
    }[];
} | {
    data: {
        weight: number;
        step: number;
        bezier: null;
        max: number;
        group: number;
        id: string;
        _transform: null;
        min: number;
    }[];
    id: string;
} | {
    data: {
        bezier: null;
        weight: number;
        group: number;
        min: number;
        step: number;
        max: number;
        _transform: null;
        id: string;
    }[];
    id: string;
} | {
    id: string;
    data: {
        weight: number;
        min: number;
        group: number;
        max: number;
        _transform: null;
        bezier: null;
        step: number;
        id: string;
    }[];
} | {
    id: string;
    data: {
        _transform: null;
        weight: number;
        min: number;
        bezier: null;
        step: number;
        group: number;
        max: number;
        id: string;
    }[];
} | {
    data: {
        _transform: null;
        step: number;
        group: number;
        id: string;
        max: number;
        bezier: null;
        weight: number;
        min: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        _transform: null;
        step: number;
        bezier: null;
        group: number;
        weight: number;
        min: number;
        max: number;
        id: string;
    }[];
} | {
    data: {
        step: number;
        _transform: null;
        bezier: null;
        group: number;
        weight: number;
        min: number;
        id: string;
        max: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        id: string;
        min: number;
        group: number;
        _transform: null;
        max: number;
        step: number;
        bezier: null;
        weight: number;
    }[];
} | {
    data: {
        weight: number;
        max: number;
        min: number;
        _transform: null;
        id: string;
        group: number;
        step: number;
        bezier: null;
    }[];
    id: string;
} | {
    data: {
        _transform: null;
        group: number;
        min: number;
        weight: number;
        id: string;
        bezier: null;
        max: number;
        step: number;
    }[];
    id: string;
} | {
    data: {
        id: string;
        bezier: null;
        max: number;
        group: number;
        _transform: null;
        min: number;
        step: number;
        weight: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        bezier: null;
        id: string;
        group: number;
        max: number;
        weight: number;
        min: number;
        _transform: null;
        step: number;
    }[];
} | {
    id: string;
    data: {
        _transform: null;
        max: number;
        min: number;
        bezier: null;
        id: string;
        weight: number;
        group: number;
        step: number;
    }[];
} | {
    data: {
        _transform: null;
        weight: number;
        bezier: null;
        id: string;
        group: number;
        step: number;
        min: number;
        max: number;
    }[];
    id: string;
} | {
    data: {
        bezier: null;
        _transform: null;
        step: number;
        group: number;
        weight: number;
        min: number;
        max: number;
        id: string;
    }[];
    id: string;
} | {
    id: string;
    data: {
        bezier: null;
        min: number;
        max: number;
        group: number;
        step: number;
        _transform: null;
        id: string;
        weight: number;
    }[];
} | {
    data: {
        max: number;
        id: string;
        step: number;
        min: number;
        weight: number;
        _transform: null;
        group: number;
        bezier: null;
    }[];
    id: string;
} | {
    id: string;
    data: {
        min: number;
        _transform: null;
        weight: number;
        step: number;
        group: number;
        max: number;
        bezier: null;
        id: string;
    }[];
} | {
    data: {
        id: string;
        weight: number;
        group: number;
        step: number;
        min: number;
        max: number;
        bezier: null;
        _transform: null;
    }[];
    id: string;
} | {
    data: {
        min: number;
        max: number;
        _transform: null;
        group: number;
        step: number;
        id: string;
        bezier: null;
        weight: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        max: number;
        id: string;
        min: number;
        weight: number;
        bezier: null;
        step: number;
        _transform: null;
        group: number;
    }[];
} | {
    id: string;
    data: {
        id: string;
        step: number;
        bezier: null;
        weight: number;
        group: number;
        min: number;
        _transform: null;
        max: number;
    }[];
} | {
    data: {
        id: string;
        bezier: null;
        _transform: null;
        min: number;
        max: number;
        group: number;
        step: number;
        weight: number;
    }[];
    id: string;
} | {
    data: {
        bezier: null;
        max: number;
        id: string;
        _transform: null;
        group: number;
        weight: number;
        min: number;
        step: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        bezier: null;
        max: number;
        id: string;
        weight: number;
        min: number;
        step: number;
        _transform: null;
        group: number;
    }[];
} | {
    id: string;
    data: {
        weight: number;
        group: number;
        id: string;
        min: number;
        step: number;
        max: number;
        _transform: null;
        bezier: null;
    }[];
} | {
    id: string;
    data: {
        group: number;
        max: number;
        weight: number;
        min: number;
        _transform: null;
        bezier: null;
        id: string;
        step: number;
    }[];
} | {
    data: {
        group: number;
        step: number;
        bezier: null;
        _transform: null;
        id: string;
        max: number;
        weight: number;
        min: number;
    }[];
    id: string;
} | {
    data: {
        _transform: null;
        step: number;
        min: number;
        id: string;
        bezier: null;
        group: number;
        max: number;
        weight: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        group: number;
        bezier: null;
        weight: number;
        _transform: null;
        id: string;
        step: number;
        min: number;
        max: number;
    }[];
} | {
    id: string;
    data: {
        bezier: null;
        min: number;
        group: number;
        id: string;
        max: number;
        _transform: null;
        step: number;
        weight: number;
    }[];
} | {
    id: string;
    data: {
        id: string;
        weight: number;
        max: number;
        bezier: null;
        _transform: null;
        group: number;
        min: number;
        step: number;
    }[];
} | {
    data: {
        min: number;
        bezier: null;
        weight: number;
        _transform: null;
        max: number;
        group: number;
        id: string;
        step: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        step: number;
        _transform: null;
        max: number;
        id: string;
        weight: number;
        bezier: null;
        group: number;
        min: number;
    }[];
} | {
    id: string;
    data: {
        group: number;
        _transform: null;
        bezier: null;
        step: number;
        id: string;
        max: number;
        weight: number;
        min: number;
    }[];
} | {
    id: string;
    data: {
        id: string;
        max: number;
        step: number;
        weight: number;
        group: number;
        bezier: null;
        _transform: null;
        min: number;
    }[];
} | {
    id: string;
    data: {
        group: number;
        bezier: null;
        max: number;
        min: number;
        id: string;
        weight: number;
        step: number;
        _transform: null;
    }[];
} | {
    id: string;
    data: {
        weight: number;
        _transform: null;
        min: number;
        max: number;
        group: number;
        bezier: null;
        step: number;
        id: string;
    }[];
} | {
    data: {
        bezier: null;
        max: number;
        step: number;
        min: number;
        _transform: null;
        id: string;
        weight: number;
        group: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        id: string;
        step: number;
        max: number;
        weight: number;
        min: number;
        group: number;
        bezier: null;
        _transform: null;
    }[];
} | {
    id: string;
    data: {
        step: number;
        id: string;
        group: number;
        weight: number;
        _transform: null;
        bezier: null;
        min: number;
        max: number;
    }[];
} | {
    data: {
        id: string;
        weight: number;
        group: number;
        min: number;
        max: number;
        bezier: null;
        step: number;
        _transform: null;
    }[];
    id: string;
} | {
    id: string;
    data: {
        _transform: null;
        group: number;
        id: string;
        max: number;
        weight: number;
        min: number;
        bezier: null;
        step: number;
    }[];
} | {
    id: string;
    data: {
        max: number;
        weight: number;
        min: number;
        group: number;
        _transform: null;
        bezier: null;
        step: number;
        id: string;
    }[];
} | {
    data: {
        min: number;
        _transform: null;
        bezier: null;
        group: number;
        weight: number;
        step: number;
        id: string;
        max: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        _transform: null;
        min: number;
        bezier: null;
        id: string;
        group: number;
        max: number;
        weight: number;
        step: number;
    }[];
} | {
    data: {
        max: number;
        step: number;
        id: string;
        min: number;
        weight: number;
        _transform: null;
        group: number;
        bezier: null;
    }[];
    id: string;
} | {
    id: string;
    data: {
        weight: number;
        min: number;
        group: number;
        max: number;
        _transform: null;
        step: number;
        id: string;
        bezier: null;
    }[];
} | {
    id: string;
    data: {
        _transform: null;
        min: number;
        weight: number;
        id: string;
        bezier: null;
        step: number;
        group: number;
        max: number;
    }[];
} | {
    data: {
        group: number;
        _transform: null;
        weight: number;
        max: number;
        step: number;
        min: number;
        id: string;
        bezier: null;
    }[];
    id: string;
} | {
    id: string;
    data: {
        weight: number;
        group: number;
        _transform: null;
        min: number;
        bezier: null;
        id: string;
        max: number;
        step: number;
    }[];
} | {
    id: string;
    data: {
        bezier: null;
        _transform: null;
        group: number;
        max: number;
        weight: number;
        id: string;
        min: number;
        step: number;
    }[];
} | {
    id: string;
    data: {
        min: number;
        weight: number;
        bezier: null;
        id: string;
        step: number;
        group: number;
        _transform: null;
        max: number;
    }[];
} | {
    data: {
        weight: number;
        bezier: null;
        group: number;
        _transform: null;
        min: number;
        step: number;
        max: number;
        id: string;
    }[];
    id: string;
} | {
    id: string;
    data: {
        step: number;
        group: number;
        bezier: null;
        id: string;
        min: number;
        max: number;
        _transform: null;
        weight: number;
    }[];
} | {
    id: string;
    data: {
        weight: number;
        max: number;
        step: number;
        _transform: null;
        bezier: null;
        min: number;
        id: string;
        group: number;
    }[];
} | {
    id: string;
    data: {
        id: string;
        max: number;
        group: number;
        step: number;
        _transform: null;
        bezier: null;
        weight: number;
        min: number;
    }[];
} | {
    data: {
        bezier: null;
        group: number;
        max: number;
        weight: number;
        step: number;
        _transform: null;
        min: number;
        id: string;
    }[];
    id: string;
} | {
    id: string;
    data: {
        group: number;
        bezier: null;
        max: number;
        id: string;
        weight: number;
        min: number;
        step: number;
        _transform: null;
    }[];
} | {
    id: string;
    data: {
        id: string;
        max: number;
        group: number;
        bezier: null;
        _transform: null;
        step: number;
        weight: number;
        min: number;
    }[];
} | {
    id: string;
    data: {
        step: number;
        max: number;
        _transform: null;
        weight: number;
        min: number;
        group: number;
        bezier: null;
        id: null;
    }[];
} | {
    id: string;
    data: {
        min: number;
        bezier: null;
        group: number;
        id: null;
        _transform: null;
        max: number;
        weight: number;
        step: number;
    }[];
} | {
    data: {
        _transform: null;
        bezier: null;
        max: number;
        group: number;
        step: number;
        weight: number;
        id: null;
        min: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        min: number;
        weight: number;
        bezier: null;
        step: number;
        _transform: null;
        max: number;
        group: number;
        id: null;
    }[];
} | {
    id: string;
    data: {
        group: number;
        _transform: null;
        min: number;
        max: number;
        step: number;
        bezier: null;
        id: null;
        weight: number;
    }[];
} | {
    data: {
        max: number;
        id: null;
        _transform: null;
        step: number;
        bezier: null;
        min: number;
        group: number;
        weight: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        step: number;
        max: number;
        group: number;
        id: null;
        weight: number;
        min: number;
        bezier: null;
        _transform: null;
    }[];
} | {
    id: string;
    data: {
        max: number;
        id: null;
        step: number;
        _transform: null;
        weight: number;
        min: number;
        group: number;
        bezier: null;
    }[];
} | {
    id: string;
    data: {
        _transform: null;
        step: number;
        max: number;
        bezier: null;
        min: number;
        id: null;
        group: number;
        weight: number;
    }[];
} | {
    id: string;
    data: {
        group: number;
        _transform: null;
        weight: number;
        min: number;
        bezier: null;
        max: number;
        step: number;
        id: null;
    }[];
} | {
    data: {
        bezier: null;
        min: number;
        weight: number;
        step: number;
        _transform: null;
        group: number;
        max: number;
        id: null;
    }[];
    id: string;
} | {
    data: {
        bezier: null;
        weight: number;
        group: number;
        _transform: null;
        max: number;
        step: number;
        id: null;
        min: number;
    }[];
    id: string;
} | {
    data: {
        bezier: null;
        id: null;
        group: number;
        _transform: null;
        weight: number;
        max: number;
        min: number;
        step: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        bezier: null;
        step: number;
        _transform: null;
        max: number;
        group: number;
        id: null;
        weight: number;
        min: number;
    }[];
} | {
    id: string;
    data: {
        weight: number;
        min: number;
        id: null;
        bezier: null;
        step: number;
        max: number;
        _transform: null;
        group: number;
    }[];
} | {
    id: string;
    data: {
        bezier: null;
        group: number;
        id: null;
        max: number;
        min: number;
        step: number;
        weight: number;
        _transform: null;
    }[];
} | {
    id: string;
    data: {
        _transform: null;
        weight: number;
        min: number;
        step: number;
        group: number;
        id: null;
        max: number;
        bezier: null;
    }[];
} | {
    id: string;
    data: {
        id: null;
        max: number;
        weight: number;
        min: number;
        bezier: null;
        step: number;
        group: number;
        _transform: null;
    }[];
} | {
    id: string;
    data: {
        weight: number;
        id: null;
        max: number;
        step: number;
        bezier: null;
        min: number;
        _transform: null;
        group: number;
    }[];
} | {
    id: string;
    data: {
        _transform: null;
        min: number;
        weight: number;
        max: number;
        step: number;
        group: number;
        id: null;
        bezier: null;
    }[];
} | {
    data: {
        step: number;
        group: number;
        min: number;
        _transform: null;
        weight: number;
        max: number;
        bezier: null;
        id: null;
    }[];
    id: string;
} | {
    data: {
        max: number;
        group: number;
        min: number;
        _transform: null;
        weight: number;
        bezier: null;
        id: null;
        step: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        weight: number;
        bezier: null;
        id: null;
        _transform: null;
        step: number;
        group: number;
        min: number;
        max: number;
    }[];
} | {
    id: string;
    data: {
        _transform: null;
        min: number;
        max: number;
        weight: number;
        group: number;
        step: number;
        id: null;
        bezier: null;
    }[];
} | {
    id: string;
    data: {
        group: number;
        max: number;
        id: null;
        min: number;
        weight: number;
        bezier: null;
        _transform: null;
        step: number;
    }[];
} | {
    id: string;
    data: {
        id: null;
        _transform: null;
        step: number;
        min: number;
        max: number;
        group: number;
        bezier: null;
        weight: number;
    }[];
} | {
    data: {
        min: number;
        step: number;
        id: null;
        bezier: null;
        _transform: null;
        weight: number;
        max: number;
        group: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        id: null;
        step: number;
        group: number;
        _transform: null;
        weight: number;
        max: number;
        bezier: null;
        min: number;
    }[];
} | {
    id: string;
    data: {
        min: number;
        bezier: null;
        id: null;
        step: number;
        group: number;
        max: number;
        _transform: null;
        weight: number;
    }[];
} | {
    id: string;
    data: {
        id: null;
        weight: number;
        step: number;
        _transform: null;
        min: number;
        bezier: null;
        group: number;
        max: number;
    }[];
} | {
    data: {
        step: number;
        weight: number;
        min: number;
        id: null;
        _transform: null;
        bezier: null;
        group: number;
        max: number;
    }[];
    id: string;
} | {
    data: {
        min: number;
        group: number;
        id: null;
        max: number;
        weight: number;
        bezier: null;
        _transform: null;
        step: number;
    }[];
    id: string;
} | {
    data: {
        min: number;
        weight: number;
        step: number;
        group: number;
        bezier: null;
        id: null;
        max: number;
        _transform: null;
    }[];
    id: string;
} | {
    data: {
        id: null;
        bezier: null;
        weight: number;
        _transform: null;
        step: number;
        group: number;
        max: number;
        min: number;
    }[];
    id: string;
} | {
    data: {
        weight: number;
        id: null;
        step: number;
        _transform: null;
        min: number;
        group: number;
        max: number;
        bezier: null;
    }[];
    id: string;
} | {
    data: {
        _transform: null;
        min: number;
        weight: number;
        max: number;
        step: number;
        id: null;
        bezier: null;
        group: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        bezier: null;
        min: number;
        id: null;
        weight: number;
        _transform: null;
        max: number;
        step: number;
        group: number;
    }[];
} | {
    id: string;
    data: {
        group: number;
        id: null;
        bezier: null;
        max: number;
        step: number;
        _transform: null;
        weight: number;
        min: number;
    }[];
} | {
    id: string;
    data: {
        min: number;
        group: number;
        max: number;
        step: number;
        bezier: null;
        id: null;
        _transform: null;
        weight: number;
    }[];
} | {
    data: {
        weight: number;
        bezier: null;
        _transform: null;
        min: number;
        id: string;
        group: number;
        max: number;
        step: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        weight: number;
        id: string;
        min: number;
        max: number;
        group: number;
        bezier: null;
        _transform: null;
        step: number;
    }[];
} | {
    id: string;
    data: {
        max: number;
        bezier: null;
        min: number;
        group: number;
        weight: number;
        id: string;
        _transform: null;
        step: number;
    }[];
} | {
    id: string;
    data: {
        step: number;
        id: string;
        _transform: null;
        weight: number;
        max: number;
        bezier: null;
        group: number;
        min: number;
    }[];
} | {
    data: {
        min: number;
        step: number;
        max: number;
        weight: number;
        _transform: null;
        id: string;
        bezier: null;
        group: number;
    }[];
    id: string;
} | {
    data: {
        min: number;
        group: number;
        step: number;
        weight: number;
        _transform: null;
        bezier: null;
        id: string;
        max: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        id: string;
        _transform: null;
        step: number;
        group: number;
        min: number;
        max: number;
        weight: number;
        bezier: null;
    }[];
} | {
    data: {
        bezier: null;
        _transform: null;
        weight: number;
        id: string;
        min: number;
        step: number;
        max: number;
        group: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        id: string;
        max: number;
        _transform: null;
        min: number;
        bezier: null;
        group: number;
        step: number;
        weight: number;
    }[];
} | {
    data: {
        group: number;
        step: number;
        weight: number;
        _transform: null;
        id: string;
        max: number;
        bezier: null;
        min: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        max: number;
        weight: number;
        group: number;
        step: number;
        min: number;
        bezier: null;
        _transform: null;
        id: string;
    }[];
} | {
    data: {
        _transform: null;
        min: number;
        weight: number;
        bezier: null;
        id: string;
        group: number;
        step: number;
        max: number;
    }[];
    id: string;
} | {
    data: {
        step: number;
        group: number;
        max: number;
        _transform: null;
        min: number;
        id: string;
        bezier: null;
        weight: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        weight: number;
        group: number;
        bezier: null;
        _transform: null;
        min: number;
        max: number;
        id: string;
        step: number;
    }[];
} | {
    id: string;
    data: {
        _transform: null;
        max: number;
        weight: number;
        group: number;
        step: number;
        id: string;
        min: number;
        bezier: null;
    }[];
} | {
    id: string;
    data: {
        _transform: null;
        min: number;
        step: number;
        id: string;
        bezier: null;
        group: number;
        max: number;
        weight: number;
    }[];
} | {
    data: {
        _transform: null;
        step: number;
        weight: number;
        min: number;
        id: string;
        max: number;
        bezier: null;
        group: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        id: string;
        weight: number;
        group: number;
        max: number;
        step: number;
        _transform: null;
        min: number;
        bezier: null;
    }[];
} | {
    id: string;
    data: {
        _transform: null;
        group: number;
        min: number;
        max: number;
        bezier: null;
        step: number;
        id: string;
        weight: number;
    }[];
} | {
    id: string;
    data: {
        bezier: null;
        id: string;
        min: number;
        group: number;
        step: number;
        weight: number;
        max: number;
        _transform: null;
    }[];
} | {
    data: {
        id: string;
        weight: number;
        group: number;
        bezier: null;
        max: number;
        _transform: null;
        step: number;
        min: number;
    }[];
    id: string;
} | {
    data: {
        bezier: null;
        weight: number;
        group: number;
        id: string;
        step: number;
        _transform: null;
        min: number;
        max: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        max: number;
        group: number;
        step: number;
        bezier: null;
        _transform: null;
        id: string;
        min: number;
        weight: number;
    }[];
} | {
    id: string;
    data: {
        min: number;
        id: string;
        step: number;
        _transform: null;
        group: number;
        bezier: null;
        max: number;
        weight: number;
    }[];
} | {
    id: string;
    data: {
        weight: number;
        id: string;
        _transform: null;
        min: number;
        step: number;
        bezier: null;
        max: number;
        group: number;
    }[];
} | {
    id: string;
    data: {
        id: string;
        bezier: null;
        _transform: null;
        max: number;
        weight: number;
        group: number;
        step: number;
        min: number;
    }[];
} | {
    id: string;
    data: {
        bezier: null;
        step: number;
        id: string;
        _transform: null;
        weight: number;
        max: number;
        min: number;
        group: number;
    }[];
} | {
    data: {
        bezier: null;
        min: number;
        group: number;
        weight: number;
        _transform: null;
        id: string;
        max: number;
        step: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        bezier: null;
        max: number;
        min: number;
        id: string;
        group: number;
        weight: number;
        _transform: null;
        step: number;
    }[];
} | {
    id: string;
    data: {
        _transform: null;
        min: number;
        group: number;
        step: number;
        bezier: null;
        id: string;
        weight: number;
        max: number;
    }[];
} | {
    id: string;
    data: {
        bezier: null;
        step: number;
        group: number;
        min: number;
        weight: number;
        id: string;
        _transform: null;
        max: number;
    }[];
} | {
    data: {
        step: number;
        group: number;
        max: number;
        bezier: null;
        _transform: null;
        id: string;
        min: number;
        weight: number;
    }[];
    id: string;
} | {
    data: {
        bezier: null;
        group: number;
        _transform: null;
        min: number;
        step: number;
        max: number;
        id: string;
        weight: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        min: number;
        _transform: null;
        group: number;
        step: number;
        id: string;
        weight: number;
        bezier: null;
        max: number;
    }[];
} | {
    data: {
        step: number;
        max: number;
        bezier: null;
        weight: number;
        id: string;
        _transform: null;
        group: number;
        min: number;
    }[];
    id: string;
} | {
    data: {
        group: number;
        bezier: null;
        min: number;
        max: number;
        step: number;
        id: string;
        _transform: null;
        weight: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        weight: number;
        bezier: null;
        group: number;
        id: string;
        max: number;
        step: number;
        min: number;
        _transform: null;
    }[];
} | {
    data: {
        weight: number;
        step: number;
        group: number;
        min: number;
        bezier: null;
        max: number;
        id: string;
        _transform: null;
    }[];
    id: string;
} | {
    id: string;
    data: {
        weight: number;
        bezier: null;
        min: number;
        max: number;
        _transform: null;
        group: number;
        id: string;
        step: number;
    }[];
} | {
    data: {
        min: number;
        group: number;
        weight: number;
        bezier: null;
        id: string;
        _transform: null;
        max: number;
        step: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        group: number;
        id: string;
        weight: number;
        _transform: null;
        min: number;
        bezier: null;
        max: number;
        step: number;
    }[];
} | {
    id: string;
    data: {
        weight: number;
        step: number;
        id: string;
        min: number;
        bezier: null;
        group: number;
        _transform: null;
        max: number;
    }[];
} | {
    data: {
        min: number;
        max: number;
        id: string;
        _transform: null;
        group: number;
        bezier: null;
        step: number;
        weight: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        min: number;
        weight: number;
        max: number;
        step: number;
        id: string;
        group: number;
        bezier: null;
        _transform: null;
    }[];
} | {
    data: {
        _transform: null;
        id: string;
        step: number;
        weight: number;
        group: number;
        max: number;
        bezier: null;
        min: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        step: number;
        min: number;
        bezier: null;
        group: number;
        max: number;
        id: string;
        _transform: null;
        weight: number;
    }[];
} | {
    data: {
        step: number;
        group: number;
        max: number;
        min: number;
        bezier: null;
        _transform: null;
        id: string;
        weight: number;
    }[];
    id: string;
} | {
    data: {
        id: string;
        step: number;
        bezier: null;
        weight: number;
        group: number;
        min: number;
        _transform: null;
        max: number;
    }[];
    id: string;
} | {
    data: {
        bezier: null;
        max: number;
        weight: number;
        id: string;
        step: number;
        group: number;
        _transform: null;
        min: number;
    }[];
    id: string;
} | {
    data: {
        bezier: null;
        id: string;
        _transform: null;
        step: number;
        max: number;
        weight: number;
        min: number;
        group: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        min: number;
        max: number;
        step: number;
        _transform: null;
        weight: number;
        bezier: null;
        group: number;
        id: string;
    }[];
} | {
    data: {
        id: string;
        _transform: null;
        step: number;
        bezier: null;
        max: number;
        weight: number;
        min: number;
        group: number;
    }[];
    id: string;
} | {
    data: {
        id: string;
        group: number;
        _transform: null;
        min: number;
        bezier: null;
        step: number;
        max: number;
        weight: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        group: number;
        _transform: null;
        step: number;
        id: string;
        min: number;
        bezier: null;
        max: number;
        weight: number;
    }[];
} | {
    id: string;
    data: {
        _transform: null;
        bezier: null;
        id: string;
        weight: number;
        group: number;
        min: number;
        step: number;
        max: number;
    }[];
} | {
    id: string;
    data: {
        id: string;
        _transform: null;
        min: number;
        max: number;
        weight: number;
        step: number;
        bezier: null;
        group: number;
    }[];
} | {
    id: string;
    data: {
        _transform: null;
        max: number;
        group: number;
        bezier: null;
        min: number;
        weight: number;
        step: number;
        id: string;
    }[];
} | {
    id: string;
    data: {
        group: number;
        step: number;
        min: number;
        _transform: null;
        bezier: null;
        max: number;
        id: string;
        weight: number;
    }[];
} | {
    data: {
        group: number;
        _transform: null;
        weight: number;
        id: string;
        max: number;
        min: number;
        step: number;
        bezier: null;
    }[];
    id: string;
} | {
    data: {
        group: number;
        _transform: null;
        id: string;
        min: number;
        weight: number;
        step: number;
        max: number;
        bezier: null;
    }[];
    id: string;
} | {
    id: string;
    data: {
        _transform: null;
        min: number;
        weight: number;
        step: number;
        bezier: null;
        id: string;
        max: number;
        group: number;
    }[];
} | {
    data: {
        min: number;
        step: number;
        max: number;
        bezier: null;
        group: number;
        _transform: null;
        weight: number;
        id: string;
    }[];
    id: string;
} | {
    id: string;
    data: {
        _transform: null;
        group: number;
        bezier: null;
        min: number;
        weight: number;
        max: number;
        id: string;
        step: number;
    }[];
} | {
    data: {
        id: string;
        bezier: null;
        max: number;
        step: number;
        group: number;
        weight: number;
        _transform: null;
        min: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        id: string;
        group: number;
        _transform: null;
        weight: number;
        max: number;
        bezier: null;
        min: number;
        step: number;
    }[];
} | {
    id: string;
    data: {
        max: number;
        _transform: null;
        bezier: null;
        step: number;
        group: number;
        min: number;
        id: string;
        weight: number;
    }[];
} | {
    id: string;
    data: {
        bezier: null;
        id: string;
        _transform: null;
        step: number;
        weight: number;
        max: number;
        min: number;
        group: number;
    }[];
} | {
    id: string;
    data: {
        group: number;
        weight: number;
        bezier: null;
        id: string;
        max: number;
        _transform: null;
        step: number;
        min: number;
    }[];
} | {
    data: {
        bezier: null;
        id: string;
        min: number;
        group: number;
        weight: number;
        _transform: null;
        step: number;
        max: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        min: number;
        bezier: null;
        _transform: null;
        max: number;
        group: number;
        weight: number;
        id: string;
        step: number;
    }[];
} | {
    data: {
        max: number;
        step: number;
        _transform: null;
        group: number;
        min: number;
        bezier: null;
        id: string;
        weight: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        id: string;
        weight: number;
        group: number;
        _transform: null;
        min: number;
        max: number;
        bezier: null;
        step: number;
    }[];
} | {
    data: {
        weight: number;
        group: number;
        _transform: null;
        min: number;
        max: number;
        id: string;
        step: number;
        bezier: null;
    }[];
    id: string;
} | {
    data: {
        min: number;
        bezier: null;
        weight: number;
        step: number;
        _transform: null;
        id: string;
        group: number;
        max: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        id: string;
        step: number;
        max: number;
        min: number;
        _transform: null;
        weight: number;
        group: number;
        bezier: null;
    }[];
} | {
    id: string;
    data: {
        id: string;
        bezier: null;
        max: number;
        weight: number;
        group: number;
        _transform: null;
        step: number;
        min: number;
    }[];
} | {
    id: string;
    data: {
        id: string;
        bezier: null;
        weight: number;
        max: number;
        group: number;
        _transform: null;
        min: number;
        step: number;
    }[];
} | {
    id: string;
    data: {
        bezier: null;
        weight: number;
        _transform: null;
        min: number;
        group: number;
        max: number;
        step: number;
        id: string;
    }[];
} | {
    id: string;
    data: {
        min: number;
        bezier: null;
        step: number;
        group: number;
        id: string;
        _transform: null;
        weight: number;
        max: number;
    }[];
} | {
    id: string;
    data: {
        id: string;
        max: number;
        weight: number;
        bezier: null;
        _transform: null;
        min: number;
        step: number;
        group: number;
    }[];
} | {
    id: string;
    data: {
        weight: number;
        step: number;
        max: number;
        _transform: null;
        min: number;
        bezier: null;
        group: number;
        id: string;
    }[];
} | {
    data: {
        group: number;
        id: string;
        weight: number;
        _transform: null;
        min: number;
        max: number;
        step: number;
        bezier: null;
    }[];
    id: string;
} | {
    data: {
        group: number;
        id: string;
        min: number;
        weight: number;
        max: number;
        step: number;
        bezier: null;
        _transform: null;
    }[];
    id: string;
} | {
    id: string;
    data: {
        group: number;
        id: string;
        max: number;
        bezier: null;
        _transform: null;
        min: number;
        step: number;
        weight: number;
    }[];
} | {
    id: string;
    data: {
        id: string;
        step: number;
        max: number;
        group: number;
        weight: number;
        min: number;
        _transform: null;
        bezier: null;
    }[];
} | {
    id: string;
    data: {
        id: string;
        group: number;
        min: number;
        step: number;
        bezier: null;
        _transform: null;
        max: number;
        weight: number;
    }[];
} | {
    data: {
        max: number;
        id: string;
        min: number;
        weight: number;
        bezier: null;
        step: number;
        group: number;
        _transform: null;
    }[];
    id: string;
} | {
    data: {
        bezier: null;
        _transform: null;
        max: number;
        weight: number;
        step: number;
        id: string;
        min: number;
        group: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        _transform: null;
        step: number;
        group: number;
        min: number;
        weight: number;
        bezier: null;
        id: null;
        max: number;
    }[];
} | {
    id: string;
    data: {
        _transform: null;
        bezier: null;
        id: null;
        group: number;
        min: number;
        weight: number;
        step: number;
        max: number;
    }[];
} | {
    id: string;
    data: {
        id: null;
        min: number;
        bezier: null;
        _transform: null;
        step: number;
        max: number;
        group: number;
        weight: number;
    }[];
} | {
    id: string;
    data: {
        max: number;
        min: number;
        group: number;
        weight: number;
        id: null;
        _transform: null;
        bezier: null;
        step: number;
    }[];
} | {
    data: {
        bezier: null;
        id: null;
        weight: number;
        group: number;
        min: number;
        max: number;
        step: number;
        _transform: null;
    }[];
    id: string;
} | {
    id: string;
    data: {
        min: number;
        weight: number;
        step: number;
        group: number;
        id: null;
        bezier: null;
        _transform: null;
        max: number;
    }[];
} | {
    id: string;
    data: {
        group: number;
        max: number;
        _transform: null;
        id: null;
        min: number;
        weight: number;
        step: number;
        bezier: null;
    }[];
} | {
    data: {
        group: number;
        _transform: null;
        min: number;
        max: number;
        weight: number;
        bezier: null;
        step: number;
        id: null;
    }[];
    id: string;
} | {
    id: string;
    data: {
        min: number;
        step: number;
        weight: number;
        max: number;
        id: null;
        bezier: null;
        _transform: null;
        group: number;
    }[];
} | {
    data: {
        bezier: null;
        weight: number;
        _transform: null;
        group: number;
        id: null;
        min: number;
        step: number;
        max: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        max: number;
        _transform: null;
        group: number;
        bezier: null;
        weight: number;
        min: number;
        id: null;
        step: number;
    }[];
} | {
    id: string;
    data: {
        group: number;
        min: number;
        step: number;
        max: number;
        weight: number;
        bezier: null;
        _transform: null;
        id: null;
    }[];
} | {
    data: {
        max: number;
        _transform: null;
        weight: number;
        group: number;
        bezier: null;
        id: null;
        min: number;
        step: number;
    }[];
    id: string;
} | {
    data: {
        id: null;
        weight: number;
        min: number;
        step: number;
        bezier: null;
        _transform: null;
        group: number;
        max: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        min: number;
        weight: number;
        _transform: null;
        group: number;
        id: null;
        bezier: null;
        step: number;
        max: number;
    }[];
} | {
    id: string;
    data: {
        group: number;
        _transform: null;
        id: null;
        weight: number;
        bezier: null;
        max: number;
        min: number;
        step: number;
    }[];
} | {
    id: string;
    data: {
        _transform: null;
        step: number;
        id: null;
        min: number;
        group: number;
        bezier: null;
        max: number;
        weight: number;
    }[];
} | {
    data: {
        id: null;
        _transform: null;
        bezier: null;
        max: number;
        group: number;
        min: number;
        step: number;
        weight: number;
    }[];
    id: string;
} | {
    data: {
        _transform: null;
        max: number;
        weight: number;
        bezier: null;
        min: number;
        id: null;
        group: number;
        step: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        group: number;
        step: number;
        bezier: null;
        id: null;
        weight: number;
        min: number;
        _transform: null;
        max: number;
    }[];
} | {
    data: {
        _transform: null;
        id: null;
        step: number;
        weight: number;
        min: number;
        max: number;
        bezier: null;
        group: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        step: number;
        bezier: null;
        weight: number;
        min: number;
        group: number;
        _transform: null;
        id: null;
        max: number;
    }[];
} | {
    id: string;
    data: {
        _transform: null;
        weight: number;
        id: null;
        max: number;
        step: number;
        bezier: null;
        min: number;
        group: number;
    }[];
} | {
    id: string;
    data: {
        max: number;
        min: number;
        step: number;
        group: number;
        id: null;
        _transform: null;
        bezier: null;
        weight: number;
    }[];
} | {
    id: string;
    data: {
        bezier: null;
        weight: number;
        max: number;
        _transform: null;
        group: number;
        step: number;
        min: number;
        id: null;
    }[];
} | {
    id: string;
    data: {
        step: number;
        max: number;
        id: null;
        group: number;
        bezier: null;
        min: number;
        _transform: null;
        weight: number;
    }[];
} | {
    id: string;
    data: {
        weight: number;
        group: number;
        _transform: null;
        id: null;
        min: number;
        step: number;
        max: number;
        bezier: null;
    }[];
} | {
    id: string;
    data: {
        step: number;
        max: number;
        _transform: null;
        id: null;
        min: number;
        weight: number;
        group: number;
        bezier: null;
    }[];
} | {
    data: {
        min: number;
        step: number;
        group: number;
        bezier: null;
        weight: number;
        _transform: null;
        id: null;
        max: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        group: number;
        bezier: null;
        max: number;
        id: null;
        _transform: null;
        weight: number;
        min: number;
        step: number;
    }[];
} | {
    data: {
        bezier: null;
        id: null;
        _transform: null;
        step: number;
        group: number;
        weight: number;
        min: number;
        max: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        _transform: null;
        weight: number;
        group: number;
        min: number;
        id: null;
        max: number;
        step: number;
        bezier: null;
    }[];
} | {
    data: {
        min: number;
        step: number;
        max: number;
        group: number;
        bezier: null;
        _transform: null;
        weight: number;
        id: null;
    }[];
    id: string;
} | {
    data: {
        step: number;
        min: number;
        _transform: null;
        bezier: null;
        group: number;
        id: null;
        weight: number;
        max: number;
    }[];
    id: string;
} | {
    data: {
        id: null;
        max: number;
        weight: number;
        group: number;
        bezier: null;
        _transform: null;
        step: number;
        min: number;
    }[];
    id: string;
} | {
    data: {
        group: number;
        step: number;
        id: null;
        _transform: null;
        min: number;
        weight: number;
        bezier: null;
        max: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        bezier: null;
        _transform: null;
        max: number;
        min: number;
        id: null;
        weight: number;
        step: number;
        group: number;
    }[];
} | {
    id: string;
    data: {
        step: number;
        weight: number;
        group: number;
        min: number;
        _transform: null;
        id: null;
        bezier: null;
        max: number;
    }[];
} | {
    data: {
        _transform: null;
        group: number;
        weight: number;
        id: null;
        bezier: null;
        step: number;
        min: number;
        max: number;
    }[];
    id: string;
} | {
    data: {
        step: number;
        min: number;
        max: number;
        weight: number;
        group: number;
        bezier: null;
        id: string;
        _transform: null;
    }[];
    id: string;
} | {
    data: {
        group: number;
        _transform: null;
        step: number;
        max: number;
        weight: number;
        bezier: null;
        id: string;
        min: number;
    }[];
    id: string;
} | {
    data: {
        _transform: null;
        bezier: null;
        min: number;
        id: string;
        weight: number;
        step: number;
        max: number;
        group: number;
    }[];
    id: string;
} | {
    data: {
        bezier: null;
        group: number;
        min: number;
        _transform: null;
        step: number;
        max: number;
        weight: number;
        id: string;
    }[];
    id: string;
} | {
    data: {
        step: number;
        max: number;
        group: number;
        bezier: null;
        _transform: null;
        weight: number;
        id: string;
        min: number;
    }[];
    id: string;
} | {
    data: {
        min: number;
        id: string;
        _transform: null;
        max: number;
        weight: number;
        bezier: null;
        group: number;
        step: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        _transform: null;
        id: string;
        group: number;
        min: number;
        max: number;
        bezier: null;
        step: number;
        weight: number;
    }[];
} | {
    id: string;
    data: {
        bezier: null;
        weight: number;
        id: string;
        _transform: null;
        step: number;
        min: number;
        group: number;
        max: number;
    }[];
} | {
    data: {
        id: string;
        _transform: null;
        group: number;
        min: number;
        max: number;
        bezier: null;
        weight: number;
        step: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        min: number;
        bezier: null;
        weight: number;
        group: number;
        step: number;
        id: string;
        _transform: null;
        max: number;
    }[];
} | {
    data: {
        bezier: null;
        max: number;
        step: number;
        min: number;
        id: string;
        _transform: null;
        group: number;
        weight: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        bezier: null;
        id: string;
        max: number;
        _transform: null;
        min: number;
        weight: number;
        group: number;
        step: number;
    }[];
} | {
    data: {
        id: string;
        _transform: null;
        bezier: null;
        min: number;
        step: number;
        weight: number;
        group: number;
        max: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        id: string;
        min: number;
        _transform: null;
        weight: number;
        max: number;
        bezier: null;
        group: number;
        step: number;
    }[];
} | {
    id: string;
    data: {
        weight: number;
        id: string;
        step: number;
        group: number;
        _transform: null;
        max: number;
        min: number;
        bezier: null;
    }[];
} | {
    id: string;
    data: {
        bezier: null;
        weight: number;
        step: number;
        group: number;
        id: string;
        min: number;
        max: number;
        _transform: null;
    }[];
} | {
    id: string;
    data: {
        max: number;
        step: number;
        id: string;
        group: number;
        _transform: null;
        min: number;
        bezier: null;
        weight: number;
    }[];
} | {
    data: {
        group: number;
        _transform: null;
        min: number;
        max: number;
        step: number;
        bezier: null;
        weight: number;
        id: string;
    }[];
    id: string;
} | {
    id: string;
    data: {
        bezier: null;
        step: number;
        id: string;
        _transform: null;
        max: number;
        min: number;
        weight: number;
        group: number;
    }[];
} | {
    data: {
        step: number;
        group: number;
        min: number;
        _transform: null;
        max: number;
        id: string;
        weight: number;
        bezier: null;
    }[];
    id: string;
} | {
    data: {
        step: number;
        group: number;
        weight: number;
        id: string;
        _transform: null;
        max: number;
        min: number;
        bezier: null;
    }[];
    id: string;
} | {
    id: string;
    data: {
        step: number;
        id: string;
        weight: number;
        bezier: null;
        min: number;
        group: number;
        max: number;
        _transform: null;
    }[];
} | {
    id: string;
    data: {
        _transform: null;
        max: number;
        id: string;
        min: number;
        group: number;
        weight: number;
        bezier: null;
        step: number;
    }[];
} | {
    data: {
        id: string;
        bezier: null;
        _transform: null;
        min: number;
        weight: number;
        step: number;
        group: number;
        max: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        bezier: null;
        weight: number;
        max: number;
        group: number;
        min: number;
        _transform: null;
        id: string;
        step: number;
    }[];
} | {
    id: string;
    data: {
        max: number;
        _transform: null;
        step: number;
        weight: number;
        group: number;
        bezier: null;
        min: number;
        id: string;
    }[];
} | {
    data: {
        max: number;
        bezier: null;
        step: number;
        min: number;
        group: number;
        _transform: null;
        id: string;
        weight: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        group: number;
        max: number;
        weight: number;
        id: string;
        min: number;
        bezier: null;
        _transform: null;
        step: number;
    }[];
} | {
    id: string;
    data: {
        weight: number;
        bezier: null;
        id: string;
        max: number;
        _transform: null;
        group: number;
        min: number;
        step: number;
    }[];
} | {
    id: string;
    data: {
        _transform: null;
        min: number;
        max: number;
        bezier: null;
        step: number;
        weight: number;
        group: number;
        id: string;
    }[];
} | {
    data: {
        step: number;
        id: string;
        _transform: null;
        bezier: null;
        group: number;
        max: number;
        min: number;
        weight: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        max: number;
        _transform: null;
        step: number;
        group: number;
        weight: number;
        bezier: null;
        id: string;
        min: number;
    }[];
} | {
    id: string;
    data: {
        id: string;
        _transform: null;
        max: number;
        weight: number;
        step: number;
        group: number;
        min: number;
        bezier: null;
    }[];
} | {
    data: {
        id: string;
        group: number;
        step: number;
        max: number;
        weight: number;
        min: number;
        bezier: null;
        _transform: null;
    }[];
    id: string;
} | {
    data: {
        id: string;
        weight: number;
        step: number;
        _transform: null;
        min: number;
        group: number;
        max: number;
        bezier: null;
    }[];
    id: string;
} | {
    data: {
        step: number;
        bezier: null;
        max: number;
        id: string;
        min: number;
        weight: number;
        group: number;
        _transform: null;
    }[];
    id: string;
} | {
    id: string;
    data: {
        min: number;
        max: number;
        group: number;
        id: string;
        step: number;
        _transform: null;
        bezier: null;
        weight: number;
    }[];
} | {
    data: {
        bezier: null;
        group: number;
        step: number;
        _transform: null;
        max: number;
        min: number;
        id: string;
        weight: number;
    }[];
    id: string;
} | {
    data: {
        group: number;
        min: number;
        bezier: null;
        _transform: null;
        max: number;
        step: number;
        weight: number;
        id: string;
    }[];
    id: string;
} | {
    data: {
        bezier: null;
        id: string;
        min: number;
        step: number;
        max: number;
        weight: number;
        group: number;
        _transform: null;
    }[];
    id: string;
} | {
    data: {
        min: number;
        id: string;
        max: number;
        group: number;
        bezier: null;
        _transform: null;
        step: number;
        weight: number;
    }[];
    id: string;
} | {
    data: {
        group: number;
        _transform: null;
        step: number;
        id: string;
        min: number;
        bezier: null;
        max: number;
        weight: number;
    }[];
    id: string;
} | {
    data: {
        bezier: null;
        weight: number;
        min: number;
        max: number;
        group: number;
        id: string;
        _transform: null;
        step: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        max: number;
        weight: number;
        step: number;
        group: number;
        id: string;
        _transform: null;
        bezier: null;
        min: number;
    }[];
} | {
    id: string;
    data: {
        group: number;
        max: number;
        weight: number;
        bezier: null;
        step: number;
        min: number;
        _transform: null;
        id: string;
    }[];
} | {
    id: string;
    data: {
        weight: number;
        max: number;
        min: number;
        bezier: null;
        id: string;
        _transform: null;
        step: number;
        group: number;
    }[];
} | {
    data: {
        weight: number;
        bezier: null;
        group: number;
        id: string;
        step: number;
        min: number;
        max: number;
        _transform: null;
    }[];
    id: string;
} | {
    id: string;
    data: {
        id: string;
        step: number;
        min: number;
        max: number;
        group: number;
        _transform: null;
        weight: number;
        bezier: null;
    }[];
} | {
    id: string;
    data: {
        bezier: null;
        group: number;
        id: string;
        step: number;
        _transform: null;
        min: number;
        max: number;
        weight: number;
    }[];
} | {
    id: string;
    data: {
        group: number;
        weight: number;
        max: number;
        step: number;
        _transform: null;
        min: number;
        bezier: null;
        id: string;
    }[];
} | {
    id: string;
    data: {
        _transform: null;
        min: number;
        max: number;
        bezier: null;
        id: string;
        weight: number;
        step: number;
        group: number;
    }[];
} | {
    id: string;
    data: {
        max: number;
        weight: number;
        step: number;
        min: number;
        group: number;
        _transform: null;
        id: string;
        bezier: null;
    }[];
} | {
    id: string;
    data: {
        group: number;
        max: number;
        id: string;
        weight: number;
        min: number;
        bezier: null;
        step: number;
        _transform: null;
    }[];
} | {
    id: string;
    data: {
        step: number;
        bezier: null;
        weight: number;
        min: number;
        max: number;
        _transform: null;
        id: string;
        group: number;
    }[];
} | {
    data: {
        max: number;
        group: number;
        min: number;
        bezier: null;
        weight: number;
        _transform: null;
        id: string;
        step: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        step: number;
        min: number;
        _transform: null;
        group: number;
        bezier: null;
        id: string;
        weight: number;
        max: number;
    }[];
} | {
    id: string;
    data: {
        id: string;
        min: number;
        weight: number;
        group: number;
        step: number;
        bezier: null;
        _transform: null;
        max: number;
    }[];
} | {
    data: {
        _transform: null;
        id: string;
        max: number;
        bezier: null;
        weight: number;
        group: number;
        min: number;
        step: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        id: string;
        min: number;
        group: number;
        bezier: null;
        max: number;
        _transform: null;
        step: number;
        weight: number;
    }[];
} | {
    data: {
        step: number;
        bezier: null;
        id: string;
        _transform: null;
        max: number;
        group: number;
        weight: number;
        min: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        id: string;
        min: number;
        step: number;
        group: number;
        max: number;
        _transform: null;
        weight: number;
        bezier: null;
    }[];
} | {
    id: string;
    data: {
        weight: number;
        _transform: null;
        min: number;
        group: number;
        step: number;
        bezier: null;
        id: string;
        max: number;
    }[];
} | {
    data: {
        step: number;
        max: number;
        bezier: null;
        _transform: null;
        min: number;
        weight: number;
        id: string;
        group: number;
    }[];
    id: string;
} | {
    data: {
        weight: number;
        id: string;
        group: number;
        max: number;
        min: number;
        bezier: null;
        step: number;
        _transform: null;
    }[];
    id: string;
} | {
    id: string;
    data: {
        step: number;
        id: string;
        min: number;
        group: number;
        bezier: null;
        _transform: null;
        max: number;
        weight: number;
    }[];
} | {
    id: string;
    data: {
        max: number;
        weight: number;
        id: string;
        _transform: null;
        step: number;
        group: number;
        min: number;
        bezier: null;
    }[];
} | {
    id: string;
    data: {
        group: number;
        bezier: null;
        max: number;
        weight: number;
        step: number;
        _transform: null;
        min: number;
        id: string;
    }[];
} | {
    id: string;
    data: {
        group: number;
        step: number;
        min: number;
        max: number;
        weight: number;
        bezier: null;
        id: string;
        _transform: null;
    }[];
} | {
    id: string;
    data: {
        _transform: null;
        max: number;
        weight: number;
        bezier: null;
        id: string;
        step: number;
        min: number;
        group: number;
    }[];
} | {
    data: {
        id: string;
        max: number;
        weight: number;
        group: number;
        min: number;
        bezier: null;
        _transform: null;
        step: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        step: number;
        min: number;
        weight: number;
        group: number;
        _transform: null;
        max: number;
        bezier: null;
        id: string;
    }[];
} | {
    data: {
        id: string;
        group: number;
        min: number;
        max: number;
        _transform: null;
        weight: number;
        bezier: null;
        step: number;
    }[];
    id: string;
} | {
    data: {
        bezier: null;
        min: number;
        _transform: null;
        id: string;
        weight: number;
        step: number;
        group: number;
        max: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        min: number;
        weight: number;
        group: number;
        bezier: null;
        id: string;
        _transform: null;
        step: number;
        max: number;
    }[];
} | {
    data: {
        _transform: null;
        step: number;
        weight: number;
        bezier: null;
        id: string;
        group: number;
        min: number;
        max: number;
    }[];
    id: string;
} | {
    data: {
        group: number;
        weight: number;
        min: number;
        step: number;
        bezier: null;
        max: number;
        _transform: null;
        id: string;
    }[];
    id: string;
} | {
    data: {
        weight: number;
        min: number;
        bezier: null;
        max: number;
        _transform: null;
        group: number;
        step: number;
        id: string;
    }[];
    id: string;
} | {
    id: string;
    data: {
        group: number;
        weight: number;
        bezier: null;
        id: string;
        min: number;
        _transform: null;
        step: number;
        max: number;
    }[];
} | {
    data: {
        max: number;
        weight: number;
        step: number;
        id: string;
        bezier: null;
        min: number;
        group: number;
        _transform: null;
    }[];
    id: string;
} | {
    id: string;
    data: {
        weight: number;
        _transform: null;
        id: string;
        bezier: null;
        max: number;
        min: number;
        group: number;
        step: number;
    }[];
} | {
    data: {
        bezier: null;
        min: number;
        weight: number;
        _transform: null;
        group: number;
        id: string;
        max: number;
        step: number;
    }[];
    id: string;
} | {
    data: {
        max: number;
        min: number;
        _transform: null;
        id: string;
        weight: number;
        step: number;
        bezier: null;
        group: number;
    }[];
    id: string;
} | {
    data: {
        min: number;
        id: string;
        _transform: null;
        step: number;
        group: number;
        max: number;
        bezier: null;
        weight: number;
    }[];
    id: string;
} | {
    data: {
        max: number;
        bezier: null;
        min: number;
        _transform: null;
        weight: number;
        id: string;
        group: number;
        step: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        group: number;
        bezier: null;
        _transform: null;
        id: string;
        max: number;
        step: number;
        min: number;
        weight: number;
    }[];
} | {
    id: string;
    data: {
        bezier: null;
        _transform: null;
        group: number;
        min: number;
        weight: number;
        max: number;
        id: string;
        step: number;
    }[];
} | {
    data: {
        id: string;
        step: number;
        group: number;
        weight: number;
        _transform: null;
        min: number;
        bezier: null;
        max: number;
    }[];
    id: string;
} | {
    data: {
        bezier: null;
        _transform: null;
        max: number;
        step: number;
        group: number;
        id: string;
        min: number;
        weight: number;
    }[];
    id: string;
} | {
    data: {
        weight: number;
        id: string;
        _transform: null;
        group: number;
        max: number;
        step: number;
        bezier: null;
        min: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        id: string;
        max: number;
        group: number;
        weight: number;
        min: number;
        step: number;
        bezier: null;
        _transform: null;
    }[];
} | {
    id: string;
    data: {
        bezier: null;
        min: number;
        group: number;
        step: number;
        max: number;
        weight: number;
        _transform: null;
        id: string;
    }[];
} | {
    data: {
        step: number;
        bezier: null;
        _transform: null;
        group: number;
        min: number;
        id: string;
        max: number;
        weight: number;
    }[];
    id: string;
} | {
    data: {
        weight: number;
        bezier: null;
        _transform: null;
        max: number;
        group: number;
        id: string;
        step: number;
        min: number;
    }[];
    id: string;
} | {
    data: {
        step: number;
        weight: number;
        id: string;
        _transform: null;
        bezier: null;
        group: number;
        min: number;
        max: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        _transform: null;
        max: number;
        weight: number;
        step: number;
        id: string;
        bezier: null;
        min: number;
        group: number;
    }[];
} | {
    data: {
        min: number;
        step: number;
        bezier: null;
        max: number;
        group: number;
        id: string;
        _transform: null;
        weight: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        weight: number;
        step: number;
        group: number;
        min: number;
        _transform: null;
        max: number;
        bezier: null;
        id: string;
    }[];
} | {
    data: {
        min: number;
        _transform: null;
        group: number;
        bezier: null;
        max: number;
        id: string;
        step: number;
        weight: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        max: number;
        step: number;
        bezier: null;
        weight: number;
        min: number;
        id: string;
        _transform: null;
        group: number;
    }[];
} | {
    id: string;
    data: {
        weight: number;
        step: number;
        bezier: null;
        id: string;
        _transform: null;
        max: number;
        group: number;
        min: number;
    }[];
} | {
    id: string;
    data: {
        min: number;
        weight: number;
        id: string;
        max: number;
        bezier: null;
        group: number;
        _transform: null;
        step: number;
    }[];
} | {
    data: {
        bezier: null;
        max: number;
        id: string;
        weight: number;
        min: number;
        step: number;
        _transform: null;
        group: number;
    }[];
    id: string;
} | {
    data: {
        bezier: null;
        min: number;
        max: number;
        weight: number;
        id: string;
        _transform: null;
        step: number;
        group: number;
    }[];
    id: string;
} | {
    data: {
        weight: number;
        bezier: null;
        group: number;
        min: number;
        _transform: null;
        max: number;
        id: string;
        step: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        min: number;
        _transform: null;
        weight: number;
        group: number;
        id: string;
        step: number;
        max: number;
        bezier: null;
    }[];
} | {
    data: {
        group: number;
        _transform: null;
        id: string;
        min: number;
        max: number;
        step: number;
        weight: number;
        bezier: null;
    }[];
    id: string;
} | {
    id: string;
    data: {
        bezier: null;
        weight: number;
        id: string;
        max: number;
        step: number;
        group: number;
        min: number;
        _transform: null;
    }[];
} | {
    id: string;
    data: {
        weight: number;
        bezier: null;
        min: number;
        group: number;
        _transform: null;
        max: number;
        step: number;
        id: string;
    }[];
} | {
    data: {
        group: number;
        step: number;
        weight: number;
        bezier: null;
        id: string;
        min: number;
        max: number;
        _transform: null;
    }[];
    id: string;
} | {
    data: {
        group: number;
        weight: number;
        _transform: null;
        bezier: null;
        id: string;
        min: number;
        step: number;
        max: number;
    }[];
    id: string;
} | {
    data: {
        group: number;
        bezier: null;
        min: number;
        max: number;
        weight: number;
        id: string;
        _transform: null;
        step: number;
    }[];
    id: string;
} | {
    data: {
        weight: number;
        _transform: null;
        bezier: null;
        id: string;
        max: number;
        step: number;
        min: number;
        group: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        min: number;
        weight: number;
        step: number;
        max: number;
        group: number;
        id: string;
        _transform: null;
        bezier: null;
    }[];
} | {
    id: string;
    data: {
        max: number;
        group: number;
        id: string;
        weight: number;
        step: number;
        _transform: null;
        min: number;
        bezier: null;
    }[];
} | {
    data: {
        bezier: null;
        weight: number;
        step: number;
        group: number;
        id: string;
        min: number;
        max: number;
        _transform: null;
    }[];
    id: string;
} | {
    id: string;
    data: {
        _transform: null;
        step: number;
        bezier: null;
        id: string;
        min: number;
        max: number;
        weight: number;
        group: number;
    }[];
} | {
    id: string;
    data: {
        _transform: null;
        step: number;
        max: number;
        id: string;
        bezier: null;
        min: number;
        weight: number;
        group: number;
    }[];
} | {
    data: {
        weight: number;
        step: number;
        id: string;
        bezier: null;
        group: number;
        min: number;
        _transform: null;
        max: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        bezier: null;
        id: string;
        group: number;
        weight: number;
        _transform: null;
        step: number;
        max: number;
        min: number;
    }[];
} | {
    id: string;
    data: {
        group: number;
        _transform: null;
        max: number;
        id: string;
        weight: number;
        bezier: null;
        min: number;
        step: number;
    }[];
} | {
    data: {
        weight: number;
        _transform: null;
        max: number;
        group: number;
        min: number;
        id: string;
        bezier: null;
        step: number;
    }[];
    id: string;
} | {
    data: {
        id: string;
        group: number;
        max: number;
        _transform: null;
        bezier: null;
        min: number;
        weight: number;
        step: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        min: number;
        weight: number;
        _transform: null;
        step: number;
        group: number;
        bezier: null;
        id: string;
        max: number;
    }[];
} | {
    id: string;
    data: {
        bezier: null;
        min: number;
        max: number;
        weight: number;
        group: number;
        _transform: null;
        id: string;
        step: number;
    }[];
} | {
    data: {
        step: number;
        group: number;
        id: string;
        weight: number;
        max: number;
        min: number;
        _transform: null;
        bezier: null;
    }[];
    id: string;
} | {
    data: {
        max: number;
        min: number;
        step: number;
        _transform: null;
        group: number;
        bezier: null;
        weight: number;
        id: string;
    }[];
    id: string;
} | {
    data: {
        group: number;
        bezier: null;
        _transform: null;
        id: string;
        min: number;
        max: number;
        weight: number;
        step: number;
    }[];
    id: string;
} | {
    data: {
        step: number;
        min: number;
        id: string;
        weight: number;
        group: number;
        _transform: null;
        max: number;
        bezier: null;
    }[];
    id: string;
} | {
    id: string;
    data: {
        id: string;
        weight: number;
        step: number;
        min: number;
        group: number;
        bezier: null;
        max: number;
        _transform: null;
    }[];
} | {
    id: string;
    data: {
        bezier: null;
        _transform: null;
        min: number;
        id: string;
        step: number;
        weight: number;
        max: number;
        group: number;
    }[];
} | {
    data: {
        group: number;
        step: number;
        id: string;
        bezier: null;
        weight: number;
        min: number;
        max: number;
        _transform: null;
    }[];
    id: string;
} | {
    data: {
        bezier: null;
        _transform: null;
        min: number;
        step: number;
        weight: number;
        id: string;
        group: number;
        max: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        id: string;
        step: number;
        min: number;
        max: number;
        weight: number;
        group: number;
        bezier: null;
        _transform: null;
    }[];
} | {
    id: string;
    data: {
        weight: number;
        group: number;
        min: number;
        id: string;
        bezier: null;
        _transform: null;
        max: number;
        step: number;
    }[];
} | {
    id: string;
    data: {
        weight: number;
        min: number;
        step: number;
        bezier: null;
        group: number;
        max: number;
        _transform: null;
        id: string;
    }[];
} | {
    data: {
        _transform: null;
        weight: number;
        step: number;
        bezier: null;
        id: string;
        min: number;
        max: number;
        group: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        bezier: null;
        id: string;
        min: number;
        max: number;
        weight: number;
        step: number;
        _transform: null;
        group: number;
    }[];
} | {
    data: {
        min: number;
        bezier: null;
        _transform: null;
        max: number;
        weight: number;
        id: string;
        group: number;
        step: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        group: number;
        step: number;
        id: string;
        min: number;
        weight: number;
        _transform: null;
        max: number;
        bezier: null;
    }[];
} | {
    id: string;
    data: {
        min: number;
        weight: number;
        id: string;
        _transform: null;
        bezier: null;
        group: number;
        step: number;
        max: number;
    }[];
} | {
    id: string;
    data: {
        group: number;
        step: number;
        bezier: null;
        max: number;
        weight: number;
        _transform: null;
        id: string;
        min: number;
    }[];
} | {
    data: {
        min: number;
        weight: number;
        group: number;
        max: number;
        id: string;
        _transform: null;
        step: number;
        bezier: null;
    }[];
    id: string;
} | {
    id: string;
    data: {
        min: number;
        max: number;
        bezier: null;
        id: string;
        weight: number;
        step: number;
        group: number;
        _transform: null;
    }[];
} | {
    id: string;
    data: {
        group: number;
        step: number;
        id: string;
        bezier: null;
        _transform: null;
        max: number;
        min: number;
        weight: number;
    }[];
} | {
    data: {
        group: number;
        max: number;
        bezier: null;
        _transform: null;
        min: number;
        step: number;
        id: string;
        weight: number;
    }[];
    id: string;
} | {
    data: {
        group: number;
        id: string;
        bezier: null;
        max: number;
        min: number;
        _transform: null;
        weight: number;
        step: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        bezier: null;
        group: number;
        id: string;
        step: number;
        weight: number;
        max: number;
        _transform: null;
        min: number;
    }[];
} | {
    data: {
        group: number;
        _transform: null;
        min: number;
        weight: number;
        max: number;
        id: string;
        step: number;
        bezier: null;
    }[];
    id: string;
} | {
    id: string;
    data: {
        step: number;
        max: number;
        weight: number;
        bezier: null;
        min: number;
        group: number;
        id: string;
        _transform: null;
    }[];
} | {
    id: string;
    data: {
        id: string;
        weight: number;
        step: number;
        min: number;
        max: number;
        group: number;
        bezier: null;
        _transform: null;
    }[];
} | {
    id: string;
    data: {
        id: string;
        group: number;
        _transform: null;
        min: number;
        max: number;
        weight: number;
        bezier: null;
        step: number;
    }[];
} | {
    data: {
        min: number;
        step: number;
        _transform: null;
        max: number;
        group: number;
        id: string;
        weight: number;
        bezier: null;
    }[];
    id: string;
} | {
    data: {
        id: string;
        step: number;
        weight: number;
        group: number;
        max: number;
        _transform: null;
        min: number;
        bezier: null;
    }[];
    id: string;
} | {
    id: string;
    data: {
        max: number;
        group: number;
        _transform: null;
        weight: number;
        min: number;
        bezier: null;
        step: number;
        id: string;
    }[];
} | {
    id: string;
    data: {
        max: number;
        group: number;
        bezier: null;
        id: string;
        weight: number;
        _transform: null;
        step: number;
        min: number;
    }[];
} | {
    id: string;
    data: {
        bezier: null;
        min: number;
        max: number;
        group: number;
        id: string;
        _transform: null;
        weight: number;
        step: number;
    }[];
} | {
    id: string;
    data: {
        group: number;
        step: number;
        max: number;
        _transform: null;
        id: string;
        weight: number;
        bezier: null;
        min: number;
    }[];
} | {
    data: {
        min: number;
        bezier: null;
        id: string;
        max: number;
        group: number;
        _transform: null;
        weight: number;
        step: number;
    }[];
    id: string;
} | {
    data: {
        weight: number;
        min: number;
        id: string;
        step: number;
        group: number;
        _transform: null;
        bezier: null;
        max: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        id: string;
        bezier: null;
        min: number;
        weight: number;
        _transform: null;
        group: number;
        step: number;
        max: number;
    }[];
} | {
    data: {
        step: number;
        _transform: null;
        min: number;
        weight: number;
        max: number;
        group: number;
        bezier: null;
        id: string;
    }[];
    id: string;
} | {
    data: {
        bezier: null;
        id: string;
        _transform: null;
        weight: number;
        group: number;
        min: number;
        max: number;
        step: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        weight: number;
        group: number;
        step: number;
        min: number;
        bezier: null;
        _transform: null;
        id: string;
        max: number;
    }[];
} | {
    id: string;
    data: {
        group: number;
        min: number;
        _transform: null;
        max: number;
        weight: number;
        bezier: null;
        id: string;
        step: number;
    }[];
} | {
    id: string;
    data: {
        _transform: null;
        group: number;
        step: number;
        id: string;
        max: number;
        weight: number;
        bezier: null;
        min: number;
    }[];
} | {
    id: string;
    data: {
        step: number;
        min: number;
        id: string;
        weight: number;
        max: number;
        group: number;
        bezier: null;
        _transform: null;
    }[];
} | {
    id: string;
    data: {
        weight: number;
        group: number;
        step: number;
        min: number;
        id: string;
        bezier: null;
        _transform: null;
        max: number;
    }[];
} | {
    id: string;
    data: {
        max: number;
        group: number;
        id: string;
        bezier: null;
        _transform: null;
        min: number;
        weight: number;
        step: number;
    }[];
} | {
    id: string;
    data: {
        group: number;
        weight: number;
        id: string;
        bezier: null;
        min: number;
        _transform: null;
        step: number;
        max: number;
    }[];
} | {
    data: {
        min: number;
        max: number;
        step: number;
        _transform: null;
        group: number;
        id: string;
        bezier: null;
        weight: number;
    }[];
    id: string;
} | {
    data: {
        bezier: null;
        _transform: null;
        id: string;
        max: number;
        step: number;
        group: number;
        weight: number;
        min: number;
    }[];
    id: string;
} | {
    data: {
        bezier: null;
        id: string;
        min: number;
        group: number;
        _transform: null;
        step: number;
        max: number;
        weight: number;
    }[];
    id: string;
} | {
    data: {
        group: number;
        id: string;
        bezier: null;
        max: number;
        step: number;
        weight: number;
        _transform: null;
        min: number;
    }[];
    id: string;
} | {
    data: {
        id: string;
        min: number;
        weight: number;
        _transform: null;
        step: number;
        group: number;
        bezier: null;
        max: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        step: number;
        weight: number;
        bezier: null;
        group: number;
        _transform: null;
        max: number;
        id: string;
        min: number;
    }[];
} | {
    data: {
        weight: number;
        min: number;
        bezier: null;
        _transform: null;
        max: number;
        step: number;
        group: number;
        id: string;
    }[];
    id: string;
} | {
    data: {
        bezier: null;
        step: number;
        max: number;
        group: number;
        id: string;
        _transform: null;
        weight: number;
        min: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        id: null;
        _transform: null;
        weight: number;
        bezier: null;
        step: number;
        max: number;
        group: number;
        min: number;
    }[];
} | {
    id: string;
    data: {
        id: null;
        group: number;
        max: number;
        bezier: null;
        _transform: null;
        weight: number;
        min: number;
        step: number;
    }[];
} | {
    id: string;
    data: {
        max: number;
        step: number;
        group: number;
        min: number;
        _transform: null;
        weight: number;
        id: null;
        bezier: null;
    }[];
} | {
    data: {
        group: number;
        step: number;
        bezier: null;
        max: number;
        _transform: null;
        weight: number;
        min: number;
        id: null;
    }[];
    id: string;
} | {
    data: {
        max: number;
        bezier: null;
        weight: number;
        id: null;
        step: number;
        group: number;
        min: number;
        _transform: null;
    }[];
    id: string;
} | {
    data: {
        _transform: null;
        min: number;
        step: number;
        weight: number;
        id: null;
        group: number;
        max: number;
        bezier: null;
    }[];
    id: string;
} | {
    data: {
        bezier: null;
        _transform: null;
        max: number;
        id: null;
        group: number;
        min: number;
        weight: number;
        step: number;
    }[];
    id: string;
} | {
    data: {
        group: number;
        _transform: null;
        weight: number;
        step: number;
        id: null;
        min: number;
        max: number;
        bezier: null;
    }[];
    id: string;
} | {
    data: {
        id: null;
        min: number;
        weight: number;
        group: number;
        max: number;
        step: number;
        bezier: null;
        _transform: null;
    }[];
    id: string;
} | {
    id: string;
    data: {
        bezier: null;
        group: number;
        weight: number;
        _transform: null;
        step: number;
        id: null;
        max: number;
        min: number;
    }[];
} | {
    data: {
        _transform: null;
        group: number;
        min: number;
        max: number;
        bezier: null;
        id: null;
        step: number;
        weight: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        max: number;
        weight: number;
        min: number;
        bezier: null;
        id: null;
        group: number;
        _transform: null;
        step: number;
    }[];
} | {
    id: string;
    data: {
        _transform: null;
        min: number;
        group: number;
        id: null;
        weight: number;
        max: number;
        step: number;
        bezier: null;
    }[];
} | {
    data: {
        weight: number;
        step: number;
        group: number;
        max: number;
        id: null;
        _transform: null;
        bezier: null;
        min: number;
    }[];
    id: string;
} | {
    data: {
        group: number;
        weight: number;
        id: null;
        min: number;
        step: number;
        max: number;
        _transform: null;
        bezier: null;
    }[];
    id: string;
} | {
    data: {
        id: null;
        max: number;
        group: number;
        step: number;
        _transform: null;
        bezier: null;
        weight: number;
        min: number;
    }[];
    id: string;
} | {
    data: {
        group: number;
        weight: number;
        min: number;
        step: number;
        _transform: null;
        bezier: null;
        id: null;
        max: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        weight: number;
        max: number;
        group: number;
        step: number;
        bezier: null;
        id: null;
        min: number;
        _transform: null;
    }[];
} | {
    data: {
        step: number;
        group: number;
        _transform: null;
        id: null;
        weight: number;
        min: number;
        max: number;
        bezier: null;
    }[];
    id: string;
} | {
    data: {
        group: number;
        weight: number;
        id: null;
        step: number;
        bezier: null;
        min: number;
        _transform: null;
        max: number;
    }[];
    id: string;
} | {
    data: {
        _transform: null;
        step: number;
        min: number;
        group: number;
        id: null;
        bezier: null;
        weight: number;
        max: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        min: number;
        _transform: null;
        bezier: null;
        max: number;
        id: null;
        group: number;
        step: number;
        weight: number;
    }[];
} | {
    data: {
        id: null;
        max: number;
        _transform: null;
        min: number;
        weight: number;
        step: number;
        group: number;
        bezier: null;
    }[];
    id: string;
} | {
    data: {
        group: number;
        weight: number;
        step: number;
        id: null;
        min: number;
        bezier: null;
        max: number;
        _transform: null;
    }[];
    id: string;
} | {
    id: string;
    data: {
        id: null;
        min: number;
        group: number;
        max: number;
        _transform: null;
        bezier: null;
        step: number;
        weight: number;
    }[];
} | {
    id: string;
    data: {
        step: number;
        weight: number;
        id: null;
        group: number;
        _transform: null;
        min: number;
        max: number;
        bezier: null;
    }[];
} | {
    id: string;
    data: {
        bezier: null;
        step: number;
        max: number;
        id: null;
        _transform: null;
        group: number;
        min: number;
        weight: number;
    }[];
} | {
    data: {
        id: null;
        bezier: null;
        weight: number;
        step: number;
        group: number;
        max: number;
        min: number;
        _transform: null;
    }[];
    id: string;
} | {
    id: string;
    data: {
        group: number;
        bezier: null;
        _transform: null;
        step: number;
        weight: number;
        min: number;
        max: number;
        id: null;
    }[];
} | {
    id: string;
    data: {
        bezier: null;
        step: number;
        id: null;
        _transform: null;
        max: number;
        weight: number;
        group: number;
        min: number;
    }[];
} | {
    data: {
        max: number;
        bezier: null;
        id: null;
        min: number;
        weight: number;
        _transform: null;
        step: number;
        group: number;
    }[];
    id: string;
} | {
    data: {
        group: number;
        max: number;
        _transform: null;
        weight: number;
        id: null;
        bezier: null;
        step: number;
        min: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        min: number;
        weight: number;
        max: number;
        group: number;
        step: number;
        _transform: null;
        bezier: null;
        id: null;
    }[];
} | {
    data: {
        bezier: null;
        min: number;
        _transform: null;
        step: number;
        id: null;
        weight: number;
        group: number;
        max: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        _transform: null;
        max: number;
        step: number;
        min: number;
        group: number;
        id: null;
        weight: number;
        bezier: null;
    }[];
} | {
    data: {
        step: number;
        bezier: null;
        group: number;
        weight: number;
        min: number;
        max: number;
        _transform: null;
        id: null;
    }[];
    id: string;
} | {
    data: {
        _transform: null;
        min: number;
        weight: number;
        max: number;
        group: number;
        id: null;
        step: number;
        bezier: null;
    }[];
    id: string;
} | {
    data: {
        max: number;
        id: null;
        _transform: null;
        group: number;
        step: number;
        bezier: null;
        weight: number;
        min: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        min: number;
        max: number;
        weight: number;
        id: null;
        bezier: null;
        group: number;
        _transform: null;
        step: number;
    }[];
} | {
    data: {
        step: number;
        bezier: null;
        id: string;
        group: number;
        _transform: null;
        min: number;
        max: number;
        weight: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        min: number;
        _transform: null;
        weight: number;
        bezier: null;
        max: number;
        step: number;
        id: string;
        group: number;
    }[];
} | {
    id: string;
    data: {
        min: number;
        weight: number;
        _transform: null;
        bezier: null;
        id: string;
        max: number;
        step: number;
        group: number;
    }[];
} | {
    id: string;
    data: {
        bezier: null;
        id: string;
        max: number;
        weight: number;
        min: number;
        _transform: null;
        group: number;
        step: number;
    }[];
} | {
    id: string;
    data: {
        _transform: null;
        max: number;
        step: number;
        group: number;
        id: string;
        bezier: null;
        min: number;
        weight: number;
    }[];
} | {
    id: string;
    data: {
        max: number;
        group: number;
        _transform: null;
        bezier: null;
        min: number;
        step: number;
        id: string;
        weight: number;
    }[];
} | {
    data: {
        bezier: null;
        _transform: null;
        step: number;
        max: number;
        group: number;
        id: string;
        min: number;
        weight: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        weight: number;
        _transform: null;
        step: number;
        id: string;
        group: number;
        bezier: null;
        max: number;
        min: number;
    }[];
} | {
    data: {
        min: number;
        group: number;
        _transform: null;
        step: number;
        id: string;
        max: number;
        weight: number;
        bezier: null;
    }[];
    id: string;
} | {
    id: string;
    data: {
        bezier: null;
        max: number;
        weight: number;
        group: number;
        _transform: null;
        step: number;
        min: number;
        id: string;
    }[];
} | {
    id: string;
    data: {
        step: number;
        group: number;
        id: string;
        max: number;
        min: number;
        weight: number;
        bezier: null;
        _transform: null;
    }[];
} | {
    id: string;
    data: {
        max: number;
        step: number;
        bezier: null;
        _transform: null;
        weight: number;
        min: number;
        group: number;
        id: string;
    }[];
} | {
    id: string;
    data: {
        min: number;
        group: number;
        _transform: null;
        id: string;
        weight: number;
        bezier: null;
        max: number;
        step: number;
    }[];
} | {
    id: string;
    data: {
        _transform: null;
        max: number;
        group: number;
        min: number;
        id: string;
        bezier: null;
        weight: number;
        step: number;
    }[];
} | {
    id: string;
    data: {
        bezier: null;
        group: number;
        step: number;
        min: number;
        id: string;
        _transform: null;
        weight: number;
        max: number;
    }[];
} | {
    data: {
        weight: number;
        id: string;
        max: number;
        group: number;
        _transform: null;
        min: number;
        step: number;
        bezier: null;
    }[];
    id: string;
} | {
    id: string;
    data: {
        min: number;
        bezier: null;
        group: number;
        max: number;
        weight: number;
        _transform: null;
        step: number;
        id: string;
    }[];
} | {
    data: {
        id: string;
        min: number;
        weight: number;
        group: number;
        _transform: null;
        max: number;
        bezier: null;
        step: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        bezier: null;
        _transform: null;
        min: number;
        step: number;
        group: number;
        weight: number;
        max: number;
        id: string;
    }[];
} | {
    id: string;
    data: {
        _transform: null;
        group: number;
        max: number;
        step: number;
        bezier: null;
        weight: number;
        id: string;
        min: number;
    }[];
} | {
    id: string;
    data: {
        group: number;
        max: number;
        min: number;
        bezier: null;
        weight: number;
        _transform: null;
        step: number;
        id: string;
    }[];
} | {
    data: {
        weight: number;
        min: number;
        bezier: null;
        group: number;
        _transform: null;
        max: number;
        id: string;
        step: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        group: number;
        id: string;
        _transform: null;
        max: number;
        weight: number;
        min: number;
        step: number;
        bezier: null;
    }[];
} | {
    data: {
        id: string;
        step: number;
        group: number;
        bezier: null;
        weight: number;
        max: number;
        _transform: null;
        min: number;
    }[];
    id: string;
} | {
    data: {
        _transform: null;
        min: number;
        group: number;
        bezier: null;
        id: string;
        max: number;
        step: number;
        weight: number;
    }[];
    id: string;
} | {
    data: {
        bezier: null;
        _transform: null;
        min: number;
        step: number;
        id: string;
        group: number;
        max: number;
        weight: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        max: number;
        bezier: null;
        _transform: null;
        group: number;
        id: string;
        step: number;
        min: number;
        weight: number;
    }[];
} | {
    data: {
        step: number;
        max: number;
        group: number;
        bezier: null;
        min: number;
        id: string;
        weight: number;
        _transform: null;
    }[];
    id: string;
} | {
    id: string;
    data: {
        step: number;
        _transform: null;
        weight: number;
        bezier: null;
        id: string;
        group: number;
        min: number;
        max: number;
    }[];
} | {
    data: {
        _transform: null;
        weight: number;
        id: string;
        bezier: null;
        max: number;
        min: number;
        group: number;
        step: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        id: string;
        step: number;
        bezier: null;
        group: number;
        min: number;
        max: number;
        weight: number;
        _transform: null;
    }[];
} | {
    data: {
        min: number;
        _transform: null;
        step: number;
        id: string;
        max: number;
        group: number;
        weight: number;
        bezier: null;
    }[];
    id: string;
} | {
    id: string;
    data: {
        group: number;
        _transform: null;
        min: number;
        max: number;
        weight: number;
        step: number;
        id: string;
        bezier: null;
    }[];
} | {
    data: {
        bezier: null;
        min: number;
        step: number;
        weight: number;
        _transform: null;
        group: number;
        id: string;
        max: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        max: number;
        bezier: null;
        weight: number;
        step: number;
        group: number;
        min: number;
        id: string;
        _transform: null;
    }[];
} | {
    data: {
        id: string;
        group: number;
        _transform: null;
        min: number;
        max: number;
        bezier: null;
        weight: number;
        step: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        min: number;
        group: number;
        bezier: null;
        max: number;
        id: string;
        _transform: null;
        weight: number;
        step: number;
    }[];
} | {
    id: string;
    data: {
        _transform: null;
        weight: number;
        min: number;
        max: number;
        id: string;
        group: number;
        step: number;
        bezier: null;
    }[];
} | {
    data: {
        _transform: null;
        min: number;
        id: string;
        bezier: null;
        max: number;
        weight: number;
        group: number;
        step: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        weight: number;
        id: string;
        step: number;
        _transform: null;
        group: number;
        bezier: null;
        max: number;
        min: number;
    }[];
} | {
    id: string;
    data: {
        step: number;
        max: number;
        id: string;
        _transform: null;
        bezier: null;
        group: number;
        min: number;
        weight: number;
    }[];
} | {
    id: string;
    data: {
        max: number;
        step: number;
        _transform: null;
        bezier: null;
        min: number;
        group: number;
        id: string;
        weight: number;
    }[];
} | {
    id: string;
    data: {
        _transform: null;
        max: number;
        min: number;
        id: string;
        step: number;
        bezier: null;
        group: number;
        weight: number;
    }[];
} | {
    data: {
        max: number;
        group: number;
        step: number;
        weight: number;
        bezier: null;
        min: number;
        _transform: null;
        id: string;
    }[];
    id: string;
} | {
    data: {
        min: number;
        bezier: null;
        id: string;
        group: number;
        weight: number;
        _transform: null;
        step: number;
        max: number;
    }[];
    id: string;
} | {
    data: {
        max: number;
        step: number;
        bezier: null;
        _transform: null;
        min: number;
        id: string;
        group: number;
        weight: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        bezier: null;
        group: number;
        id: string;
        max: number;
        weight: number;
        _transform: null;
        min: number;
        step: number;
    }[];
} | {
    id: string;
    data: {
        group: number;
        min: number;
        max: number;
        bezier: null;
        weight: number;
        id: string;
        _transform: null;
        step: number;
    }[];
} | {
    id: string;
    data: {
        group: number;
        max: number;
        _transform: null;
        step: number;
        min: number;
        bezier: null;
        weight: number;
        id: string;
    }[];
} | {
    data: {
        step: number;
        id: string;
        bezier: null;
        _transform: null;
        group: number;
        min: number;
        max: number;
        weight: number;
    }[];
    id: string;
} | {
    data: {
        weight: number;
        max: number;
        _transform: null;
        min: number;
        id: string;
        bezier: null;
        group: number;
        step: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        min: number;
        group: number;
        _transform: null;
        weight: number;
        max: number;
        bezier: null;
        step: number;
        id: string;
    }[];
} | {
    data: {
        min: number;
        step: number;
        group: number;
        bezier: null;
        _transform: null;
        max: number;
        weight: number;
        id: string;
    }[];
    id: string;
} | {
    id: string;
    data: {
        bezier: null;
        max: number;
        min: number;
        group: number;
        id: string;
        _transform: null;
        weight: number;
        step: number;
    }[];
} | {
    id: string;
    data: {
        step: number;
        min: number;
        weight: number;
        group: number;
        bezier: null;
        max: number;
        id: string;
        _transform: null;
    }[];
} | {
    id: string;
    data: {
        max: number;
        group: number;
        weight: number;
        _transform: null;
        bezier: null;
        id: string;
        step: number;
        min: number;
    }[];
} | {
    id: string;
    data: {
        bezier: null;
        weight: number;
        step: number;
        group: number;
        max: number;
        min: number;
        _transform: null;
        id: string;
    }[];
} | {
    data: {
        group: number;
        min: number;
        id: string;
        step: number;
        _transform: null;
        bezier: null;
        max: number;
        weight: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        weight: number;
        group: number;
        id: string;
        bezier: null;
        max: number;
        _transform: null;
        min: number;
        step: number;
    }[];
} | {
    id: string;
    data: {
        max: number;
        step: number;
        bezier: null;
        _transform: null;
        group: number;
        id: string;
        min: number;
        weight: number;
    }[];
} | {
    id: string;
    data: {
        bezier: null;
        max: number;
        id: string;
        _transform: null;
        step: number;
        weight: number;
        min: number;
        group: number;
    }[];
} | {
    id: string;
    data: {
        group: number;
        bezier: null;
        max: number;
        min: number;
        id: string;
        step: number;
        weight: number;
        _transform: null;
    }[];
} | {
    data: {
        max: number;
        weight: number;
        step: number;
        bezier: null;
        group: number;
        min: number;
        id: string;
        _transform: null;
    }[];
    id: string;
} | {
    id: string;
    data: {
        max: number;
        weight: number;
        group: number;
        id: string;
        bezier: null;
        min: number;
        step: number;
        _transform: null;
    }[];
} | {
    data: {
        id: string;
        step: number;
        _transform: null;
        group: number;
        max: number;
        weight: number;
        min: number;
        bezier: null;
    }[];
    id: string;
} | {
    data: {
        group: number;
        step: number;
        id: string;
        weight: number;
        bezier: null;
        _transform: null;
        min: number;
        max: number;
    }[];
    id: string;
} | {
    data: {
        max: number;
        group: number;
        bezier: null;
        min: number;
        _transform: null;
        id: string;
        weight: number;
        step: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        weight: number;
        group: number;
        bezier: null;
        id: string;
        min: number;
        _transform: null;
        max: number;
        step: number;
    }[];
} | {
    id: string;
    data: {
        min: number;
        max: number;
        weight: number;
        id: string;
        group: number;
        bezier: null;
        _transform: null;
        step: number;
    }[];
} | {
    id: string;
    data: {
        max: number;
        bezier: null;
        min: number;
        group: number;
        step: number;
        weight: number;
        id: string;
        _transform: null;
    }[];
} | {
    id: string;
    data: {
        weight: number;
        min: number;
        step: number;
        _transform: null;
        max: number;
        group: number;
        bezier: null;
        id: string;
    }[];
} | {
    id: string;
    data: {
        max: number;
        group: number;
        min: number;
        _transform: null;
        bezier: null;
        id: string;
        step: number;
        weight: number;
    }[];
} | {
    id: string;
    data: {
        bezier: null;
        min: number;
        weight: number;
        step: number;
        id: string;
        _transform: null;
        max: number;
        group: number;
    }[];
} | {
    data: {
        weight: number;
        step: number;
        _transform: null;
        max: number;
        group: number;
        min: number;
        id: string;
        bezier: null;
    }[];
    id: string;
} | {
    id: string;
    data: {
        weight: number;
        step: number;
        group: number;
        bezier: null;
        _transform: null;
        max: number;
        id: string;
        min: number;
    }[];
} | {
    data: {
        _transform: null;
        id: string;
        weight: number;
        step: number;
        group: number;
        min: number;
        bezier: null;
        max: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        min: number;
        id: string;
        weight: number;
        group: number;
        max: number;
        bezier: null;
        _transform: null;
        step: number;
    }[];
} | {
    id: string;
    data: {
        id: string;
        max: number;
        bezier: null;
        min: number;
        step: number;
        group: number;
        weight: number;
        _transform: null;
    }[];
} | {
    id: string;
    data: {
        _transform: null;
        max: number;
        bezier: null;
        id: string;
        group: number;
        min: number;
        weight: number;
        step: number;
    }[];
} | {
    data: {
        weight: number;
        group: number;
        _transform: null;
        step: number;
        id: string;
        max: number;
        bezier: null;
        min: number;
    }[];
    id: string;
} | {
    data: {
        step: number;
        id: string;
        _transform: null;
        max: number;
        group: number;
        weight: number;
        bezier: null;
        min: number;
    }[];
    id: string;
} | {
    data: {
        _transform: null;
        bezier: null;
        max: number;
        step: number;
        weight: number;
        group: number;
        id: string;
        min: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        min: number;
        weight: number;
        step: number;
        bezier: null;
        id: string;
        max: number;
        _transform: null;
        group: number;
    }[];
} | {
    data: {
        _transform: null;
        bezier: null;
        weight: number;
        id: string;
        max: number;
        min: number;
        group: number;
        step: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        min: number;
        weight: number;
        bezier: null;
        id: string;
        max: number;
        step: number;
        _transform: null;
        group: number;
    }[];
} | {
    id: string;
    data: {
        min: number;
        max: number;
        group: number;
        bezier: null;
        weight: number;
        id: string;
        step: number;
        _transform: null;
    }[];
} | {
    id: string;
    data: {
        weight: number;
        group: number;
        bezier: null;
        max: number;
        step: number;
        id: string;
        min: number;
        _transform: null;
    }[];
} | {
    data: {
        id: string;
        _transform: null;
        weight: number;
        step: number;
        bezier: null;
        max: number;
        min: number;
        group: number;
    }[];
    id: string;
} | {
    data: {
        max: number;
        step: number;
        bezier: null;
        id: string;
        group: number;
        _transform: null;
        min: number;
        weight: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        weight: number;
        id: string;
        group: number;
        bezier: null;
        min: number;
        max: number;
        _transform: null;
        step: number;
    }[];
} | {
    id: string;
    data: {
        bezier: null;
        group: number;
        _transform: null;
        max: number;
        weight: number;
        step: number;
        min: number;
        id: string;
    }[];
} | {
    data: {
        weight: number;
        max: number;
        bezier: null;
        min: number;
        group: number;
        _transform: null;
        id: string;
        step: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        group: number;
        min: number;
        max: number;
        bezier: null;
        step: number;
        weight: number;
        _transform: null;
        id: string;
    }[];
} | {
    data: {
        bezier: null;
        step: number;
        max: number;
        group: number;
        weight: number;
        _transform: null;
        id: string;
        min: number;
    }[];
    id: string;
} | {
    data: {
        bezier: null;
        max: number;
        weight: number;
        _transform: null;
        step: number;
        min: number;
        group: number;
        id: string;
    }[];
    id: string;
} | {
    data: {
        _transform: null;
        min: number;
        weight: number;
        max: number;
        group: number;
        bezier: null;
        id: string;
        step: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        step: number;
        id: string;
        min: number;
        bezier: null;
        group: number;
        max: number;
        _transform: null;
        weight: number;
    }[];
} | {
    data: {
        _transform: null;
        weight: number;
        step: number;
        group: number;
        max: number;
        bezier: null;
        id: string;
        min: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        max: number;
        weight: number;
        id: string;
        group: number;
        bezier: null;
        step: number;
        min: number;
        _transform: null;
    }[];
} | {
    id: string;
    data: {
        min: number;
        group: number;
        _transform: null;
        weight: number;
        bezier: null;
        max: number;
        step: number;
        id: string;
    }[];
} | {
    data: {
        id: string;
        _transform: null;
        min: number;
        max: number;
        bezier: null;
        group: number;
        weight: number;
        step: number;
    }[];
    id: string;
} | {
    data: {
        bezier: null;
        _transform: null;
        group: number;
        id: string;
        step: number;
        max: number;
        min: number;
        weight: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        max: number;
        weight: number;
        group: number;
        step: number;
        _transform: null;
        bezier: null;
        id: string;
        min: number;
    }[];
} | {
    data: {
        group: number;
        id: string;
        weight: number;
        bezier: null;
        _transform: null;
        min: number;
        max: number;
        step: number;
    }[];
    id: string;
} | {
    data: {
        id: string;
        bezier: null;
        min: number;
        _transform: null;
        weight: number;
        group: number;
        max: number;
        step: number;
    }[];
    id: string;
} | {
    data: {
        group: number;
        id: string;
        max: number;
        _transform: null;
        weight: number;
        min: number;
        step: number;
        bezier: null;
    }[];
    id: string;
} | {
    id: string;
    data: {
        max: number;
        min: number;
        id: string;
        bezier: null;
        step: number;
        _transform: null;
        group: number;
        weight: number;
    }[];
} | {
    id: string;
    data: {
        group: number;
        id: string;
        max: number;
        weight: number;
        step: number;
        min: number;
        bezier: null;
        _transform: null;
    }[];
} | {
    id: string;
    data: {
        max: number;
        weight: number;
        _transform: null;
        step: number;
        min: number;
        id: string;
        group: number;
        bezier: null;
    }[];
} | {
    data: {
        _transform: null;
        group: number;
        min: number;
        bezier: null;
        id: string;
        max: number;
        step: number;
        weight: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        id: string;
        group: number;
        max: number;
        _transform: null;
        step: number;
        weight: number;
        min: number;
        bezier: null;
    }[];
} | {
    data: {
        group: number;
        min: number;
        bezier: null;
        _transform: null;
        id: string;
        max: number;
        step: number;
        weight: number;
    }[];
    id: string;
} | {
    data: {
        _transform: null;
        step: number;
        weight: number;
        min: number;
        id: string;
        max: number;
        group: number;
        bezier: null;
    }[];
    id: string;
} | {
    data: {
        group: number;
        id: string;
        weight: number;
        bezier: null;
        max: number;
        step: number;
        min: number;
        _transform: null;
    }[];
    id: string;
} | {
    id: string;
    data: {
        id: string;
        min: number;
        group: number;
        max: number;
        step: number;
        weight: number;
        bezier: null;
        _transform: null;
    }[];
} | {
    id: string;
    data: {
        weight: number;
        min: number;
        step: number;
        max: number;
        bezier: null;
        id: string;
        _transform: null;
        group: number;
    }[];
} | {
    data: {
        max: number;
        weight: number;
        step: number;
        min: number;
        group: number;
        id: string;
        bezier: null;
        _transform: null;
    }[];
    id: string;
} | {
    id: string;
    data: {
        _transform: null;
        step: number;
        id: string;
        bezier: null;
        min: number;
        weight: number;
        max: number;
        group: number;
    }[];
} | {
    id: string;
    data: {
        group: number;
        id: string;
        min: number;
        bezier: null;
        weight: number;
        step: number;
        _transform: null;
        max: number;
    }[];
} | {
    id: string;
    data: {
        bezier: null;
        min: number;
        id: string;
        _transform: null;
        group: number;
        weight: number;
        step: number;
        max: number;
    }[];
} | {
    id: string;
    data: {
        bezier: null;
        weight: number;
        group: number;
        _transform: null;
        min: number;
        max: number;
        id: string;
        step: number;
    }[];
} | {
    data: {
        step: number;
        _transform: null;
        min: number;
        id: string;
        group: number;
        weight: number;
        bezier: null;
        max: number;
    }[];
    id: string;
} | {
    data: {
        id: string;
        step: number;
        min: number;
        _transform: null;
        bezier: null;
        group: number;
        weight: number;
        max: number;
    }[];
    id: string;
} | {
    data: {
        id: string;
        min: number;
        bezier: null;
        max: number;
        group: number;
        _transform: null;
        weight: number;
        step: number;
    }[];
    id: string;
} | {
    data: {
        _transform: null;
        step: number;
        min: number;
        group: number;
        weight: number;
        bezier: null;
        id: string;
        max: number;
    }[];
    id: string;
} | {
    data: {
        id: string;
        bezier: null;
        group: number;
        max: number;
        _transform: null;
        weight: number;
        min: number;
        step: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        min: number;
        max: number;
        weight: number;
        _transform: null;
        id: string;
        group: number;
        step: number;
        bezier: null;
    }[];
} | {
    id: string;
    data: {
        weight: number;
        max: number;
        step: number;
        bezier: null;
        min: number;
        _transform: null;
        id: string;
        group: number;
    }[];
} | {
    id: string;
    data: {
        id: string;
        min: number;
        group: number;
        max: number;
        bezier: null;
        _transform: null;
        step: number;
        weight: number;
    }[];
} | {
    id: string;
    data: {
        min: number;
        id: string;
        weight: number;
        group: number;
        _transform: null;
        max: number;
        step: number;
        bezier: null;
    }[];
} | {
    data: {
        bezier: null;
        step: number;
        weight: number;
        min: number;
        _transform: null;
        max: number;
        group: number;
        id: string;
    }[];
    id: string;
} | {
    data: {
        step: number;
        _transform: null;
        max: number;
        weight: number;
        bezier: null;
        id: string;
        min: number;
        group: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        bezier: null;
        id: string;
        _transform: null;
        min: number;
        group: number;
        max: number;
        step: number;
        weight: number;
    }[];
} | {
    data: {
        step: number;
        id: string;
        group: number;
        weight: number;
        max: number;
        min: number;
        bezier: null;
        _transform: null;
    }[];
    id: string;
} | {
    id: string;
    data: {
        group: number;
        _transform: null;
        step: number;
        bezier: null;
        min: number;
        weight: number;
        id: string;
        max: number;
    }[];
} | {
    data: {
        _transform: null;
        bezier: null;
        weight: number;
        max: number;
        step: number;
        id: string;
        min: number;
        group: number;
    }[];
    id: string;
} | {
    data: {
        id: string;
        weight: number;
        max: number;
        _transform: null;
        min: number;
        group: number;
        bezier: null;
        step: number;
    }[];
    id: string;
} | {
    data: {
        _transform: null;
        bezier: null;
        min: number;
        max: number;
        step: number;
        group: number;
        id: string;
        weight: number;
    }[];
    id: string;
} | {
    data: {
        _transform: null;
        min: number;
        step: number;
        max: number;
        weight: number;
        group: number;
        id: string;
        bezier: null;
    }[];
    id: string;
} | {
    id: string;
    data: {
        step: number;
        id: string;
        group: number;
        bezier: null;
        _transform: null;
        min: number;
        weight: number;
        max: number;
    }[];
} | {
    id: string;
    data: {
        min: number;
        group: number;
        weight: number;
        step: number;
        bezier: null;
        id: string;
        _transform: null;
        max: number;
    }[];
} | {
    id: string;
    data: {
        bezier: null;
        _transform: null;
        weight: number;
        min: number;
        max: number;
        step: number;
        group: number;
        id: string;
    }[];
} | {
    data: {
        weight: number;
        group: number;
        id: string;
        _transform: null;
        max: number;
        min: number;
        bezier: null;
        step: number;
    }[];
    id: string;
} | {
    data: {
        id: string;
        _transform: null;
        min: number;
        weight: number;
        bezier: null;
        max: number;
        group: number;
        step: number;
    }[];
    id: string;
} | {
    data: {
        max: number;
        id: string;
        bezier: null;
        weight: number;
        step: number;
        min: number;
        group: number;
        _transform: null;
    }[];
    id: string;
} | {
    data: {
        group: number;
        weight: number;
        min: number;
        step: number;
        bezier: null;
        id: string;
        max: number;
        _transform: null;
    }[];
    id: string;
} | {
    id: string;
    data: {
        _transform: null;
        weight: number;
        group: number;
        bezier: null;
        step: number;
        max: number;
        id: string;
        min: number;
    }[];
} | {
    data: {
        max: number;
        step: number;
        _transform: null;
        min: number;
        weight: number;
        group: number;
        id: string;
        bezier: null;
    }[];
    id: string;
} | {
    id: string;
    data: {
        _transform: null;
        max: number;
        weight: number;
        min: number;
        id: string;
        group: number;
        bezier: null;
        step: number;
    }[];
} | {
    data: {
        min: number;
        bezier: null;
        _transform: null;
        id: string;
        group: number;
        max: number;
        weight: number;
        step: number;
    }[];
    id: string;
} | {
    data: {
        step: number;
        group: number;
        max: number;
        _transform: null;
        min: number;
        bezier: null;
        id: string;
        weight: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        group: number;
        id: string;
        bezier: null;
        _transform: null;
        max: number;
        weight: number;
        step: number;
        min: number;
    }[];
} | {
    id: string;
    data: {
        bezier: null;
        max: number;
        group: number;
        _transform: null;
        weight: number;
        id: string;
        step: number;
        min: number;
    }[];
} | {
    id: string;
    data: {
        max: number;
        min: number;
        step: number;
        group: number;
        id: string;
        weight: number;
        bezier: null;
        _transform: null;
    }[];
} | {
    data: {
        step: number;
        group: number;
        max: number;
        id: string;
        bezier: null;
        _transform: null;
        min: number;
        weight: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        bezier: null;
        step: number;
        id: string;
        _transform: null;
        group: number;
        max: number;
        weight: number;
        min: number;
    }[];
} | {
    data: {
        max: number;
        step: number;
        bezier: null;
        _transform: null;
        weight: number;
        group: number;
        min: number;
        id: string;
    }[];
    id: string;
} | {
    id: string;
    data: {
        bezier: null;
        _transform: null;
        id: string;
        weight: number;
        min: number;
        group: number;
        max: number;
        step: number;
    }[];
} | {
    data: {
        step: number;
        bezier: null;
        group: number;
        _transform: null;
        min: number;
        id: string;
        max: number;
        weight: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        id: string;
        min: number;
        step: number;
        weight: number;
        max: number;
        group: number;
        bezier: null;
        _transform: null;
    }[];
} | {
    id: string;
    data: {
        weight: number;
        min: number;
        id: string;
        bezier: null;
        _transform: null;
        max: number;
        group: number;
        step: number;
    }[];
} | {
    id: string;
    data: {
        bezier: null;
        max: number;
        step: number;
        weight: number;
        group: number;
        id: string;
        _transform: null;
        min: number;
    }[];
} | {
    data: {
        id: string;
        _transform: null;
        step: number;
        min: number;
        weight: number;
        group: number;
        bezier: null;
        max: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        max: number;
        step: number;
        id: string;
        weight: number;
        group: number;
        _transform: null;
        bezier: null;
        min: number;
    }[];
} | {
    data: {
        bezier: null;
        weight: number;
        min: number;
        _transform: null;
        id: string;
        max: number;
        group: number;
        step: number;
    }[];
    id: string;
} | {
    data: {
        min: number;
        step: number;
        id: string;
        group: number;
        weight: number;
        bezier: null;
        max: number;
        _transform: null;
    }[];
    id: string;
} | {
    id: string;
    data: {
        group: number;
        bezier: null;
        max: number;
        id: string;
        weight: number;
        _transform: null;
        step: number;
        min: number;
    }[];
} | {
    data: {
        group: number;
        _transform: null;
        id: string;
        max: number;
        step: number;
        bezier: null;
        weight: number;
        min: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        step: number;
        group: number;
        weight: number;
        max: number;
        bezier: null;
        id: string;
        _transform: null;
        min: number;
    }[];
} | {
    id: string;
    data: {
        id: string;
        min: number;
        weight: number;
        bezier: null;
        max: number;
        group: number;
        _transform: null;
        step: number;
    }[];
} | {
    data: {
        max: number;
        step: number;
        group: number;
        bezier: null;
        id: string;
        _transform: null;
        min: number;
        weight: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        group: number;
        id: string;
        _transform: null;
        step: number;
        min: number;
        bezier: null;
        weight: number;
        max: number;
    }[];
} | {
    data: {
        bezier: null;
        _transform: null;
        step: number;
        min: number;
        max: number;
        weight: number;
        group: number;
        id: string;
    }[];
    id: string;
} | {
    id: string;
    data: {
        max: number;
        id: string;
        _transform: null;
        min: number;
        step: number;
        weight: number;
        bezier: null;
        group: number;
    }[];
} | {
    id: string;
    data: {
        id: string;
        bezier: null;
        _transform: null;
        step: number;
        group: number;
        max: number;
        weight: number;
        min: number;
    }[];
} | {
    id: string;
    data: {
        bezier: null;
        max: number;
        _transform: null;
        group: number;
        weight: number;
        id: string;
        min: number;
        step: number;
    }[];
} | {
    id: string;
    data: {
        step: number;
        id: string;
        _transform: null;
        max: number;
        weight: number;
        group: number;
        bezier: null;
        min: number;
    }[];
} | {
    id: string;
    data: {
        max: number;
        bezier: null;
        weight: number;
        id: string;
        group: number;
        _transform: null;
        step: number;
        min: number;
    }[];
} | {
    data: {
        group: number;
        min: number;
        max: number;
        bezier: null;
        id: string;
        weight: number;
        step: number;
        _transform: null;
    }[];
    id: string;
} | {
    id: string;
    data: {
        group: number;
        id: string;
        step: number;
        weight: number;
        bezier: null;
        max: number;
        min: number;
        _transform: null;
    }[];
} | {
    id: string;
    data: {
        step: number;
        bezier: null;
        weight: number;
        min: number;
        _transform: null;
        id: string;
        max: number;
        group: number;
    }[];
} | {
    data: {
        min: number;
        max: number;
        _transform: null;
        step: number;
        weight: number;
        group: number;
        bezier: null;
        id: string;
    }[];
    id: string;
} | {
    id: string;
    data: {
        group: number;
        bezier: null;
        min: number;
        max: number;
        _transform: null;
        weight: number;
        step: number;
        id: string;
    }[];
} | {
    data: {
        id: string;
        bezier: null;
        max: number;
        step: number;
        weight: number;
        group: number;
        _transform: null;
        min: number;
    }[];
    id: string;
} | {
    data: {
        group: number;
        max: number;
        id: string;
        min: number;
        bezier: null;
        step: number;
        _transform: null;
        weight: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        _transform: null;
        id: string;
        group: number;
        bezier: null;
        min: number;
        max: number;
        step: number;
        weight: number;
    }[];
} | {
    id: string;
    data: {
        step: number;
        max: number;
        id: string;
        _transform: null;
        min: number;
        group: number;
        bezier: null;
        weight: number;
    }[];
} | {
    id: string;
    data: {
        group: number;
        _transform: null;
        id: string;
        min: number;
        step: number;
        max: number;
        weight: number;
        bezier: null;
    }[];
} | {
    id: string;
    data: {
        min: number;
        bezier: null;
        max: number;
        group: number;
        id: string;
        step: number;
        weight: number;
        _transform: null;
    }[];
} | {
    data: {
        max: number;
        step: number;
        bezier: null;
        group: number;
        id: string;
        weight: number;
        _transform: null;
        min: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        group: number;
        bezier: null;
        id: string;
        max: number;
        weight: number;
        _transform: null;
        min: number;
        step: number;
    }[];
} | {
    data: {
        bezier: null;
        id: string;
        max: number;
        group: number;
        min: number;
        step: number;
        _transform: null;
        weight: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        step: number;
        min: number;
        weight: number;
        bezier: null;
        _transform: null;
        id: string;
        max: number;
        group: number;
    }[];
} | {
    id: string;
    data: {
        group: number;
        bezier: null;
        min: number;
        _transform: null;
        max: number;
        step: number;
        id: string;
        weight: number;
    }[];
} | {
    data: {
        id: string;
        max: number;
        min: number;
        bezier: null;
        weight: number;
        step: number;
        _transform: null;
        group: number;
    }[];
    id: string;
} | {
    data: {
        step: number;
        group: number;
        min: number;
        weight: number;
        bezier: null;
        id: string;
        max: number;
        _transform: null;
    }[];
    id: string;
} | {
    data: {
        group: number;
        max: number;
        min: number;
        id: string;
        _transform: null;
        weight: number;
        bezier: null;
        step: number;
    }[];
    id: string;
} | {
    data: {
        bezier: null;
        id: string;
        step: number;
        min: number;
        max: number;
        group: number;
        _transform: null;
        weight: number;
    }[];
    id: string;
} | {
    data: {
        _transform: null;
        group: number;
        step: number;
        id: string;
        min: number;
        bezier: null;
        weight: number;
        max: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        min: number;
        _transform: null;
        max: number;
        id: string;
        step: number;
        bezier: null;
        weight: number;
        group: number;
    }[];
} | {
    id: string;
    data: {
        min: number;
        weight: number;
        step: number;
        id: null;
        group: number;
        bezier: null;
        max: number;
        _transform: null;
    }[];
} | {
    data: {
        bezier: null;
        weight: number;
        max: number;
        group: number;
        step: number;
        id: null;
        _transform: null;
        min: number;
    }[];
    id: string;
} | {
    data: {
        id: null;
        group: number;
        step: number;
        min: number;
        weight: number;
        _transform: null;
        bezier: null;
        max: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        _transform: null;
        group: number;
        bezier: null;
        weight: number;
        min: number;
        max: number;
        step: number;
        id: null;
    }[];
} | {
    id: string;
    data: {
        step: number;
        _transform: null;
        max: number;
        group: number;
        bezier: null;
        id: null;
        weight: number;
        min: number;
    }[];
} | {
    data: {
        bezier: null;
        weight: number;
        _transform: null;
        step: number;
        max: number;
        min: number;
        id: null;
        group: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        id: null;
        min: number;
        step: number;
        max: number;
        bezier: null;
        _transform: null;
        group: number;
        weight: number;
    }[];
} | {
    data: {
        min: number;
        bezier: null;
        max: number;
        _transform: null;
        step: number;
        group: number;
        id: null;
        weight: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        weight: number;
        max: number;
        id: null;
        min: number;
        _transform: null;
        step: number;
        bezier: null;
        group: number;
    }[];
} | {
    data: {
        bezier: null;
        id: null;
        min: number;
        step: number;
        max: number;
        group: number;
        _transform: null;
        weight: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        _transform: null;
        min: number;
        bezier: null;
        max: number;
        weight: number;
        step: number;
        group: number;
        id: null;
    }[];
} | {
    id: string;
    data: {
        weight: number;
        bezier: null;
        step: number;
        min: number;
        max: number;
        group: number;
        id: null;
        _transform: null;
    }[];
} | {
    data: {
        max: number;
        group: number;
        bezier: null;
        min: number;
        weight: number;
        id: null;
        _transform: null;
        step: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        group: number;
        step: number;
        weight: number;
        bezier: null;
        min: number;
        id: null;
        _transform: null;
        max: number;
    }[];
} | {
    id: string;
    data: {
        step: number;
        weight: number;
        group: number;
        bezier: null;
        id: null;
        _transform: null;
        min: number;
        max: number;
    }[];
} | {
    id: string;
    data: {
        id: null;
        max: number;
        step: number;
        weight: number;
        bezier: null;
        min: number;
        _transform: null;
        group: number;
    }[];
} | {
    id: string;
    data: {
        bezier: null;
        id: null;
        step: number;
        max: number;
        group: number;
        _transform: null;
        min: number;
        weight: number;
    }[];
} | {
    data: {
        id: null;
        bezier: null;
        _transform: null;
        min: number;
        group: number;
        weight: number;
        max: number;
        step: number;
    }[];
    id: string;
} | {
    data: {
        bezier: null;
        min: number;
        max: number;
        group: number;
        step: number;
        weight: number;
        id: null;
        _transform: null;
    }[];
    id: string;
} | {
    id: string;
    data: {
        max: number;
        _transform: null;
        min: number;
        step: number;
        weight: number;
        id: null;
        group: number;
        bezier: null;
    }[];
} | {
    id: string;
    data: {
        bezier: null;
        _transform: null;
        step: number;
        weight: number;
        id: null;
        group: number;
        min: number;
        max: number;
    }[];
} | {
    id: string;
    data: {
        weight: number;
        _transform: null;
        max: number;
        bezier: null;
        group: number;
        min: number;
        id: null;
        step: number;
    }[];
} | {
    data: {
        bezier: null;
        group: number;
        min: number;
        step: number;
        id: null;
        _transform: null;
        weight: number;
        max: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        group: number;
        bezier: null;
        _transform: null;
        step: number;
        weight: number;
        id: null;
        max: number;
        min: number;
    }[];
} | {
    data: {
        id: null;
        group: number;
        bezier: null;
        weight: number;
        step: number;
        min: number;
        _transform: null;
        max: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        id: null;
        bezier: null;
        _transform: null;
        group: number;
        min: number;
        max: number;
        step: number;
        weight: number;
    }[];
} | {
    id: string;
    data: {
        group: number;
        min: number;
        bezier: null;
        id: null;
        max: number;
        step: number;
        weight: number;
        _transform: null;
    }[];
} | {
    id: string;
    data: {
        id: null;
        _transform: null;
        weight: number;
        step: number;
        bezier: null;
        max: number;
        group: number;
        min: number;
    }[];
} | {
    data: {
        _transform: null;
        group: number;
        min: number;
        id: null;
        bezier: null;
        max: number;
        weight: number;
        step: number;
    }[];
    id: string;
} | {
    data: {
        bezier: null;
        _transform: null;
        min: number;
        weight: number;
        id: null;
        step: number;
        group: number;
        max: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        group: number;
        step: number;
        min: number;
        weight: number;
        id: null;
        max: number;
        bezier: null;
        _transform: null;
    }[];
} | {
    id: string;
    data: {
        _transform: null;
        min: number;
        group: number;
        id: null;
        max: number;
        weight: number;
        bezier: null;
        step: number;
    }[];
} | {
    data: {
        group: number;
        _transform: null;
        bezier: null;
        step: number;
        weight: number;
        max: number;
        min: number;
        id: null;
    }[];
    id: string;
} | {
    id: string;
    data: {
        step: number;
        _transform: null;
        max: number;
        weight: number;
        min: number;
        id: null;
        group: number;
        bezier: null;
    }[];
} | {
    id: string;
    data: {
        group: number;
        max: number;
        _transform: null;
        id: null;
        step: number;
        bezier: null;
        min: number;
        weight: number;
    }[];
} | {
    id: string;
    data: {
        group: number;
        id: null;
        bezier: null;
        step: number;
        max: number;
        min: number;
        _transform: null;
        weight: number;
    }[];
} | {
    id: string;
    data: {
        group: number;
        bezier: null;
        min: number;
        max: number;
        _transform: null;
        id: null;
        weight: number;
        step: number;
    }[];
} | {
    data: {
        _transform: null;
        weight: number;
        bezier: null;
        group: number;
        id: null;
        max: number;
        step: number;
        min: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        max: number;
        bezier: null;
        min: number;
        id: null;
        _transform: null;
        weight: number;
        group: number;
        step: number;
    }[];
} | {
    data: {
        bezier: null;
        _transform: null;
        min: number;
        group: number;
        max: number;
        weight: number;
        id: string;
        step: number;
    }[];
    id: string;
} | {
    data: {
        group: number;
        bezier: null;
        max: number;
        weight: number;
        step: number;
        id: string;
        _transform: null;
        min: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        _transform: null;
        group: number;
        step: number;
        max: number;
        bezier: null;
        min: number;
        weight: number;
        id: string;
    }[];
} | {
    id: string;
    data: {
        group: number;
        max: number;
        _transform: null;
        min: number;
        step: number;
        id: string;
        bezier: null;
        weight: number;
    }[];
} | {
    data: {
        _transform: null;
        max: number;
        weight: number;
        group: number;
        bezier: null;
        id: string;
        min: number;
        step: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        id: string;
        min: number;
        max: number;
        _transform: null;
        group: number;
        step: number;
        bezier: null;
        weight: number;
    }[];
} | {
    id: string;
    data: {
        group: number;
        min: number;
        weight: number;
        id: string;
        max: number;
        bezier: null;
        _transform: null;
        step: number;
    }[];
} | {
    data: {
        max: number;
        min: number;
        bezier: null;
        id: string;
        _transform: null;
        weight: number;
        step: number;
        group: number;
    }[];
    id: string;
} | {
    data: {
        weight: number;
        min: number;
        id: string;
        step: number;
        group: number;
        _transform: null;
        max: number;
        bezier: null;
    }[];
    id: string;
} | {
    data: {
        weight: number;
        id: string;
        min: number;
        step: number;
        _transform: null;
        group: number;
        bezier: null;
        max: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        max: number;
        bezier: null;
        id: null;
        group: number;
        _transform: null;
        min: number;
        weight: number;
        step: number;
    }[];
} | {
    id: string;
    data: {
        group: number;
        bezier: null;
        id: null;
        max: number;
        weight: number;
        _transform: null;
        min: number;
        step: number;
    }[];
} | {
    id: string;
    data: {
        step: number;
        max: number;
        bezier: null;
        id: null;
        _transform: null;
        min: number;
        weight: number;
        group: number;
    }[];
} | {
    data: {
        bezier: null;
        _transform: null;
        max: number;
        id: null;
        weight: number;
        min: number;
        step: number;
        group: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        _transform: null;
        min: number;
        max: number;
        group: number;
        id: null;
        step: number;
        bezier: null;
        weight: number;
    }[];
} | {
    id: string;
    data: {
        weight: number;
        max: number;
        bezier: null;
        id: null;
        min: number;
        group: number;
        _transform: null;
        step: number;
    }[];
} | {
    data: {
        bezier: null;
        _transform: null;
        min: number;
        max: number;
        id: null;
        step: number;
        weight: number;
        group: number;
    }[];
    id: string;
} | {
    data: {
        min: number;
        weight: number;
        id: null;
        step: number;
        group: number;
        _transform: null;
        bezier: null;
        max: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        _transform: null;
        id: null;
        bezier: null;
        max: number;
        group: number;
        step: number;
        weight: number;
        min: number;
    }[];
} | {
    id: string;
    data: {
        id: null;
        max: number;
        step: number;
        min: number;
        group: number;
        _transform: null;
        bezier: null;
        weight: number;
    }[];
} | {
    data: {
        _transform: null;
        bezier: null;
        weight: number;
        group: number;
        step: number;
        id: null;
        max: number;
        min: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        min: number;
        max: number;
        group: number;
        _transform: null;
        step: number;
        id: null;
        bezier: null;
        weight: number;
    }[];
} | {
    data: {
        _transform: null;
        id: null;
        group: number;
        step: number;
        bezier: null;
        weight: number;
        min: number;
        max: number;
    }[];
    id: string;
} | {
    data: {
        weight: number;
        _transform: null;
        id: null;
        step: number;
        group: number;
        max: number;
        bezier: null;
        min: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        group: number;
        _transform: null;
        id: null;
        bezier: null;
        max: number;
        min: number;
        weight: number;
        step: number;
    }[];
} | {
    id: string;
    data: {
        bezier: null;
        id: null;
        _transform: null;
        group: number;
        min: number;
        max: number;
        weight: number;
        step: number;
    }[];
} | {
    id: string;
    data: {
        max: number;
        weight: number;
        _transform: null;
        group: number;
        bezier: null;
        id: null;
        step: number;
        min: number;
    }[];
} | {
    id: string;
    data: {
        bezier: null;
        min: number;
        step: number;
        max: number;
        group: number;
        _transform: null;
        weight: number;
        id: null;
    }[];
} | {
    data: {
        id: null;
        weight: number;
        _transform: null;
        max: number;
        group: number;
        bezier: null;
        min: number;
        step: number;
    }[];
    id: string;
} | {
    data: {
        min: number;
        max: number;
        group: number;
        weight: number;
        step: number;
        _transform: null;
        bezier: null;
        id: null;
    }[];
    id: string;
} | {
    id: string;
    data: {
        group: number;
        weight: number;
        _transform: null;
        min: number;
        id: null;
        bezier: null;
        max: number;
        step: number;
    }[];
} | {
    id: string;
    data: {
        min: number;
        _transform: null;
        max: number;
        group: number;
        bezier: null;
        step: number;
        weight: number;
        id: null;
    }[];
} | {
    data: {
        step: number;
        _transform: null;
        max: number;
        weight: number;
        bezier: null;
        min: number;
        group: number;
        id: null;
    }[];
    id: string;
} | {
    id: string;
    data: {
        step: number;
        id: null;
        group: number;
        weight: number;
        min: number;
        max: number;
        bezier: null;
        _transform: null;
    }[];
} | {
    id: string;
    data: {
        min: number;
        step: number;
        bezier: null;
        id: null;
        max: number;
        _transform: null;
        group: number;
        weight: number;
    }[];
} | {
    data: {
        _transform: null;
        step: number;
        weight: number;
        id: null;
        min: number;
        group: number;
        bezier: null;
        max: number;
    }[];
    id: string;
} | {
    data: {
        max: number;
        step: number;
        bezier: null;
        _transform: null;
        min: number;
        id: null;
        group: number;
        weight: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        bezier: null;
        id: null;
        step: number;
        max: number;
        min: number;
        _transform: null;
        weight: number;
        group: number;
    }[];
} | {
    data: {
        bezier: null;
        id: null;
        min: number;
        weight: number;
        group: number;
        _transform: null;
        step: number;
        max: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        bezier: null;
        _transform: null;
        min: number;
        id: null;
        step: number;
        max: number;
        group: number;
        weight: number;
    }[];
} | {
    data: {
        weight: number;
        bezier: null;
        group: number;
        id: null;
        max: number;
        _transform: null;
        min: number;
        step: number;
    }[];
    id: string;
} | {
    data: {
        group: number;
        _transform: null;
        id: null;
        bezier: null;
        max: number;
        weight: number;
        step: number;
        min: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        _transform: null;
        max: number;
        id: null;
        min: number;
        bezier: null;
        group: number;
        weight: number;
        step: number;
    }[];
} | {
    id: string;
    data: {
        bezier: null;
        group: number;
        weight: number;
        step: number;
        max: number;
        id: null;
        min: number;
        _transform: null;
    }[];
} | {
    id: string;
    data: {
        weight: number;
        step: number;
        min: number;
        bezier: null;
        group: number;
        id: null;
        _transform: null;
        max: number;
    }[];
} | {
    id: string;
    data: {
        bezier: null;
        _transform: null;
        min: number;
        max: number;
        group: number;
        id: null;
        weight: number;
        step: number;
    }[];
} | {
    id: string;
    data: {
        id: null;
        max: number;
        _transform: null;
        bezier: null;
        min: number;
        step: number;
        group: number;
        weight: number;
    }[];
} | {
    id: string;
    data: {
        min: number;
        step: number;
        bezier: null;
        max: number;
        _transform: null;
        id: null;
        group: number;
        weight: number;
    }[];
} | {
    data: {
        group: number;
        weight: number;
        id: null;
        min: number;
        max: number;
        _transform: null;
        bezier: null;
        step: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        bezier: null;
        max: number;
        _transform: null;
        group: number;
        id: string;
        step: number;
        min: number;
        weight: number;
    }[];
} | {
    data: {
        _transform: null;
        group: number;
        max: number;
        weight: number;
        bezier: null;
        id: string;
        min: number;
        step: number;
    }[];
    id: string;
} | {
    data: {
        step: number;
        min: number;
        bezier: null;
        id: string;
        max: number;
        _transform: null;
        weight: number;
        group: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        bezier: null;
        min: number;
        max: number;
        id: string;
        _transform: null;
        group: number;
        step: number;
        weight: number;
    }[];
} | {
    data: {
        id: string;
        _transform: null;
        min: number;
        group: number;
        weight: number;
        max: number;
        bezier: null;
        step: number;
    }[];
    id: string;
} | {
    data: {
        group: number;
        _transform: null;
        min: number;
        weight: number;
        bezier: null;
        max: number;
        step: number;
        id: string;
    }[];
    id: string;
} | {
    id: string;
    data: {
        _transform: null;
        id: string;
        group: number;
        min: number;
        max: number;
        weight: number;
        step: number;
        bezier: null;
    }[];
} | {
    id: string;
    data: {
        bezier: null;
        max: number;
        min: number;
        step: number;
        group: number;
        weight: number;
        _transform: null;
        id: string;
    }[];
} | {
    id: string;
    data: {
        min: number;
        step: number;
        bezier: null;
        weight: number;
        id: string;
        _transform: null;
        max: number;
        group: number;
    }[];
} | {
    data: {
        group: number;
        _transform: null;
        bezier: null;
        id: string;
        min: number;
        max: number;
        step: number;
        weight: number;
    }[];
    id: string;
} | {
    data: {
        step: number;
        weight: number;
        _transform: null;
        max: number;
        bezier: null;
        min: number;
        id: string;
        group: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        _transform: null;
        bezier: null;
        id: string;
        max: number;
        step: number;
        group: number;
        min: number;
        weight: number;
    }[];
} | {
    data: {
        max: number;
        min: number;
        step: number;
        weight: number;
        group: number;
        _transform: null;
        id: string;
        bezier: null;
    }[];
    id: string;
} | {
    data: {
        id: string;
        group: number;
        weight: number;
        min: number;
        bezier: null;
        max: number;
        _transform: null;
        step: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        id: string;
        min: number;
        bezier: null;
        _transform: null;
        step: number;
        group: number;
        max: number;
        weight: number;
    }[];
} | {
    id: string;
    data: {
        _transform: null;
        min: number;
        weight: number;
        max: number;
        step: number;
        group: number;
        bezier: null;
        id: string;
    }[];
} | {
    id: string;
    data: {
        max: number;
        step: number;
        group: number;
        _transform: null;
        bezier: null;
        id: string;
        min: number;
        weight: number;
    }[];
} | {
    id: string;
    data: {
        _transform: null;
        max: number;
        step: number;
        min: number;
        group: number;
        bezier: null;
        weight: number;
        id: string;
    }[];
} | {
    data: {
        bezier: null;
        min: number;
        max: number;
        id: string;
        group: number;
        _transform: null;
        step: number;
        weight: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        group: number;
        min: number;
        _transform: null;
        max: number;
        step: number;
        weight: number;
        bezier: null;
        id: string;
    }[];
} | {
    id: string;
    data: {
        group: number;
        _transform: null;
        min: number;
        weight: number;
        bezier: null;
        id: string;
        step: number;
        max: number;
    }[];
} | {
    id: string;
    data: {
        group: number;
        min: number;
        _transform: null;
        max: number;
        bezier: null;
        id: string;
        weight: number;
        step: number;
    }[];
} | {
    id: string;
    data: {
        step: number;
        weight: number;
        min: number;
        id: string;
        max: number;
        bezier: null;
        _transform: null;
        group: number;
    }[];
} | {
    id: string;
    data: {
        weight: number;
        min: number;
        _transform: null;
        id: string;
        max: number;
        group: number;
        bezier: null;
        step: number;
    }[];
} | {
    data: {
        bezier: null;
        min: number;
        _transform: null;
        weight: number;
        max: number;
        step: number;
        id: string;
        group: number;
    }[];
    id: string;
} | {
    data: {
        group: number;
        weight: number;
        id: string;
        _transform: null;
        bezier: null;
        min: number;
        max: number;
        step: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        bezier: null;
        max: number;
        id: string;
        _transform: null;
        min: number;
        weight: number;
        group: number;
        step: number;
    }[];
} | {
    id: string;
    data: {
        bezier: null;
        weight: number;
        group: number;
        step: number;
        _transform: null;
        min: number;
        max: number;
        id: string;
    }[];
} | {
    id: string;
    data: {
        min: number;
        step: number;
        max: number;
        bezier: null;
        group: number;
        weight: number;
        id: string;
        _transform: null;
    }[];
} | {
    id: string;
    data: {
        weight: number;
        group: number;
        step: number;
        _transform: null;
        id: string;
        max: number;
        bezier: null;
        min: number;
    }[];
} | {
    id: string;
    data: {
        id: string;
        min: number;
        group: number;
        bezier: null;
        max: number;
        weight: number;
        _transform: null;
        step: number;
    }[];
} | {
    data: {
        group: number;
        id: string;
        max: number;
        weight: number;
        bezier: null;
        _transform: null;
        min: number;
        step: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        _transform: null;
        min: number;
        id: string;
        step: number;
        group: number;
        max: number;
        weight: number;
        bezier: null;
    }[];
} | {
    data: {
        _transform: null;
        weight: number;
        id: string;
        min: number;
        max: number;
        group: number;
        step: number;
        bezier: null;
    }[];
    id: string;
} | {
    data: {
        bezier: null;
        min: number;
        _transform: null;
        group: number;
        max: number;
        weight: number;
        id: string;
        step: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        _transform: null;
        id: string;
        group: number;
        min: number;
        max: number;
        weight: number;
        bezier: null;
        step: number;
    }[];
} | {
    data: {
        bezier: null;
        max: number;
        id: string;
        _transform: null;
        step: number;
        weight: number;
        min: number;
        group: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        group: number;
        max: number;
        id: string;
        weight: number;
        min: number;
        step: number;
        _transform: null;
        bezier: null;
    }[];
} | {
    data: {
        id: string;
        max: number;
        group: number;
        step: number;
        weight: number;
        _transform: null;
        min: number;
        bezier: null;
    }[];
    id: string;
} | {
    id: string;
    data: {
        group: number;
        min: number;
        step: number;
        _transform: null;
        bezier: null;
        weight: number;
        id: string;
        max: number;
    }[];
} | {
    id: string;
    data: {
        _transform: null;
        id: string;
        min: number;
        group: number;
        bezier: null;
        max: number;
        step: number;
        weight: number;
    }[];
} | {
    id: string;
    data: {
        group: number;
        step: number;
        bezier: null;
        id: string;
        min: number;
        max: number;
        _transform: null;
        weight: number;
    }[];
} | {
    data: ({
        id: string;
        group: number;
        step: number;
        bezier: null;
        max: number;
        _transform: null;
        min: number;
        weight: number;
    } | {
        group: number;
        step: number;
        min: number;
        bezier: null;
        weight: number;
        _transform: null;
        id: null;
        max: number;
    })[];
    id: string;
} | {
    id: string;
    data: {
        min: number;
        max: number;
        _transform: null;
        bezier: null;
        step: number;
        weight: number;
        group: number;
        id: string;
    }[];
} | {
    data: ({
        step: number;
        weight: number;
        id: string;
        _transform: null;
        max: number;
        min: number;
        group: number;
        bezier: null;
        dynamicPoolId?: undefined;
    } | {
        weight: number;
        bezier: null;
        id: string;
        dynamicPoolId: string;
        max: number;
        step: number;
        group: number;
        _transform: null;
        min: number;
    } | {
        bezier: null;
        _transform: null;
        step: number;
        min: number;
        max: number;
        weight: number;
        id: null;
        group: number;
        dynamicPoolId?: undefined;
    })[];
    id: string;
} | {
    id: string;
    data: {
        min: number;
        weight: number;
        id: string;
        _transform: null;
        max: number;
        step: number;
        group: number;
        bezier: null;
    }[];
} | {
    id: string;
    data: {
        id: string;
        step: number;
        min: number;
        _transform: null;
        bezier: null;
        group: number;
        max: number;
        weight: number;
    }[];
} | {
    id: string;
    data: {
        max: number;
        min: number;
        group: number;
        bezier: null;
        _transform: null;
        step: number;
        weight: number;
        id: string;
    }[];
} | {
    data: {
        min: number;
        group: number;
        step: number;
        bezier: null;
        max: number;
        id: string;
        _transform: null;
        weight: number;
    }[];
    id: string;
} | {
    data: {
        group: number;
        bezier: null;
        id: string;
        _transform: null;
        min: number;
        weight: number;
        step: number;
        max: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        min: number;
        max: number;
        id: string;
        weight: number;
        bezier: null;
        group: number;
        step: number;
        _transform: null;
    }[];
} | {
    data: {
        id: string;
        weight: number;
        step: number;
        bezier: null;
        _transform: null;
        min: number;
        max: number;
        group: number;
    }[];
    id: string;
} | {
    data: {
        bezier: null;
        id: string;
        min: number;
        step: number;
        max: number;
        group: number;
        weight: number;
        _transform: null;
    }[];
    id: string;
} | {
    id: string;
    data: ({
        id: string;
        _transform: null;
        min: number;
        group: number;
        bezier: null;
        weight: number;
        step: number;
        max: number;
        dynamicPoolId?: undefined;
    } | {
        min: number;
        dynamicPoolId: string;
        weight: number;
        bezier: null;
        group: number;
        id: string;
        _transform: null;
        max: number;
        step: number;
    })[];
} | {
    data: ({
        id: string;
        bezier: null;
        step: number;
        dynamicPoolId: string;
        group: number;
        max: number;
        weight: number;
        _transform: null;
        min: number;
    } | {
        weight: number;
        bezier: null;
        id: string;
        _transform: null;
        max: number;
        group: number;
        min: number;
        step: number;
        dynamicPoolId?: undefined;
    })[];
    id: string;
} | {
    id: string;
    data: ({
        id: string;
        _transform: null;
        max: number;
        weight: number;
        group: number;
        bezier: null;
        min: number;
        step: number;
        dynamicPoolId: string;
    } | {
        step: number;
        bezier: null;
        _transform: null;
        min: number;
        id: string;
        max: number;
        weight: number;
        group: number;
        dynamicPoolId?: undefined;
    })[];
} | {
    id: string;
    data: {
        min: number;
        step: number;
        id: string;
        bezier: null;
        max: number;
        _transform: null;
        weight: number;
        group: number;
    }[];
} | {
    id: string;
    data: {
        id: string;
        max: number;
        bezier: null;
        min: number;
        step: number;
        weight: number;
        group: number;
        _transform: null;
    }[];
} | {
    data: ({
        min: number;
        _transform: null;
        step: number;
        bezier: null;
        group: number;
        weight: number;
        id: string;
        max: number;
    } | {
        min: number;
        weight: number;
        group: number;
        id: null;
        step: number;
        _transform: null;
        bezier: null;
        max: number;
    })[];
    id: string;
} | {
    id: string;
    data: ({
        weight: number;
        max: number;
        id: string;
        _transform: null;
        bezier: null;
        group: number;
        min: number;
        step: number;
    } | {
        group: number;
        _transform: null;
        bezier: null;
        id: null;
        weight: number;
        min: number;
        max: number;
        step: number;
    })[];
} | {
    data: ({
        id: string;
        weight: number;
        min: number;
        step: number;
        group: number;
        _transform: null;
        max: number;
        bezier: null;
    } | {
        bezier: null;
        weight: number;
        group: number;
        id: null;
        step: number;
        _transform: null;
        min: number;
        max: number;
    })[];
    id: string;
} | {
    data: {
        id: string;
        _transform: null;
        min: number;
        step: number;
        max: number;
        bezier: null;
        weight: number;
        group: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        min: number;
        step: number;
        _transform: null;
        id: string;
        weight: number;
        max: number;
        group: number;
        bezier: null;
    }[];
} | {
    data: {
        bezier: null;
        min: number;
        group: number;
        id: string;
        _transform: null;
        step: number;
        max: number;
        weight: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        weight: number;
        group: number;
        _transform: null;
        max: number;
        step: number;
        id: string;
        bezier: null;
        min: number;
    }[];
} | {
    id: string;
    data: {
        bezier: null;
        id: string;
        weight: number;
        step: number;
        max: number;
        _transform: null;
        min: number;
        group: number;
    }[];
} | {
    id: string;
    data: {
        step: number;
        min: number;
        max: number;
        bezier: null;
        id: string;
        group: number;
        weight: number;
        _transform: null;
    }[];
} | {
    data: {
        weight: number;
        group: number;
        bezier: null;
        max: number;
        min: number;
        _transform: null;
        step: number;
        id: string;
    }[];
    id: string;
} | {
    data: {
        max: number;
        bezier: null;
        group: number;
        id: string;
        step: number;
        min: number;
        _transform: null;
        weight: number;
    }[];
    id: string;
} | {
    data: {
        min: number;
        _transform: null;
        bezier: null;
        weight: number;
        max: number;
        step: number;
        id: string;
        group: number;
    }[];
    id: string;
} | {
    data: {
        min: number;
        step: number;
        id: string;
        _transform: null;
        weight: number;
        max: number;
        group: number;
        bezier: null;
    }[];
    id: string;
} | {
    data: {
        min: number;
        _transform: null;
        id: string;
        max: number;
        group: number;
        weight: number;
        step: number;
        bezier: null;
    }[];
    id: string;
} | {
    id: string;
    data: {
        id: string;
        min: number;
        bezier: null;
        step: number;
        weight: number;
        _transform: null;
        group: number;
        max: number;
    }[];
} | {
    data: {
        group: number;
        max: number;
        weight: number;
        _transform: null;
        step: number;
        min: number;
        bezier: null;
        id: string;
    }[];
    id: string;
} | {
    id: string;
    data: {
        id: string;
        max: number;
        group: number;
        weight: number;
        bezier: null;
        min: number;
        _transform: null;
        step: number;
    }[];
} | {
    data: {
        group: number;
        id: string;
        weight: number;
        bezier: null;
        max: number;
        min: number;
        step: number;
        _transform: null;
    }[];
    id: string;
} | {
    id: string;
    data: {
        weight: number;
        min: number;
        step: number;
        group: number;
        bezier: null;
        max: number;
        _transform: null;
        id: string;
    }[];
} | {
    data: {
        min: number;
        group: number;
        step: number;
        bezier: null;
        _transform: null;
        weight: number;
        max: number;
        id: string;
    }[];
    id: string;
} | {
    data: {
        step: number;
        bezier: null;
        _transform: null;
        id: string;
        min: number;
        max: number;
        group: number;
        weight: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        id: string;
        _transform: null;
        max: number;
        step: number;
        bezier: null;
        min: number;
        group: number;
        weight: number;
    }[];
} | {
    id: string;
    data: {
        weight: number;
        _transform: null;
        id: null;
        min: number;
        max: number;
        bezier: null;
        step: number;
        group: number;
    }[];
} | {
    id: string;
    data: {
        min: number;
        weight: number;
        step: number;
        _transform: null;
        bezier: null;
        id: string;
        max: number;
        group: number;
    }[];
} | {
    data: {
        _transform: null;
        max: number;
        bezier: null;
        id: string;
        group: number;
        min: number;
        weight: number;
        step: number;
    }[];
    id: string;
} | {
    data: {
        step: number;
        _transform: null;
        min: number;
        bezier: null;
        id: string;
        group: number;
        max: number;
        weight: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        bezier: null;
        weight: number;
        _transform: null;
        step: number;
        max: number;
        group: number;
        min: number;
        id: string;
    }[];
} | {
    id: string;
    data: {
        id: string;
        bezier: null;
        _transform: null;
        weight: number;
        max: number;
        step: number;
        group: number;
        min: number;
    }[];
} | {
    data: {
        group: number;
        min: number;
        max: number;
        bezier: null;
        step: number;
        weight: number;
        _transform: null;
        id: string;
        dynamicPoolId: string;
    }[];
    id: string;
} | {
    id: string;
    data: {
        max: number;
        weight: number;
        min: number;
        group: number;
        id: string;
        bezier: null;
        _transform: null;
        step: number;
    }[];
} | {
    id: string;
    data: {
        id: string;
        _transform: null;
        max: number;
        bezier: null;
        step: number;
        weight: number;
        group: number;
        min: number;
    }[];
} | {
    id: string;
    data: {
        _transform: null;
        max: number;
        group: number;
        bezier: null;
        id: string;
        min: number;
        weight: number;
        step: number;
    }[];
} | {
    data: {
        group: number;
        min: number;
        id: string;
        max: number;
        weight: number;
        bezier: null;
        _transform: null;
        step: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        step: number;
        max: number;
        weight: number;
        group: number;
        id: string;
        min: number;
        _transform: null;
        bezier: null;
    }[];
} | {
    id: string;
    data: {
        min: number;
        max: number;
        step: number;
        weight: number;
        group: number;
        id: string;
        bezier: null;
        _transform: null;
    }[];
} | {
    id: string;
    data: {
        max: number;
        min: number;
        id: string;
        bezier: null;
        weight: number;
        _transform: null;
        group: number;
        step: number;
    }[];
} | {
    data: {
        weight: number;
        min: number;
        id: string;
        max: number;
        bezier: null;
        group: number;
        step: number;
        _transform: null;
    }[];
    id: string;
} | {
    id: string;
    data: {
        max: number;
        group: number;
        id: string;
        min: number;
        step: number;
        _transform: null;
        bezier: null;
        weight: number;
    }[];
} | {
    id: string;
    data: {
        group: number;
        step: number;
        min: number;
        bezier: null;
        id: string;
        max: number;
        _transform: null;
        weight: number;
    }[];
} | {
    id: string;
    data: {
        _transform: null;
        group: number;
        weight: number;
        min: number;
        id: string;
        bezier: null;
        max: number;
        step: number;
    }[];
} | {
    id: string;
    data: {
        min: number;
        weight: number;
        bezier: null;
        id: string;
        group: number;
        _transform: null;
        max: number;
        step: number;
    }[];
} | {
    data: {
        weight: number;
        _transform: null;
        max: number;
        step: number;
        group: number;
        bezier: null;
        id: string;
        min: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        group: number;
        weight: number;
        bezier: null;
        _transform: null;
        min: number;
        id: string;
        step: number;
        max: number;
    }[];
} | {
    data: {
        bezier: null;
        max: number;
        min: number;
        id: string;
        _transform: null;
        step: number;
        weight: number;
        group: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        min: number;
        weight: number;
        _transform: null;
        step: number;
        max: number;
        group: number;
        bezier: null;
        id: string;
    }[];
} | {
    id: string;
    data: {
        step: number;
        bezier: null;
        min: number;
        group: number;
        id: string;
        weight: number;
        _transform: null;
        max: number;
    }[];
} | {
    id: string;
    data: {
        id: string;
        weight: number;
        group: number;
        _transform: null;
        bezier: null;
        step: number;
        min: number;
        max: number;
    }[];
} | {
    data: {
        weight: number;
        id: string;
        min: number;
        max: number;
        bezier: null;
        step: number;
        group: number;
        _transform: null;
    }[];
    id: string;
} | {
    data: ({
        group: number;
        id: string;
        weight: number;
        bezier: null;
        min: number;
        max: number;
        _transform: null;
        step: number;
    } | {
        group: number;
        _transform: null;
        id: null;
        max: number;
        step: number;
        bezier: null;
        weight: number;
        min: number;
    })[];
    id: string;
} | {
    data: {
        weight: number;
        step: number;
        max: number;
        bezier: null;
        id: string;
        min: number;
        _transform: null;
        group: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        _transform: null;
        bezier: null;
        id: string;
        min: number;
        max: number;
        step: number;
        group: number;
        weight: number;
    }[];
} | {
    data: {
        max: number;
        weight: number;
        group: number;
        bezier: null;
        min: number;
        step: number;
        id: string;
        _transform: null;
    }[];
    id: string;
} | {
    id: string;
    data: {
        group: number;
        id: string;
        step: number;
        _transform: null;
        weight: number;
        max: number;
        bezier: null;
        min: number;
    }[];
} | {
    id: string;
    data: {
        group: number;
        bezier: null;
        weight: number;
        _transform: null;
        max: number;
        min: number;
        step: number;
        id: string;
    }[];
} | {
    data: {
        bezier: null;
        id: string;
        step: number;
        group: number;
        _transform: null;
        min: number;
        max: number;
        weight: number;
    }[];
    id: string;
} | {
    data: {
        group: number;
        bezier: null;
        min: number;
        _transform: null;
        max: number;
        weight: number;
        id: string;
        step: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        max: number;
        _transform: null;
        group: number;
        step: number;
        bezier: null;
        min: number;
        weight: number;
        id: string;
    }[];
} | {
    data: {
        max: number;
        id: string;
        weight: number;
        step: number;
        _transform: null;
        bezier: null;
        group: number;
        min: number;
    }[];
    id: string;
} | {
    data: {
        id: string;
        min: number;
        group: number;
        bezier: null;
        step: number;
        max: number;
        _transform: null;
        weight: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        _transform: null;
        step: number;
        weight: number;
        max: number;
        bezier: null;
        id: string;
        group: number;
        min: number;
    }[];
} | {
    id: string;
    data: {
        id: string;
        min: number;
        group: number;
        bezier: null;
        weight: number;
        _transform: null;
        step: number;
        max: number;
    }[];
} | {
    id: string;
    data: {
        bezier: null;
        min: number;
        step: number;
        id: string;
        _transform: null;
        max: number;
        weight: number;
        group: number;
    }[];
} | {
    id: string;
    data: {
        _transform: null;
        group: number;
        bezier: null;
        max: number;
        step: number;
        id: string;
        min: number;
        weight: number;
    }[];
} | {
    id: string;
    data: {
        min: number;
        weight: number;
        group: number;
        step: number;
        _transform: null;
        max: number;
        bezier: null;
        id: string;
    }[];
} | {
    data: {
        bezier: null;
        step: number;
        weight: number;
        _transform: null;
        max: number;
        group: number;
        id: string;
        min: number;
    }[];
    id: string;
} | {
    data: {
        group: number;
        min: number;
        step: number;
        bezier: null;
        id: string;
        _transform: null;
        max: number;
        weight: number;
    }[];
    id: string;
} | {
    data: {
        _transform: null;
        max: number;
        weight: number;
        group: number;
        bezier: null;
        min: number;
        step: number;
        id: string;
    }[];
    id: string;
} | {
    data: {
        max: number;
        id: string;
        group: number;
        _transform: null;
        weight: number;
        min: number;
        bezier: null;
        step: number;
    }[];
    id: string;
} | {
    data: {
        step: number;
        bezier: null;
        min: number;
        weight: number;
        _transform: null;
        group: number;
        id: string;
        max: number;
    }[];
    id: string;
} | {
    data: {
        min: number;
        step: number;
        bezier: null;
        group: number;
        weight: number;
        id: string;
        max: number;
        _transform: null;
    }[];
    id: string;
} | {
    id: string;
    data: {
        min: number;
        max: number;
        step: number;
        bezier: null;
        group: number;
        weight: number;
        id: string;
        _transform: null;
    }[];
} | {
    data: {
        step: number;
        min: number;
        _transform: null;
        max: number;
        id: string;
        weight: number;
        group: number;
        bezier: null;
    }[];
    id: string;
} | {
    id: string;
    data: {
        _transform: null;
        max: number;
        min: number;
        step: number;
        bezier: null;
        group: number;
        id: string;
        weight: number;
    }[];
} | {
    data: {
        id: string;
        max: number;
        weight: number;
        bezier: null;
        min: number;
        group: number;
        _transform: null;
        step: number;
    }[];
    id: string;
} | {
    data: {
        group: number;
        min: number;
        bezier: null;
        step: number;
        weight: number;
        _transform: null;
        id: string;
        max: number;
    }[];
    id: string;
} | {
    data: {
        group: number;
        min: number;
        bezier: null;
        _transform: null;
        max: number;
        id: string;
        weight: number;
        step: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        max: number;
        step: number;
        _transform: null;
        group: number;
        min: number;
        id: string;
        weight: number;
        bezier: null;
    }[];
} | {
    data: {
        id: string;
        group: number;
        weight: number;
        bezier: null;
        min: number;
        step: number;
        max: number;
        _transform: null;
    }[];
    id: string;
} | {
    data: {
        bezier: null;
        _transform: null;
        min: number;
        group: number;
        id: string;
        max: number;
        step: number;
        weight: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        min: number;
        max: number;
        _transform: null;
        id: string;
        group: number;
        bezier: null;
        step: number;
        weight: number;
    }[];
} | {
    id: string;
    data: {
        weight: number;
        group: number;
        bezier: null;
        _transform: null;
        min: number;
        max: number;
        step: number;
        id: string;
    }[];
} | {
    data: {
        _transform: null;
        step: number;
        bezier: null;
        weight: number;
        group: number;
        min: number;
        max: number;
        id: string;
    }[];
    id: string;
} | {
    data: {
        _transform: null;
        group: number;
        weight: number;
        step: number;
        id: string;
        min: number;
        max: number;
        bezier: null;
    }[];
    id: string;
} | {
    data: {
        id: string;
        group: number;
        weight: number;
        step: number;
        _transform: null;
        min: number;
        bezier: null;
        max: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        _transform: null;
        id: string;
        step: number;
        group: number;
        weight: number;
        max: number;
        min: number;
        bezier: null;
    }[];
} | {
    data: {
        min: number;
        id: string;
        max: number;
        weight: number;
        step: number;
        group: number;
        _transform: null;
        bezier: null;
    }[];
    id: string;
} | {
    id: string;
    data: {
        min: number;
        max: number;
        group: number;
        step: number;
        id: string;
        bezier: null;
        _transform: null;
        weight: number;
    }[];
} | {
    data: {
        bezier: null;
        weight: number;
        max: number;
        _transform: null;
        step: number;
        id: string;
        min: number;
        group: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        group: number;
        min: number;
        bezier: null;
        id: string;
        _transform: null;
        weight: number;
        max: number;
        step: number;
    }[];
} | {
    data: {
        weight: number;
        step: number;
        group: number;
        id: string;
        min: number;
        max: number;
        bezier: null;
        _transform: null;
    }[];
    id: string;
} | {
    id: string;
    data: {
        weight: number;
        min: number;
        group: number;
        _transform: null;
        step: number;
        max: number;
        id: string;
        bezier: null;
    }[];
} | {
    data: {
        id: string;
        max: number;
        bezier: null;
        step: number;
        weight: number;
        group: number;
        _transform: null;
        min: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        _transform: null;
        group: number;
        id: string;
        max: number;
        step: number;
        bezier: null;
        min: number;
        weight: number;
    }[];
} | {
    id: string;
    data: {
        id: string;
        max: number;
        step: number;
        _transform: null;
        group: number;
        bezier: null;
        weight: number;
        min: number;
    }[];
} | {
    data: {
        max: number;
        min: number;
        weight: number;
        group: number;
        _transform: null;
        id: string;
        bezier: null;
        step: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        bezier: null;
        _transform: null;
        step: number;
        max: number;
        weight: number;
        id: string;
        min: number;
        group: number;
    }[];
} | {
    createdAt: {
        _seconds: number;
        _nanoseconds: number;
    };
    data: {
        max: number;
        weight: number;
        id: string;
        step: number;
        group: number;
        min: number;
        dynamicPoolId: null;
    }[];
    id: string;
    updatedAt: {
        _nanoseconds: number;
        _seconds: number;
    };
} | {
    updatedAt: {
        _seconds: number;
        _nanoseconds: number;
    };
    id: string;
    data: {
        id: string;
        step: number;
        group: number;
        min: number;
        max: number;
        dynamicPoolId: null;
        weight: number;
    }[];
    createdAt: {
        _seconds: number;
        _nanoseconds: number;
    };
} | {
    data: {
        step: number;
        min: number;
        max: number;
        weight: number;
        group: number;
        id: string;
        dynamicPoolId: null;
    }[];
    id: string;
    updatedAt: {
        _nanoseconds: number;
        _seconds: number;
    };
    createdAt: {
        _nanoseconds: number;
        _seconds: number;
    };
} | {
    id: string;
    updatedAt: {
        _nanoseconds: number;
        _seconds: number;
    };
    data: {
        dynamicPoolId: null;
        max: number;
        id: string;
        step: number;
        group: number;
        min: number;
        weight: number;
    }[];
    createdAt: {
        _seconds: number;
        _nanoseconds: number;
    };
} | {
    data: {
        min: number;
        max: number;
        dynamicPoolId: null;
        step: number;
        id: string;
        group: number;
        weight: number;
    }[];
    id: string;
    updatedAt: {
        _seconds: number;
        _nanoseconds: number;
    };
    createdAt: {
        _seconds: number;
        _nanoseconds: number;
    };
} | {
    data: {
        min: number;
        weight: number;
        max: number;
        _transform: null;
        step: number;
        group: number;
        bezier: null;
        id: string;
    }[];
    id: string;
} | {
    id: string;
    data: {
        id: string;
        step: number;
        max: number;
        weight: number;
        _transform: null;
        group: number;
        min: number;
        bezier: null;
    }[];
} | {
    id: string;
    data: {
        min: number;
        id: string;
        max: number;
        _transform: null;
        group: number;
        weight: number;
        step: number;
        bezier: null;
    }[];
} | {
    id: string;
    data: {
        _transform: null;
        step: number;
        min: number;
        max: number;
        group: number;
        id: string;
        weight: number;
        bezier: null;
    }[];
} | {
    id: string;
    data: {
        bezier: null;
        id: string;
        group: number;
        max: number;
        step: number;
        min: number;
        weight: number;
        _transform: null;
    }[];
} | {
    id: string;
    data: {
        max: number;
        min: number;
        group: number;
        id: string;
        _transform: null;
        weight: number;
        bezier: null;
        step: number;
    }[];
} | {
    id: string;
    data: {
        weight: number;
        group: number;
        max: number;
        step: number;
        id: string;
        bezier: null;
        _transform: null;
        min: number;
    }[];
} | {
    id: string;
    data: {
        group: number;
        step: number;
        min: number;
        _transform: null;
        max: number;
        id: string;
        bezier: null;
        weight: number;
    }[];
} | {
    data: {
        bezier: null;
        weight: number;
        min: number;
        max: number;
        step: number;
        group: number;
        _transform: null;
        id: string;
    }[];
    id: string;
} | {
    data: {
        id: string;
        min: number;
        step: number;
        _transform: null;
        group: number;
        bezier: null;
        max: number;
        weight: number;
    }[];
    id: string;
} | {
    data: {
        max: number;
        weight: number;
        step: number;
        id: string;
        min: number;
        group: number;
        bezier: null;
        _transform: null;
    }[];
    id: string;
} | {
    id: string;
    data: {
        id: string;
        _transform: null;
        min: number;
        group: number;
        weight: number;
        step: number;
        max: number;
        bezier: null;
    }[];
} | {
    data: {
        max: number;
        weight: number;
        group: number;
        bezier: null;
        _transform: null;
        min: number;
        id: string;
        step: number;
    }[];
    id: string;
} | {
    data: {
        _transform: null;
        min: number;
        group: number;
        bezier: null;
        id: string;
        weight: number;
        max: number;
        step: number;
    }[];
    id: string;
} | {
    data: {
        _transform: null;
        group: number;
        min: number;
        id: string;
        weight: number;
        step: number;
        bezier: null;
        max: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        id: string;
        group: number;
        weight: number;
        min: number;
        max: number;
        _transform: null;
        step: number;
        bezier: null;
    }[];
} | {
    data: {
        min: number;
        bezier: null;
        max: number;
        id: string;
        group: number;
        _transform: null;
        weight: number;
        step: number;
    }[];
    id: string;
} | {
    id: string;
    updatedAt: {
        _seconds: number;
        _nanoseconds: number;
    };
    data: {
        group: number;
        dynamicPoolId: null;
        max: number;
        weight: number;
        id: string;
        step: number;
        min: number;
    }[];
    createdAt: {
        _seconds: number;
        _nanoseconds: number;
    };
} | {
    id: string;
    data: {
        min: number;
        bezier: null;
        max: number;
        weight: number;
        group: number;
        id: string;
        _transform: null;
        step: number;
    }[];
} | {
    id: string;
    data: {
        id: string;
        _transform: null;
        min: number;
        weight: number;
        step: number;
        bezier: null;
        max: number;
        group: number;
    }[];
} | {
    id: string;
    data: {
        group: number;
        bezier: null;
        step: number;
        _transform: null;
        max: number;
        min: number;
        weight: number;
        id: string;
    }[];
} | {
    data: {
        group: number;
        _transform: null;
        min: number;
        max: number;
        bezier: null;
        step: number;
        id: string;
        weight: number;
    }[];
    id: string;
} | {
    data: ({
        id: string;
        bezier: null;
        dynamicPoolId: string;
        min: number;
        _transform: null;
        weight: number;
        group: number;
        max: number;
        step: number;
    } | {
        group: number;
        _transform: null;
        max: number;
        weight: number;
        bezier: null;
        id: string;
        step: number;
        min: number;
        dynamicPoolId?: undefined;
    })[];
    id: string;
} | {
    data: ({
        step: number;
        dynamicPoolId: string;
        bezier: null;
        weight: number;
        group: number;
        id: string;
        max: number;
        min: number;
        _transform: null;
    } | {
        step: number;
        weight: number;
        id: string;
        bezier: null;
        max: number;
        group: number;
        _transform: null;
        min: number;
        dynamicPoolId?: undefined;
    })[];
    id: string;
} | {
    data: ({
        id: string;
        bezier: null;
        step: number;
        dynamicPoolId: string;
        min: number;
        _transform: null;
        group: number;
        max: number;
        weight: number;
    } | {
        bezier: null;
        id: string;
        min: number;
        max: number;
        weight: number;
        step: number;
        _transform: null;
        group: number;
        dynamicPoolId?: undefined;
    })[];
    id: string;
} | {
    updatedAt: {
        _seconds: number;
        _nanoseconds: number;
    };
    data: {
        dynamicPoolId: null;
        min: number;
        weight: number;
        max: number;
        step: number;
        id: string;
        group: number;
    }[];
    createdAt: {
        _seconds: number;
        _nanoseconds: number;
    };
    id: string;
} | {
    id: string;
    updatedAt: {
        _seconds: number;
        _nanoseconds: number;
    };
    createdAt: {
        _seconds: number;
        _nanoseconds: number;
    };
    data: {
        weight: number;
        group: number;
        min: number;
        step: number;
        max: number;
        id: string;
        dynamicPoolId: null;
    }[];
} | {
    id: string;
    data: {
        group: number;
        step: number;
        id: string;
        bezier: null;
        _transform: null;
        max: number;
        weight: number;
        min: number;
    }[];
} | {
    data: {
        bezier: null;
        group: number;
        _transform: null;
        min: number;
        step: number;
        id: string;
        max: number;
        weight: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        id: string;
        min: number;
        max: number;
        weight: number;
        step: number;
        bezier: null;
        group: number;
        _transform: null;
    }[];
} | {
    data: ({
        min: number;
        id: string;
        max: number;
        dynamicPoolId: string;
        group: number;
        bezier: null;
        _transform: null;
        weight: number;
        step: number;
    } | {
        step: number;
        _transform: null;
        weight: number;
        id: string;
        min: number;
        group: number;
        max: number;
        bezier: null;
        dynamicPoolId?: undefined;
    })[];
    id: string;
} | {
    data: ({
        step: number;
        id: string;
        dynamicPoolId: null;
        weight: number;
        max: number;
        min: number;
        group: number;
    } | {
        step: number;
        dynamicPoolId: string;
        id: string;
        min: number;
        weight: number;
        group: number;
        max: number;
    })[];
    id: string;
    createdAt: {
        _seconds: number;
        _nanoseconds: number;
    };
    updatedAt: {
        _seconds: number;
        _nanoseconds: number;
    };
} | {
    data: {
        weight: number;
        step: number;
        min: number;
        group: number;
        bezier: null;
        _transform: null;
        id: string;
        max: number;
    }[];
    id: string;
} | {
    data: {
        group: number;
        dynamicPoolId: null;
        max: number;
        weight: number;
        step: number;
        id: string;
        min: number;
    }[];
    createdAt: {
        _seconds: number;
        _nanoseconds: number;
    };
    updatedAt: {
        _seconds: number;
        _nanoseconds: number;
    };
    id: string;
} | {
    id: string;
    data: ({
        bezier: null;
        _transform: null;
        max: number;
        group: number;
        id: string;
        min: number;
        weight: number;
        step: number;
    } | {
        step: number;
        min: number;
        _transform: null;
        weight: number;
        group: number;
        id: null;
        max: number;
        bezier: null;
    })[];
} | {
    id: string;
    data: {
        group: number;
        max: number;
        weight: number;
        step: number;
        bezier: null;
        _transform: null;
        min: number;
        id: string;
    }[];
} | {
    data: {
        max: number;
        group: number;
        _transform: null;
        step: number;
        weight: number;
        min: number;
        bezier: null;
        id: string;
    }[];
    id: string;
} | {
    id: string;
    data: {
        max: number;
        group: number;
        step: number;
        id: string;
        _transform: null;
        min: number;
        weight: number;
        bezier: null;
    }[];
} | {
    id: string;
    data: {
        weight: number;
        bezier: null;
        group: number;
        _transform: null;
        id: string;
        min: number;
        step: number;
        max: number;
    }[];
} | {
    data: {
        bezier: null;
        id: string;
        weight: number;
        group: number;
        min: number;
        max: number;
        _transform: null;
        step: number;
    }[];
    id: string;
} | {
    data: {
        group: number;
        min: number;
        bezier: null;
        weight: number;
        id: string;
        _transform: null;
        max: number;
        step: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        _transform: null;
        id: string;
        bezier: null;
        group: number;
        weight: number;
        min: number;
        max: number;
        step: number;
    }[];
} | {
    id: string;
    data: {
        min: number;
        id: string;
        step: number;
        weight: number;
        max: number;
        _transform: null;
        group: number;
        bezier: null;
    }[];
} | {
    id: string;
    data: {
        min: number;
        bezier: null;
        step: number;
        max: number;
        id: string;
        _transform: null;
        weight: number;
        group: number;
    }[];
} | {
    id: string;
    data: {
        step: number;
        bezier: null;
        id: string;
        group: number;
        min: number;
        weight: number;
        _transform: null;
        max: number;
    }[];
} | {
    data: {
        step: number;
        max: number;
        group: number;
        _transform: null;
        bezier: null;
        id: string;
        min: number;
        weight: number;
    }[];
    id: string;
} | {
    data: {
        group: number;
        step: number;
        _transform: null;
        id: string;
        min: number;
        weight: number;
        max: number;
        bezier: null;
    }[];
    id: string;
} | {
    id: string;
    data: {
        _transform: null;
        id: string;
        min: number;
        weight: number;
        max: number;
        step: number;
        group: number;
        bezier: null;
    }[];
} | {
    data: {
        weight: number;
        _transform: null;
        min: number;
        id: string;
        group: number;
        bezier: null;
        step: number;
        max: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        step: number;
        id: string;
        _transform: null;
        group: number;
        min: number;
        bezier: null;
        max: number;
        weight: number;
    }[];
} | {
    id: string;
    data: {
        _transform: null;
        group: number;
        step: number;
        max: number;
        id: string;
        min: number;
        bezier: null;
        weight: number;
    }[];
} | {
    id: string;
    data: {
        group: number;
        min: number;
        max: number;
        bezier: null;
        weight: number;
        step: number;
        id: string;
        _transform: null;
    }[];
} | {
    id: string;
    data: {
        _transform: null;
        min: number;
        id: string;
        step: number;
        bezier: null;
        weight: number;
        group: number;
        max: number;
    }[];
} | {
    data: {
        id: string;
        step: number;
        bezier: null;
        max: number;
        group: number;
        weight: number;
        _transform: null;
        min: number;
    }[];
    id: string;
} | {
    data: {
        _transform: null;
        max: number;
        group: number;
        step: number;
        min: number;
        bezier: null;
        id: string;
        weight: number;
    }[];
    id: string;
} | {
    data: {
        step: number;
        group: number;
        min: number;
        id: string;
        weight: number;
        max: number;
        bezier: null;
        _transform: null;
    }[];
    id: string;
} | {
    id: string;
    data: {
        max: number;
        group: number;
        min: number;
        _transform: null;
        weight: number;
        id: string;
        step: number;
        bezier: null;
    }[];
} | {
    id: string;
    data: {
        weight: number;
        group: number;
        bezier: null;
        step: number;
        _transform: null;
        max: number;
        min: number;
        id: string;
    }[];
} | {
    data: {
        max: number;
        weight: number;
        step: number;
        _transform: null;
        min: number;
        bezier: null;
        group: number;
        id: string;
    }[];
    id: string;
} | {
    id: string;
    data: {
        min: number;
        step: number;
        group: number;
        id: string;
        max: number;
        _transform: null;
        bezier: null;
        weight: number;
    }[];
} | {
    id: string;
    data: {
        bezier: null;
        min: number;
        group: number;
        max: number;
        _transform: null;
        id: string;
        weight: number;
        step: number;
    }[];
} | {
    id: string;
    data: {
        group: number;
        step: number;
        id: string;
        bezier: null;
        _transform: null;
        max: number;
        min: number;
        weight: number;
    }[];
} | {
    id: string;
    data: {
        _transform: null;
        bezier: null;
        id: string;
        step: number;
        group: number;
        max: number;
        min: number;
        weight: number;
    }[];
} | {
    id: string;
    data: {
        bezier: null;
        step: number;
        id: string;
        max: number;
        weight: number;
        group: number;
        _transform: null;
        min: number;
    }[];
} | {
    id: string;
    data: {
        group: number;
        weight: number;
        _transform: null;
        bezier: null;
        id: string;
        min: number;
        max: number;
        step: number;
    }[];
} | {
    data: {
        id: string;
        max: number;
        _transform: null;
        bezier: null;
        min: number;
        step: number;
        group: number;
        weight: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        bezier: null;
        weight: number;
        _transform: null;
        group: number;
        id: string;
        max: number;
        step: number;
        min: number;
    }[];
} | {
    id: string;
    data: {
        _transform: null;
        group: number;
        min: number;
        weight: number;
        step: number;
        bezier: null;
        id: string;
        max: number;
    }[];
} | {
    id: string;
    data: {
        _transform: null;
        step: number;
        group: number;
        min: number;
        max: number;
        weight: number;
        bezier: null;
        id: string;
    }[];
} | {
    id: string;
    data: {
        step: number;
        group: number;
        weight: number;
        bezier: null;
        id: string;
        _transform: null;
        max: number;
        min: number;
    }[];
} | {
    id: string;
    data: {
        min: number;
        bezier: null;
        max: number;
        group: number;
        weight: number;
        _transform: null;
        id: string;
        step: number;
    }[];
} | {
    id: string;
    data: {
        id: string;
        max: number;
        bezier: null;
        step: number;
        min: number;
        weight: number;
        _transform: null;
        group: number;
    }[];
} | {
    data: {
        group: number;
        min: number;
        bezier: null;
        weight: number;
        _transform: null;
        id: string;
        max: number;
        step: number;
    }[];
    id: string;
} | {
    data: {
        group: number;
        bezier: null;
        max: number;
        id: string;
        min: number;
        step: number;
        _transform: null;
        weight: number;
    }[];
    id: string;
} | {
    data: {
        max: number;
        weight: number;
        step: number;
        group: number;
        bezier: null;
        _transform: null;
        id: string;
        min: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        bezier: null;
        group: number;
        step: number;
        min: number;
        weight: number;
        id: string;
        max: number;
        _transform: null;
    }[];
} | {
    data: {
        bezier: null;
        group: number;
        step: number;
        _transform: null;
        max: number;
        id: string;
        min: number;
        weight: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        bezier: null;
        min: number;
        max: number;
        _transform: null;
        id: string;
        weight: number;
        step: number;
        group: number;
    }[];
} | {
    id: string;
    data: {
        bezier: null;
        step: number;
        group: number;
        weight: number;
        min: number;
        max: number;
        id: string;
        _transform: null;
    }[];
} | {
    id: string;
    data: ({
        max: number;
        dynamicPoolId: string;
        weight: number;
        step: number;
        group: number;
        id: string;
        _transform: null;
        min: number;
        bezier: null;
    } | {
        group: number;
        min: number;
        weight: number;
        max: number;
        id: string;
        _transform: null;
        bezier: null;
        step: number;
        dynamicPoolId?: undefined;
    })[];
} | {
    data: {
        group: number;
        _transform: null;
        weight: number;
        id: string;
        max: number;
        step: number;
        dynamicPoolId: string;
        bezier: null;
        min: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        weight: number;
        bezier: null;
        id: string;
        _transform: null;
        max: number;
        min: number;
        group: number;
        step: number;
    }[];
} | {
    id: string;
    data: {
        step: number;
        id: string;
        min: number;
        weight: number;
        max: number;
        group: number;
        _transform: null;
        bezier: null;
    }[];
} | {
    id: string;
    data: {
        id: string;
        step: number;
        bezier: null;
        max: number;
        _transform: null;
        min: number;
        weight: number;
        group: number;
    }[];
} | {
    id: string;
    data: {
        bezier: null;
        max: number;
        _transform: null;
        min: number;
        step: number;
        id: string;
        group: number;
        weight: number;
    }[];
} | {
    id: string;
    data: {
        max: number;
        group: number;
        step: number;
        min: number;
        bezier: null;
        _transform: null;
        id: string;
        weight: number;
    }[];
} | {
    data: {
        step: number;
        min: number;
        max: number;
        _transform: null;
        bezier: null;
        group: number;
        id: string;
        weight: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        group: number;
        _transform: null;
        bezier: null;
        step: number;
        id: string;
        max: number;
        min: number;
        weight: number;
    }[];
} | {
    id: string;
    data: {
        bezier: null;
        id: string;
        step: number;
        max: number;
        _transform: null;
        min: number;
        weight: number;
        group: number;
    }[];
} | {
    data: {
        weight: number;
        bezier: null;
        group: number;
        max: number;
        _transform: null;
        step: number;
        min: number;
        id: string;
    }[];
    id: string;
} | {
    id: string;
    data: {
        step: number;
        group: number;
        max: number;
        weight: number;
        id: string;
        _transform: null;
        bezier: null;
        min: number;
    }[];
} | {
    id: string;
    data: {
        max: number;
        step: number;
        group: number;
        min: number;
        bezier: null;
        weight: number;
        id: string;
        _transform: null;
    }[];
} | {
    data: {
        step: number;
        group: number;
        max: number;
        bezier: null;
        id: string;
        _transform: null;
        min: number;
        weight: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        weight: number;
        id: string;
        max: number;
        group: number;
        step: number;
        min: number;
        _transform: null;
        bezier: null;
    }[];
} | {
    data: {
        max: number;
        bezier: null;
        step: number;
        group: number;
        weight: number;
        _transform: null;
        min: number;
        id: string;
    }[];
    id: string;
} | {
    data: {
        min: number;
        id: string;
        weight: number;
        max: number;
        step: number;
        bezier: null;
        group: number;
        _transform: null;
    }[];
    id: string;
} | {
    id: string;
    data: {
        min: number;
        group: number;
        _transform: null;
        id: string;
        bezier: null;
        max: number;
        step: number;
        weight: number;
    }[];
} | {
    data: {
        id: string;
        _transform: null;
        step: number;
        bezier: null;
        group: number;
        max: number;
        min: number;
        weight: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        step: number;
        bezier: null;
        _transform: null;
        group: number;
        min: number;
        weight: number;
        id: string;
        max: number;
    }[];
} | {
    id: string;
    data: {
        id: string;
        step: number;
        weight: number;
        _transform: null;
        bezier: null;
        min: number;
        group: number;
        max: number;
    }[];
} | {
    id: string;
    data: {
        _transform: null;
        max: number;
        group: number;
        weight: number;
        step: number;
        min: number;
        bezier: null;
        id: string;
    }[];
} | {
    data: {
        step: number;
        id: string;
        _transform: null;
        min: number;
        max: number;
        bezier: null;
        group: number;
        weight: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        max: number;
        weight: number;
        _transform: null;
        group: number;
        bezier: null;
        id: string;
        min: number;
        step: number;
    }[];
} | {
    data: {
        id: string;
        max: number;
        bezier: null;
        step: number;
        group: number;
        weight: number;
        _transform: null;
        min: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        _transform: null;
        weight: number;
        id: string;
        step: number;
        group: number;
        max: number;
        bezier: null;
        min: number;
    }[];
} | {
    id: string;
    data: {
        min: number;
        id: string;
        max: number;
        weight: number;
        group: number;
        step: number;
        bezier: null;
        _transform: null;
    }[];
} | {
    id: string;
    data: {
        max: number;
        weight: number;
        step: number;
        bezier: null;
        id: string;
        min: number;
        _transform: null;
        group: number;
    }[];
} | {
    id: string;
    data: {
        max: number;
        id: string;
        step: number;
        _transform: null;
        min: number;
        weight: number;
        group: number;
        bezier: null;
    }[];
} | {
    id: string;
    data: {
        _transform: null;
        max: number;
        weight: number;
        step: number;
        bezier: null;
        group: number;
        id: string;
        min: number;
    }[];
} | {
    id: string;
    data: {
        min: number;
        max: number;
        _transform: null;
        weight: number;
        group: number;
        step: number;
        bezier: null;
        id: string;
    }[];
} | {
    id: string;
    data: {
        bezier: null;
        weight: number;
        group: number;
        step: number;
        id: string;
        _transform: null;
        min: number;
        max: number;
    }[];
} | {
    data: {
        id: string;
        bezier: null;
        _transform: null;
        min: number;
        step: number;
        group: number;
        max: number;
        weight: number;
    }[];
    id: string;
} | {
    data: {
        max: number;
        weight: number;
        _transform: null;
        group: number;
        bezier: null;
        id: string;
        step: number;
        min: number;
    }[];
    id: string;
} | {
    data: {
        step: number;
        max: number;
        bezier: null;
        _transform: null;
        group: number;
        min: number;
        id: string;
        weight: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        group: number;
        step: number;
        _transform: null;
        max: number;
        bezier: null;
        id: string;
        weight: number;
        min: number;
    }[];
} | {
    id: string;
    data: {
        min: number;
        bezier: null;
        id: string;
        weight: number;
        group: number;
        _transform: null;
        step: number;
        max: number;
    }[];
} | {
    id: string;
    data: {
        group: number;
        weight: number;
        max: number;
        bezier: null;
        step: number;
        min: number;
        _transform: null;
        id: string;
    }[];
} | {
    id: string;
    data: {
        max: number;
        bezier: null;
        step: number;
        group: number;
        min: number;
        id: string;
        weight: number;
        _transform: null;
    }[];
} | {
    id: string;
    data: {
        bezier: null;
        step: number;
        id: string;
        _transform: null;
        min: number;
        weight: number;
        group: number;
        max: number;
    }[];
} | {
    id: string;
    data: {
        group: number;
        min: number;
        max: number;
        step: number;
        bezier: null;
        _transform: null;
        weight: number;
        id: string;
    }[];
} | {
    data: {
        _transform: null;
        id: string;
        weight: number;
        bezier: null;
        step: number;
        group: number;
        min: number;
        max: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        min: number;
        max: number;
        bezier: null;
        id: string;
        group: number;
        weight: number;
        step: number;
        _transform: null;
    }[];
} | {
    id: string;
    data: {
        step: number;
        _transform: null;
        id: string;
        group: number;
        weight: number;
        bezier: null;
        min: number;
        max: number;
    }[];
} | {
    id: string;
    data: {
        _transform: null;
        max: number;
        min: number;
        step: number;
        weight: number;
        group: number;
        bezier: null;
        id: string;
    }[];
} | {
    id: string;
    data: {
        max: number;
        min: number;
        weight: number;
        step: number;
        id: string;
        bezier: null;
        _transform: null;
        group: number;
    }[];
} | {
    data: {
        _transform: null;
        bezier: null;
        max: number;
        weight: number;
        id: string;
        min: number;
        step: number;
        group: number;
    }[];
    id: string;
} | {
    data: {
        _transform: null;
        step: number;
        min: number;
        weight: number;
        bezier: null;
        max: number;
        group: number;
        id: string;
    }[];
    id: string;
} | {
    data: {
        _transform: null;
        max: number;
        step: number;
        bezier: null;
        id: string;
        min: number;
        group: number;
        weight: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        group: number;
        bezier: null;
        max: number;
        id: string;
        step: number;
        min: number;
        _transform: null;
        weight: number;
    }[];
} | {
    id: string;
    data: {
        weight: number;
        _transform: null;
        max: number;
        step: number;
        group: number;
        id: string;
        bezier: null;
        min: number;
    }[];
} | {
    id: string;
    data: {
        bezier: null;
        id: string;
        _transform: null;
        weight: number;
        max: number;
        group: number;
        min: number;
        step: number;
    }[];
} | {
    id: string;
    data: {
        _transform: null;
        step: number;
        max: number;
        group: number;
        bezier: null;
        weight: number;
        id: string;
        min: number;
    }[];
} | {
    id: string;
    data: {
        _transform: null;
        max: number;
        id: string;
        min: number;
        weight: number;
        step: number;
        group: number;
        bezier: null;
    }[];
} | {
    data: {
        id: string;
        _transform: null;
        step: number;
        weight: number;
        max: number;
        group: number;
        bezier: null;
        min: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        weight: number;
        step: number;
        group: number;
        min: number;
        _transform: null;
        bezier: null;
        id: string;
        max: number;
    }[];
} | {
    id: string;
    data: {
        bezier: null;
        step: number;
        group: number;
        id: string;
        weight: number;
        max: number;
        min: number;
        _transform: null;
    }[];
} | {
    id: string;
    data: {
        max: number;
        min: number;
        _transform: null;
        step: number;
        bezier: null;
        group: number;
        id: string;
        weight: number;
    }[];
} | {
    data: {
        bezier: null;
        id: string;
        max: number;
        min: number;
        _transform: null;
        group: number;
        weight: number;
        step: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        _transform: null;
        min: number;
        max: number;
        group: number;
        bezier: null;
        step: number;
        weight: number;
        id: string;
    }[];
} | {
    id: string;
    data: {
        min: number;
        step: number;
        group: number;
        _transform: null;
        max: number;
        bezier: null;
        id: string;
        weight: number;
    }[];
} | {
    id: string;
    data: {
        weight: number;
        step: number;
        max: number;
        group: number;
        id: string;
        _transform: null;
        bezier: null;
        min: number;
    }[];
} | {
    data: {
        group: number;
        _transform: null;
        bezier: null;
        step: number;
        id: string;
        min: number;
        max: number;
        weight: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        bezier: null;
        max: number;
        _transform: null;
        step: number;
        id: string;
        weight: number;
        min: number;
        group: number;
    }[];
} | {
    data: {
        group: number;
        max: number;
        bezier: null;
        id: string;
        step: number;
        _transform: null;
        min: number;
        weight: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        bezier: null;
        max: number;
        id: string;
        min: number;
        weight: number;
        step: number;
        group: number;
        _transform: null;
    }[];
} | {
    data: {
        group: number;
        bezier: null;
        id: string;
        _transform: null;
        step: number;
        min: number;
        max: number;
        weight: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        bezier: null;
        max: number;
        weight: number;
        step: number;
        _transform: null;
        id: string;
        group: number;
        min: number;
    }[];
} | {
    id: string;
    data: {
        weight: number;
        max: number;
        _transform: null;
        step: number;
        id: string;
        bezier: null;
        min: number;
        group: number;
    }[];
} | {
    data: {
        step: number;
        max: number;
        bezier: null;
        group: number;
        weight: number;
        id: string;
        _transform: null;
        min: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        group: number;
        _transform: null;
        min: number;
        id: string;
        max: number;
        step: number;
        bezier: null;
        weight: number;
    }[];
} | {
    id: string;
    data: {
        step: number;
        weight: number;
        bezier: null;
        min: number;
        max: number;
        group: number;
        id: string;
        _transform: null;
    }[];
} | {
    id: string;
    data: {
        _transform: null;
        bezier: null;
        step: number;
        id: string;
        max: number;
        group: number;
        min: number;
        weight: number;
    }[];
} | {
    id: string;
    data: {
        id: string;
        bezier: null;
        max: number;
        _transform: null;
        group: number;
        min: number;
        weight: number;
        step: number;
    }[];
} | {
    id: string;
    data: {
        group: number;
        _transform: null;
        weight: number;
        id: string;
        min: number;
        max: number;
        bezier: null;
        step: number;
    }[];
} | {
    data: {
        group: number;
        max: number;
        weight: number;
        step: number;
        bezier: null;
        min: number;
        id: string;
        _transform: null;
    }[];
    id: string;
} | {
    id: string;
    data: {
        group: number;
        bezier: null;
        _transform: null;
        step: number;
        max: number;
        weight: number;
        id: string;
        min: number;
    }[];
} | {
    id: string;
    data: {
        group: number;
        bezier: null;
        min: number;
        id: string;
        max: number;
        step: number;
        _transform: null;
        weight: number;
    }[];
} | {
    data: {
        bezier: null;
        id: string;
        step: number;
        weight: number;
        _transform: null;
        group: number;
        min: number;
        max: number;
    }[];
    id: string;
} | {
    data: {
        weight: number;
        step: number;
        _transform: null;
        min: number;
        group: number;
        id: string;
        bezier: null;
        max: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        id: string;
        _transform: null;
        step: number;
        max: number;
        bezier: null;
        min: number;
        weight: number;
        group: number;
    }[];
} | {
    data: {
        min: number;
        step: number;
        id: string;
        max: number;
        group: number;
        _transform: null;
        weight: number;
        bezier: null;
    }[];
    id: string;
} | {
    data: {
        _transform: null;
        weight: number;
        step: number;
        min: number;
        group: number;
        id: string;
        bezier: null;
        max: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        _transform: null;
        group: number;
        id: string;
        bezier: null;
        step: number;
        max: number;
        min: number;
        weight: number;
    }[];
} | {
    id: string;
    data: {
        group: number;
        _transform: null;
        min: number;
        bezier: null;
        weight: number;
        max: number;
        step: number;
        id: string;
    }[];
} | {
    data: {
        id: string;
        group: number;
        min: number;
        _transform: null;
        bezier: null;
        max: number;
        weight: number;
        step: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        group: number;
        min: number;
        max: number;
        step: number;
        bezier: null;
        id: string;
        weight: number;
        _transform: null;
    }[];
} | {
    id: string;
    data: {
        bezier: null;
        min: number;
        id: string;
        weight: number;
        max: number;
        _transform: null;
        group: number;
        step: number;
    }[];
} | {
    id: string;
    data: {
        _transform: null;
        max: number;
        group: number;
        bezier: null;
        id: string;
        weight: number;
        step: number;
        min: number;
    }[];
} | {
    data: {
        max: number;
        step: number;
        weight: number;
        id: string;
        min: number;
        group: number;
        bezier: null;
        _transform: null;
    }[];
    id: string;
} | {
    id: string;
    data: {
        step: number;
        id: string;
        bezier: null;
        min: number;
        max: number;
        weight: number;
        _transform: null;
        group: number;
    }[];
} | {
    id: string;
    data: {
        min: number;
        _transform: null;
        group: number;
        bezier: null;
        id: string;
        max: number;
        step: number;
        weight: number;
    }[];
} | {
    data: {
        weight: number;
        step: number;
        id: string;
        _transform: null;
        group: number;
        bezier: null;
        max: number;
        min: number;
    }[];
    id: string;
} | {
    data: {
        _transform: null;
        bezier: null;
        min: number;
        max: number;
        id: string;
        step: number;
        group: number;
        weight: number;
    }[];
    id: string;
} | {
    id: string;
    data: ({
        dynamicPoolId: string;
        _transform: null;
        bezier: null;
        id: string;
        weight: number;
        step: number;
        max: number;
        group: number;
        min: number;
    } | {
        max: number;
        min: number;
        id: string;
        weight: number;
        step: number;
        _transform: null;
        bezier: null;
        group: number;
        dynamicPoolId?: undefined;
    })[];
} | {
    data: {
        id: string;
        weight: number;
        step: number;
        bezier: null;
        min: number;
        max: number;
        group: number;
        _transform: null;
    }[];
    id: string;
} | {
    data: {
        weight: number;
        bezier: null;
        _transform: null;
        group: number;
        min: number;
        step: number;
        id: string;
        max: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        _transform: null;
        step: number;
        max: number;
        min: number;
        group: number;
        bezier: null;
        id: string;
        weight: number;
    }[];
} | {
    data: {
        bezier: null;
        _transform: null;
        step: number;
        weight: number;
        min: number;
        max: number;
        id: string;
        group: number;
    }[];
    id: string;
} | {
    data: {
        min: number;
        id: string;
        bezier: null;
        max: number;
        step: number;
        group: number;
        _transform: null;
        weight: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        weight: number;
        bezier: null;
        step: number;
        id: string;
        max: number;
        min: number;
        group: number;
        _transform: null;
    }[];
} | {
    id: string;
    data: {
        id: string;
        _transform: null;
        weight: number;
        min: number;
        step: number;
        bezier: null;
        group: number;
        max: number;
    }[];
} | {
    id: string;
    data: {
        bezier: null;
        step: number;
        weight: number;
        _transform: null;
        group: number;
        id: string;
        min: number;
        max: number;
    }[];
} | {
    id: string;
    data: ({
        group: number;
        bezier: null;
        weight: number;
        id: string;
        min: number;
        _transform: null;
        max: number;
        step: number;
    } | {
        bezier: null;
        group: number;
        _transform: null;
        id: null;
        max: number;
        weight: number;
        min: number;
        step: number;
    })[];
} | {
    data: ({
        _transform: null;
        min: number;
        id: string;
        group: number;
        weight: number;
        step: number;
        bezier: null;
        max: number;
        dynamicPoolId: string;
    } | {
        max: number;
        weight: number;
        bezier: null;
        id: string;
        _transform: null;
        min: number;
        group: number;
        step: number;
        dynamicPoolId?: undefined;
    })[];
    id: string;
} | {
    id: string;
    data: {
        min: number;
        id: string;
        group: number;
        bezier: null;
        weight: number;
        step: number;
        _transform: null;
        max: number;
    }[];
} | {
    id: string;
    data: {
        bezier: null;
        _transform: null;
        step: number;
        min: number;
        max: number;
        group: number;
        id: string;
        weight: number;
    }[];
} | {
    id: string;
    data: {
        bezier: null;
        weight: number;
        _transform: null;
        step: number;
        group: number;
        min: number;
        max: number;
        id: string;
    }[];
} | {
    id: string;
    data: {
        weight: number;
        min: number;
        id: string;
        bezier: null;
        _transform: null;
        group: number;
        max: number;
        step: number;
    }[];
} | {
    data: {
        step: number;
        id: string;
        min: number;
        max: number;
        weight: number;
        _transform: null;
        bezier: null;
        group: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        group: number;
        _transform: null;
        id: string;
        step: number;
        max: number;
        bezier: null;
        min: number;
        weight: number;
    }[];
} | {
    data: {
        group: number;
        bezier: null;
        max: number;
        id: string;
        _transform: null;
        min: number;
        weight: number;
        step: number;
    }[];
    id: string;
} | {
    data: {
        group: number;
        id: string;
        _transform: null;
        min: number;
        max: number;
        weight: number;
        step: number;
        bezier: null;
    }[];
    id: string;
} | {
    id: string;
    data: {
        max: number;
        group: number;
        min: number;
        id: string;
        _transform: null;
        bezier: null;
        weight: number;
        step: number;
    }[];
} | {
    data: {
        group: number;
        _transform: null;
        max: number;
        id: string;
        bezier: null;
        min: number;
        weight: number;
        step: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        id: string;
        step: number;
        group: number;
        _transform: null;
        min: number;
        max: number;
        weight: number;
        bezier: null;
    }[];
} | {
    id: string;
    data: {
        min: number;
        id: string;
        bezier: null;
        _transform: null;
        weight: number;
        step: number;
        max: number;
        group: number;
    }[];
} | {
    id: string;
    data: {
        max: number;
        weight: number;
        group: number;
        id: string;
        min: number;
        step: number;
        bezier: null;
        _transform: null;
    }[];
} | {
    id: string;
    data: {
        bezier: null;
        max: number;
        group: number;
        _transform: null;
        weight: number;
        id: string;
        min: number;
        step: number;
    }[];
} | {
    id: string;
    data: {
        max: number;
        weight: number;
        id: string;
        _transform: null;
        step: number;
        group: number;
        min: number;
        bezier: null;
    }[];
} | {
    id: string;
    data: {
        min: number;
        group: number;
        weight: number;
        max: number;
        _transform: null;
        step: number;
        bezier: null;
        id: string;
    }[];
} | {
    id: string;
    data: {
        id: string;
        step: number;
        bezier: null;
        _transform: null;
        max: number;
        weight: number;
        group: number;
        min: number;
    }[];
} | {
    id: string;
    data: {
        id: string;
        _transform: null;
        weight: number;
        group: number;
        bezier: null;
        min: number;
        max: number;
        step: number;
    }[];
} | {
    id: string;
    data: {
        id: string;
        weight: number;
        group: number;
        max: number;
        step: number;
        min: number;
        _transform: null;
        bezier: null;
    }[];
} | {
    id: string;
    data: {
        group: number;
        step: number;
        max: number;
        _transform: null;
        min: number;
        weight: number;
        bezier: null;
        id: string;
    }[];
} | {
    id: string;
    data: {
        min: number;
        max: number;
        bezier: null;
        weight: number;
        _transform: null;
        group: number;
        step: number;
        id: string;
    }[];
} | {
    id: string;
    data: {
        group: number;
        max: number;
        _transform: null;
        id: string;
        weight: number;
        step: number;
        min: number;
        bezier: null;
    }[];
} | {
    id: string;
    data: {
        step: number;
        group: number;
        _transform: null;
        min: number;
        bezier: null;
        id: string;
        max: number;
        weight: number;
    }[];
} | {
    id: string;
    data: {
        max: number;
        min: number;
        id: string;
        step: number;
        group: number;
        weight: number;
        bezier: null;
        _transform: null;
    }[];
} | {
    data: {
        bezier: null;
        id: string;
        step: number;
        weight: number;
        max: number;
        _transform: null;
        group: number;
        min: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        bezier: null;
        step: number;
        id: string;
        group: number;
        _transform: null;
        max: number;
        min: number;
        weight: number;
    }[];
} | {
    data: {
        group: number;
        step: number;
        weight: number;
        bezier: null;
        id: string;
        _transform: null;
        min: number;
        max: number;
    }[];
    id: string;
} | {
    data: {
        bezier: null;
        weight: number;
        group: number;
        step: number;
        min: number;
        max: number;
        _transform: null;
        id: string;
    }[];
    id: string;
} | {
    id: string;
    data: {
        _transform: null;
        min: number;
        bezier: null;
        id: string;
        group: number;
        weight: number;
        max: number;
        step: number;
    }[];
} | {
    id: string;
    data: ({
        max: number;
        group: number;
        bezier: null;
        id: string;
        _transform: null;
        step: number;
        weight: number;
        min: number;
        dynamicPoolId?: undefined;
    } | {
        weight: number;
        group: number;
        step: number;
        id: string;
        min: number;
        max: number;
        bezier: null;
        _transform: null;
        dynamicPoolId: string;
    })[];
} | {
    data: {
        weight: number;
        max: number;
        bezier: null;
        min: number;
        group: number;
        step: number;
        _transform: null;
        id: string;
    }[];
    id: string;
} | {
    id: string;
    data: {
        max: number;
        weight: number;
        bezier: null;
        min: number;
        id: string;
        step: number;
        _transform: null;
        group: number;
    }[];
} | {
    data: {
        id: string;
        max: number;
        step: number;
        weight: number;
        _transform: null;
        group: number;
        bezier: null;
        min: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        _transform: null;
        weight: number;
        max: number;
        step: number;
        id: string;
        min: number;
        bezier: null;
        group: number;
    }[];
} | {
    data: {
        max: number;
        id: string;
        _transform: null;
        group: number;
        bezier: null;
        weight: number;
        min: number;
        step: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        _transform: null;
        group: number;
        bezier: null;
        max: number;
        step: number;
        weight: number;
        id: string;
        min: number;
    }[];
} | {
    id: string;
    data: {
        id: string;
        weight: number;
        step: number;
        group: number;
        _transform: null;
        dynamicPoolId: string;
        bezier: null;
        min: number;
        max: number;
    }[];
} | {
    id: string;
    data: {
        bezier: null;
        step: number;
        _transform: null;
        id: string;
        dynamicPoolId: string;
        group: number;
        min: number;
        max: number;
        weight: number;
    }[];
} | {
    data: {
        _transform: null;
        group: number;
        min: number;
        bezier: null;
        weight: number;
        id: string;
        max: number;
        dynamicPoolId: string;
        step: number;
    }[];
    id: string;
} | {
    data: {
        bezier: null;
        min: number;
        group: number;
        id: string;
        _transform: null;
        step: number;
        max: number;
        weight: number;
    }[];
    id: string;
} | {
    data: {
        bezier: null;
        group: number;
        min: number;
        step: number;
        dynamicPoolId: string;
        id: string;
        weight: number;
        max: number;
        _transform: null;
    }[];
    id: string;
} | {
    id: string;
    data: {
        weight: number;
        _transform: null;
        id: string;
        group: number;
        bezier: null;
        min: number;
        dynamicPoolId: string;
        max: number;
        step: number;
    }[];
} | {
    id: string;
    data: {
        weight: number;
        step: number;
        group: number;
        id: string;
        min: number;
        bezier: null;
        max: number;
        _transform: null;
    }[];
} | {
    id: string;
    data: {
        min: number;
        id: string;
        _transform: null;
        group: number;
        bezier: null;
        weight: number;
        step: number;
        max: number;
    }[];
} | {
    id: string;
    data: {
        _transform: null;
        min: number;
        step: number;
        group: number;
        id: string;
        bezier: null;
        max: number;
        weight: number;
    }[];
} | {
    id: string;
    data: {
        _transform: null;
        max: number;
        weight: number;
        step: number;
        id: string;
        min: number;
        group: number;
        bezier: null;
    }[];
} | {
    id: string;
    data: {
        max: number;
        group: number;
        id: string;
        weight: number;
        step: number;
        bezier: null;
        _transform: null;
        min: number;
    }[];
} | {
    data: {
        _transform: null;
        max: number;
        bezier: null;
        weight: number;
        id: string;
        step: number;
        min: number;
        group: number;
    }[];
    id: string;
} | {
    data: {
        max: number;
        group: number;
        min: number;
        step: number;
        bezier: null;
        _transform: null;
        weight: number;
        id: string;
    }[];
    id: string;
} | {
    id: string;
    data: {
        min: number;
        group: number;
        step: number;
        _transform: null;
        max: number;
        weight: number;
        bezier: null;
        id: string;
    }[];
} | {
    id: string;
    data: {
        min: number;
        weight: number;
        _transform: null;
        bezier: null;
        id: string;
        max: number;
        group: number;
        step: number;
    }[];
} | {
    id: string;
    data: {
        min: number;
        group: number;
        id: string;
        max: number;
        weight: number;
        _transform: null;
        dynamicPoolId: string;
        bezier: null;
        step: number;
    }[];
} | {
    id: string;
    data: {
        group: number;
        bezier: null;
        id: string;
        weight: number;
        max: number;
        step: number;
        _transform: null;
        min: number;
    }[];
} | {
    id: string;
    data: {
        min: number;
        max: number;
        bezier: null;
        weight: number;
        step: number;
        dynamicPoolId: string;
        _transform: null;
        group: number;
        id: string;
    }[];
} | {
    data: {
        weight: number;
        group: number;
        _transform: null;
        min: number;
        max: number;
        step: number;
        id: string;
        bezier: null;
    }[];
    id: string;
} | {
    id: string;
    data: {
        _transform: null;
        group: number;
        min: number;
        id: string;
        weight: number;
        bezier: null;
        max: number;
        step: number;
        dynamicPoolId: string;
    }[];
} | {
    id: string;
    data: {
        id: string;
        min: number;
        group: number;
        max: number;
        weight: number;
        step: number;
        bezier: null;
        _transform: null;
    }[];
} | {
    data: {
        min: number;
        dynamicPoolId: string;
        _transform: null;
        step: number;
        group: number;
        bezier: null;
        id: string;
        max: number;
        weight: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        _transform: null;
        bezier: null;
        weight: number;
        step: number;
        max: number;
        group: number;
        id: string;
        min: number;
    }[];
} | {
    data: {
        _transform: null;
        step: number;
        bezier: null;
        id: string;
        max: number;
        min: number;
        group: number;
        dynamicPoolId: string;
        weight: number;
    }[];
    id: string;
} | {
    data: {
        id: string;
        min: number;
        max: number;
        group: number;
        bezier: null;
        weight: number;
        step: number;
        _transform: null;
    }[];
    id: string;
} | {
    id: string;
    data: {
        dynamicPoolId: string;
        _transform: null;
        weight: number;
        bezier: null;
        min: number;
        max: number;
        group: number;
        step: number;
        id: string;
    }[];
} | {
    id: string;
    data: {
        id: string;
        group: number;
        step: number;
        min: number;
        _transform: null;
        weight: number;
        max: number;
        bezier: null;
    }[];
} | {
    id: string;
    data: {
        dynamicPoolId: string;
        bezier: null;
        id: string;
        step: number;
        max: number;
        _transform: null;
        weight: number;
        group: number;
        min: number;
    }[];
} | {
    id: string;
    data: {
        _transform: null;
        bezier: null;
        step: number;
        id: string;
        max: number;
        group: number;
        min: number;
        weight: number;
    }[];
} | {
    data: {
        id: string;
        weight: number;
        group: number;
        step: number;
        bezier: null;
        min: number;
        max: number;
        dynamicPoolId: string;
        _transform: null;
    }[];
    id: string;
} | {
    data: {
        group: number;
        bezier: null;
        min: number;
        _transform: null;
        weight: number;
        max: number;
        step: number;
        id: string;
    }[];
    id: string;
} | {
    data: {
        _transform: null;
        min: number;
        group: number;
        dynamicPoolId: string;
        bezier: null;
        step: number;
        id: string;
        max: number;
        weight: number;
    }[];
    id: string;
} | {
    data: {
        _transform: null;
        id: string;
        weight: number;
        bezier: null;
        max: number;
        step: number;
        group: number;
        min: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        max: number;
        bezier: null;
        id: string;
        dynamicPoolId: string;
        _transform: null;
        weight: number;
        step: number;
        min: number;
        group: number;
    }[];
} | {
    id: string;
    data: {
        id: string;
        step: number;
        _transform: null;
        bezier: null;
        group: number;
        min: number;
        max: number;
        weight: number;
    }[];
} | {
    data: {
        min: number;
        max: number;
        weight: number;
        group: number;
        dynamicPoolId: string;
        id: string;
        _transform: null;
        bezier: null;
        step: number;
    }[];
    id: string;
} | {
    data: {
        id: string;
        _transform: null;
        min: number;
        step: number;
        weight: number;
        bezier: null;
        group: number;
        max: number;
    }[];
    id: string;
} | {
    id: string;
    data: {
        max: number;
        _transform: null;
        step: number;
        group: number;
        bezier: null;
        min: number;
        id: string;
        weight: number;
    }[];
} | {
    data: {
        max: number;
        step: number;
        _transform: null;
        min: number;
        weight: number;
        group: number;
        id: string;
        bezier: null;
    }[];
    id: string;
} | {
    data: {
        min: number;
        max: number;
        weight: number;
        bezier: null;
        id: string;
        group: number;
        _transform: null;
        step: number;
    }[];
    id: string;
} | {
    data: {
        bezier: null;
        id: string;
        min: number;
        max: number;
        _transform: null;
        step: number;
        weight: number;
        group: number;
    }[];
    id: string;
} | {
    data: {
        weight: number;
        min: number;
        group: number;
        bezier: null;
        step: number;
        id: string;
        _transform: null;
        max: number;
    }[];
    id: string;
} | {
    data: {
        weight: number;
        step: number;
        group: number;
        _transform: null;
        min: number;
        bezier: null;
        max: number;
        id: string;
    }[];
    id: string;
} | {
    id: string;
    data: {
        group: number;
        weight: number;
        bezier: null;
        _transform: null;
        max: number;
        min: number;
        id: string;
        step: number;
    }[];
} | {
    data: {
        id: string;
        max: number;
        group: number;
        step: number;
        _transform: null;
        weight: number;
        min: number;
        bezier: null;
    }[];
    id: string;
} | {
    id: string;
    data: {
        id: string;
        _transform: null;
        weight: number;
        bezier: null;
        min: number;
        group: number;
        max: number;
        step: number;
    }[];
} | {
    data: {
        max: number;
        group: number;
        min: number;
        step: number;
        id: string;
        bezier: null;
        _transform: null;
        weight: number;
    }[];
    id: string;
} | {
    data: {
        min: number;
        max: number;
        id: string;
        weight: number;
        group: number;
        step: number;
        _transform: null;
        bezier: null;
    }[];
    id: string;
} | {
    data: {
        id: string;
        bezier: null;
        max: number;
        weight: number;
        group: number;
        step: number;
        _transform: null;
        min: number;
    }[];
    id: string;
} | {
    id: string;
    updatedAt: {
        _seconds: number;
        _nanoseconds: number;
    };
    data: ({
        min: number;
        id: string;
        dynamicPoolId: null;
        step: number;
        group: number;
        max: number;
        weight: number;
    } | {
        group: number;
        step: number;
        weight: number;
        min: number;
        dynamicPoolId: string;
        max: number;
        id: string;
    })[];
    createdAt: {
        _seconds: number;
        _nanoseconds: number;
    };
} | {
    id: string;
    data: {
        group: number;
        bezier: null;
        max: number;
        min: number;
        weight: number;
        _transform: null;
        id: string;
        step: number;
    }[];
} | {
    createdAt: {
        _seconds: number;
        _nanoseconds: number;
    };
    updatedAt: {
        _seconds: number;
        _nanoseconds: number;
    };
    id: string;
    data: ({
        dynamicPoolId: string;
        group: number;
        max: number;
        id: string;
        weight: number;
        step: number;
        min: number;
    } | {
        min: number;
        max: number;
        id: string;
        step: number;
        weight: number;
        dynamicPoolId: null;
        group: number;
    })[];
} | {
    data: {
        group: number;
        step: number;
        id: string;
        min: number;
        weight: number;
        _transform: null;
        max: number;
        bezier: null;
    }[];
    id: string;
} | {
    id: string;
    data: {
        weight: number;
        _transform: null;
        min: number;
        max: number;
        bezier: null;
        group: number;
        id: string;
        step: number;
    }[];
} | {
    data: {
        weight: number;
        bezier: null;
        max: number;
        group: number;
        min: number;
        step: number;
        _transform: null;
        id: string;
    }[];
    id: string;
} | {
    id: string;
    data: {
        group: number;
        min: number;
        max: number;
        step: number;
        bezier: null;
        weight: number;
        _transform: null;
        id: string;
    }[];
} | {
    id: string;
    data: {
        weight: number;
        step: number;
        group: number;
        min: number;
        max: number;
        id: string;
        _transform: null;
        bezier: null;
    }[];
} | {
    id: string;
    data: {
        group: number;
        min: number;
        id: string;
        max: number;
        weight: number;
        step: number;
        bezier: null;
        _transform: null;
    }[];
} | {
    id: string;
    data: {
        group: number;
        id: string;
        bezier: null;
        _transform: null;
        min: number;
        max: number;
        weight: number;
        step: number;