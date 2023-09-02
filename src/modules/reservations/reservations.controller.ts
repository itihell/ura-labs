import {
  Controller,
  Post,
  Body,
  Req,
  UseGuards,
  UnauthorizedException,
  Get,
  Delete,
  Param,
  Put,
} from '@nestjs/common';
import { ReservationsService } from './reservations.service';
import { CreateReservationDto } from './dto/create-reservation.dto';
import { Shift } from './dto/create-reservation.dto';
import { JwtAuthGuard } from '../auth/guards/jwt.guard';
import { Reservation } from './entities/reservation.entity';
import { UpdateReservationDto } from './dto/update-reservation.dto';
@Controller('reservations')
export class ReservationsController {
  constructor(private readonly reservationService: ReservationsService) {}

  @UseGuards(JwtAuthGuard) // Usa el guardia JWT para proteger esta ruta
  @Post()
  async create(
    @Body() createReservationDto: CreateReservationDto,
    @Req() req, // Obtén la solicitud actual
  ) {
    try {
      // Obtiene el usuario actual desde la solicitud (req)
      const user = req.user;
      // Asegura que el usuario exista y tenga un ID
      if (!user || !user.id) {
        throw new UnauthorizedException('Usuario no autenticado');
      }

      // Llama al servicio de reservas pasando el usuario actual como userId
      const reservation = await this.reservationService.createReservation(
        createReservationDto,
        Shift.morning,
        user.id, // Pasa el ID del usuario como userId
      );

      return { success: true, data: reservation };
    } catch (error) {
      return {
        success: false,
        message: error instanceof Error ? error.message : 'Error desconocido',
      };
    }
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
    try {
      const reservation = await this.reservationService.getReservationById(id);
      return { success: true, data: reservation };
    } catch (error) {
      return {
        success: false,
        message: error instanceof Error ? error.message : 'Error desconocido',
      };
    }
  }

  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body() updateReservationDto: UpdateReservationDto,
  ) {
    try {
      const reservation = await this.reservationService.updateReservation(
        id,
        updateReservationDto,
      );
      return { success: true, data: reservation };
    } catch (error) {
      return {
        success: false,
        message: error instanceof Error ? error.message : 'Error desconocido',
      };
    }
  }

  @Delete(':id')
  async remove(@Param('id') id: number) {
    try {
      await this.reservationService.deleteReservation(id);
      return { success: true, message: 'La reserva ha sido eliminada' };
    } catch (error) {
      return {
        success: false,
        message: error instanceof Error ? error.message : 'Error desconocido',
      };
    }
  }

  @Get()
  async findAll() {
    try {
      const reservations: Reservation[] =
        await this.reservationService.getAllReservations();
      return { success: true, data: reservations };
    } catch (error) {
      return {
        success: false,
        message: error instanceof Error ? error.message : 'Error desconocido',
      };
    }
  }
}
