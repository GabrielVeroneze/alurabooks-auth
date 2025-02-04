import api from '@/services/api'
import { Pedido } from '@/interfaces/Pedido'

export async function buscarPedidos(): Promise<Pedido[]> {
    try {
        const resposta = await api.get<Pedido[]>('/pedidos')

        return resposta.data
    } catch {
        throw new Error('Erro ao carregar os pedidos.')
    }
}
