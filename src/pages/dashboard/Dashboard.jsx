import { Paper, Tab } from "@mui/material";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import TabDisenosContainer from "../../common/tabDisenos/TabDisenosContainer";
import TabProductosContainer from "../../common/tabProductos/TabProductosContainer";
import TabPedidosContainer from "../../common/tabPedidos/TabPedidosContainer";
import TabOrderHistoryContainer from "../../common/tabOrderHistory/TabOrderHistoryContainer";
import './Dashboard.css';

const Dashboard = ({theme, smDisplay, tabIndex, handleChange}) => {
    return (
        <main
            style={{
                backgroundColor : theme.palette.background.default,
                padding : '1rem'
            }}
        >
            <section>
                <Paper
                    style={{
                        padding : '1rem',
                        marginBottom : '1rem'
                    }}
                >
                    <h1>
                        Dashboard
                    </h1>
                </Paper>
                <Paper
                    style={{
                        padding : '1rem',
                        marginTop : '4rem',
                        position : 'relative',
                        borderRadius : '0 4px 4px 4px'
                    }}
                    className="dashboard__paper"
                >
                    <TabContext
                        value = {tabIndex}
                        >
                        <TabList
                            variant="scrollable"
                            value = {tabIndex}
                            onChange={handleChange}
                            aria-label='tabs'
                            className = 'dashboard__tablist'
                            style={{
                                width: '100%'
                            }}
                            >
                            <Tab
                                label = 'Diseños'
                                value = '0'
                                className = 'dashboard__tab'
                                style = {{
                                    backgroundColor : theme.palette.background.paper,
                                    borderRadius: '4px 0 0 0',
                                    opacity : '.6',
                                    fontSize: `${smDisplay ? '.8rem' : '.65rem'}`
                                }}
                            />
                            <Tab
                                label = 'Productos'
                                value = '1'
                                className = 'dashboard__tab'
                                style = {{
                                    backgroundColor : theme.palette.background.paper,
                                    opacity : '.6',
                                    fontSize: `${smDisplay ? '.8rem' : '.65rem'}`
                                }}
                            />
                            <Tab
                                label = 'Pedidos'
                                value = '2'
                                className = 'dashboard__tab'
                                style = {{
                                    backgroundColor : theme.palette.background.paper,
                                    opacity : '.6',
                                    fontSize: `${smDisplay ? '.8rem' : '.65rem'}`
                                }}
                            />
                            <Tab
                                label = 'Historial'
                                value = '3'
                                className = 'dashboard__tab'
                                style = {{
                                    backgroundColor : theme.palette.background.paper,
                                    borderRadius: '0 4px 0 0',
                                    opacity : '.6',
                                    fontSize: `${smDisplay ? '.8rem' : '.65rem'}`
                                }}
                            />
                        </TabList>
                        <TabPanel 
                            value="0"
                            style={{
                                padding : 0
                            }}
                        >
                            <TabDisenosContainer/>
                        </TabPanel>
                        <TabPanel 
                            value="1"
                            style={{
                                padding : 0
                            }}
                        >
                            <TabProductosContainer/>
                        </TabPanel>
                        <TabPanel 
                            value="2"
                            style={{
                                padding : 0
                            }}
                        >
                            <TabPedidosContainer/>
                        </TabPanel>
                        <TabPanel 
                            value="3"
                            style={{
                                padding : 0
                            }}
                        >
                            <TabOrderHistoryContainer/>
                        </TabPanel>
                    </TabContext>
                </Paper>
            </section>
        </main>
    )
}

export default Dashboard