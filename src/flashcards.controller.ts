import { Controller, Get, Req } from '@nestjs/common';
import { Request } from 'express';

@Controller('flashcards')
export class FlashcardsController {
  @Get()
  findAll(
    @Req() request: Request,
  ): { id: string; title: string; description: string }[] {
    return [
      {
        id: 'a4e4395b-a755-4f87-b116-ebd1f24def52',
        title: 'Estado',
        description:
          "Também conhecido como 'state'. Pode ser representando por 'dados que mudam com o tempo' e que também podem ser manipulados pelos usuários, geralmente através de formulários, e também por API's, outros componentes, etc.",
      },
      {
        id: 'c28eb61f-ba14-4b0d-ab4b-0ffe34ed833e',
        title: 'Function Components',
        description:
          'Componentes baseados em função. São amplamente utilizados atualmente em detrimento às Class Components, que aos poucos podem se tornar obsoletas.',
      },
    ];
  }
}
