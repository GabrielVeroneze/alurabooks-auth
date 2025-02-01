import { useEffect, useState } from 'react'
import { AbBotao } from 'ds-alurabooks'
import { Pedido } from '@/interfaces/Pedido'
import api from '@/services/api'
import styles from './Pedidos.module.scss'

const Pedidos = () => {
    const formatador = Intl.NumberFormat('pt-br', {
        style: 'currency',
        currency: 'BRL',
    })

    const [pedidos, setPedidos] = useState<Pedido[]>([])

    useEffect(() => {
        api.get<Pedido[]>('pedidos')
            .then((resposta) => setPedidos(resposta.data))
            .catch((erro) => console.log(erro))
    }, [])

    return (
        <section className={styles.pedidos}>
            <h1 className={styles.titulo}>Meus pedidos</h1>
            {pedidos.map((pedido) => (
                <div className={styles.pedido} key={pedido.id}>
                    <ul className={styles.dados}>
                        <li>
                            Pedido: <strong>{pedido.id}</strong>
                        </li>
                        <li>
                            Data do pedido:{' '}
                            <strong>
                                {new Date(pedido.data).toLocaleDateString()}
                            </strong>
                        </li>
                        <li>
                            Valor total:{' '}
                            <strong>{formatador.format(pedido.total)}</strong>
                        </li>
                        <li>
                            Entrega realizada em:{' '}
                            <strong>
                                {new Date(pedido.entrega).toLocaleDateString()}
                            </strong>
                        </li>
                    </ul>
                    <div className={styles.botao}>
                        <AbBotao texto="Detalhes" />
                    </div>
                </div>
            ))}
        </section>
    )
}

export default Pedidos
