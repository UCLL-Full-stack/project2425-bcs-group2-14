import axios from 'axios';
import { Plane } from '../../back-end/model/plane';

export async function fetchPlanes(): Promise<Plane[]> {
    const response = await axios.get('/api/planes');
    return response.data;
}

export async function fetchPlaneById(id: number): Promise<Plane> {
    const response = await axios.get(`/api/planes/${id}`);
    return response.data;
};

