## - Static Generationa.
    |-> Quase Estatica.
        |-> Atualiza em x minutos.
## - Server Side Rendering.
    |-> Serve para analise de dados em tempo real.
        |-> Executa a cada requisição
## - Client Side Rendering.
    |-> A cada requisição do cliente.


    const [headerClassName, setHeaderClassName] = useState('');
    
    const handleScroll = (headerClassName) => {
        if (headerClassName !== 'menu' && window.pageYOffset >= 100) {
            setHeaderClassName('menu');
        } else if (headerClassName === 'menu' && window.pageYOffset < 100) {
            setHeaderClassName('');
        }
    }
    
    React.useEffect(() => {
        window.onscroll = () => handleScroll(headerClassName);
    }, [headerClassName]); // IMPORTANT, This will cause react to update depending on change of this value


const [buttonClassName, setButtonClassName] = useState('');
    
    const handleScroll = (buttonClassName) => {
        if (buttonClassName !== 'active') {
            setButtonClassName('active');
        } else if (buttonClassName === 'active') {
            setButtonClassName('');
        }
    }
    
    React.useEffect(() => {
        window.click = () => clear(buttonClassName);
    }, [buttonClassName]); // IMPORTANT, This will cause react to update depending on change of this value

