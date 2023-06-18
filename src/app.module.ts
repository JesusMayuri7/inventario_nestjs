import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';


import { ProductsModule } from './products/products.module';
import { CommonModule } from './common/common.module';
import { SeedModule } from './seed/seed.module';
import { FilesModule } from './files/files.module';
import { AuthModule } from './auth/auth.module';
import { MessagesWsModule } from './messages-ws/messages-ws.module';
import { AreaModule } from './area/area.module';
import { ProductoModule } from './producto/producto.module';
import { MarcaModule } from './marca/marca.module';
import { CategoriaModule } from './categoria/categoria.module';
import { CaracteristicaModule } from './caracteristica/caracteristica.module';
import { RedModule } from './red/red.module';
import { CentroModule } from './centro/centro.module';
import { DepartamentoModule } from './departamento/departamento.module';
import { ServicioModule } from './servicio/servicio.module';
import { SeccionModule } from './seccion/seccion.module';
import { PersonalModule } from './personal/personal.module';
import { GrupoModule } from './grupo/grupo.module';
import { join } from 'path';
import { ServeStaticModule } from '@nestjs/serve-static';

@Module({
  imports: [
    ConfigModule.forRoot(),

    TypeOrmModule.forRoot({
      ssl: process.env.STAGE === 'prod',
      extra: {
        ssl: process.env.STAGE === 'prod'
              ? { rejectUnauthorized: false }
              : null,
      },
      type: 'postgres',
      host: process.env.DB_HOST,      
      port: +process.env.DB_PORT,
      database: process.env.DB_NAME,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,      
      autoLoadEntities: true,
     // synchronize: true,
    }),

     ServeStaticModule.forRoot({
      rootPath: join(__dirname,'..','public'), 
    }), 

    ProductsModule,

    CommonModule,

    SeedModule,

    FilesModule,

    AuthModule,

    MessagesWsModule,

    AreaModule,

    ProductoModule,

    MarcaModule,

    CategoriaModule,

    CaracteristicaModule,

    RedModule,

    CentroModule,

    DepartamentoModule,

    ServicioModule,

    SeccionModule,

    PersonalModule,

    GrupoModule,

    PersonalModule

  ],
})
export class AppModule {}
