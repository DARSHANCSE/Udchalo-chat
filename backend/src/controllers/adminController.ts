import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express"; // Import types for Express

const prisma = new PrismaClient();

export const signIn = async (req: Request, res: Response): Promise<Response> => {
    try {
        return res.json({ success: true, message: "Signed in" });
    } catch (e) {
        console.error(e);
        return res.json({ success: false, error: e });
    }
};

interface CreateFlightRequest extends Request {
    body: {
        name: string;
        no: string;
        departure: Date;
        arrival: Date;
    };
}

export const createFlight = async (req: CreateFlightRequest, res: Response): Promise<Response> => {
    try {
        const { name, no, departure, arrival } = req.body;
        const flight = await prisma.flight.create({
            data: {
                name: name,
                flightNo: no,
                departureDate: departure,
                arrivalDate: arrival
            }
        });
        return res.json({ success: true, flight: flight });
    } catch (e) {
        console.error(e);
        return res.json({ success: false, error: e });
    }
};
