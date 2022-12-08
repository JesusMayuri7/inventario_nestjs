import { BadRequestException, InternalServerErrorException, Logger } from "@nestjs/common";

export class HandleErrors{

    private readonly logger:Logger =  new Logger();

    public handleDBExceptions( error: any ) {

        if ( error.code === '23505' )
          throw new BadRequestException(error.detail);
        
        this.logger.error(error)
        // console.log(error)
        throw new InternalServerErrorException('Unexpected error, check server logs');
    
      }
}