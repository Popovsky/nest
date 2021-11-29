import { Injectable } from '@nestjs/common';

@Injectable()
export class CounterService {
    private readonly count = 0;
    private readonly step = 1;

    getValue(): number {
        return this.count;
    }

    getStep(): number {
        return this.step;
    }
}
