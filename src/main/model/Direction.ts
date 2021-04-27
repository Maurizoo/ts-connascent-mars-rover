import {format} from "util";

enum DirectionEnum {
    NORTH = 0,
    EAST = 1,
    SOUTH = 2,
    WEST = 3
}
export class Direction {

    private value: number;
    private static map: Map<any, any> = new Map<any, any>([
        [0, new Direction(0)],
        [1, new Direction(1)],
        [2, new Direction(2)],
        [3, new Direction(3)]
    ])

    static letterToDirection: Map<string, Direction> = new Map([
        ['N', Direction.NORTH()],
        ['E', Direction.EAST()],
        ['S', Direction.SOUTH()],
        ['W', Direction.WEST()]
    ]);


    constructor(value: number) {
        this.value = value;
    }

    enumValue(): string {
        return DirectionEnum[this.value];
    }

    static valueOf(directionValue: number): Direction {
        return this.map.get(directionValue);
    }

    turnLeft(): Direction {
        let previousValue: number = this.value - 1;
        return Direction.valueOf((previousValue % 4 + 4) % 4);
    }

    turnRight(): Direction {
        let previousValue = this.value + 1;
        return Direction.valueOf((previousValue % 4 + 4) % 4);
    }

    toString(): string {
        return format("%s", this.enumValue().charAt(0))
    }

    static NORTH(): Direction {
        return Direction.valueOf(DirectionEnum.NORTH);
    }

    static EAST(): Direction {
        return Direction.valueOf(DirectionEnum.EAST);
    }

    static SOUTH(): Direction {
        return Direction.valueOf(DirectionEnum.SOUTH);
    }

    static WEST(): Direction {
        return Direction.valueOf(DirectionEnum.WEST);
    }

    static getDirection(coordinate: string): Direction {
        const mappedCoordinate = <Direction>this.letterToDirection.get(coordinate);
        return mappedCoordinate ? mappedCoordinate : Direction.NORTH()
    }
}