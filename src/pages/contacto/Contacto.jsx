import { Paper, Typography } from "@mui/material";
import './Contacto.css';

const Contacto = ({theme}) => {
    return (
        <main
            style={{
                backgroundColor: theme.palette.background.default
            }}
        >
            <section
                className="contacto__section"
                style={{
                    backgroundColor : theme.palette.background.default
                }}
            >
                <Paper
                    className="contacto__paper"
                >
                    <h1>
                        Pika | Contacto
                    </h1>
                        <Typography>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur totam neque sunt eum quis obcaecati vel, temporibus perspiciatis modi quasi facilis sit, et accusamus assumenda aliquid iure odio placeat fugiat?
                            Ratione ad dignissimos, corporis repellendus amet sed dolorum incidunt maxime itaque ea doloremque necessitatibus laboriosam esse! Ea porro sequi, facilis reiciendis, veniam optio aliquam tempore, dolorum facere sint ullam molestiae?
                            Eum illum necessitatibus dolore soluta corrupti tempore nobis. Veniam odit nobis ab sapiente, debitis a atque porro fugiat ipsam deserunt laborum nisi vero, distinctio quia magnam culpa, perferendis dignissimos laboriosam.
                            Est rerum recusandae iusto, delectus nostrum quae iure accusantium necessitatibus ad labore corrupti magnam! At ipsam autem dolore iure earum reiciendis voluptates doloremque ratione quia, voluptas, ab perferendis illo vitae.
                            Aspernatur saepe neque dicta quasi repellat quis ipsam maxime, quo expedita assumenda dolorem numquam illo necessitatibus, deserunt eius perspiciatis quam, velit magni porro. Fugit corrupti cupiditate nostrum modi, tempore doloremque?
                            Iusto nisi nostrum facilis delectus reiciendis iste sapiente sint temporibus facere aliquam veritatis quam a dicta, non consequuntur harum in molestiae, est dolor ipsa et inventore consequatur numquam! Sint, placeat?
                            Omnis nostrum dignissimos est tempore fugit error exercitationem aut, nisi necessitatibus repellendus! Alias laborum facilis impedit delectus, officia non eligendi iusto sit atque tempora similique nostrum possimus dolorum, nihil porro.
                            Ab veritatis tempora in illo blanditiis possimus! Dolore beatae eos esse odio fugit culpa aperiam? Fuga deserunt enim exercitationem molestiae, eius nisi, voluptate fugit error nostrum dicta perferendis optio repellendus!
                            Dolores quae magni aspernatur aperiam, maiores autem est voluptatibus neque veritatis? Sequi fugit ad libero odit doloremque officiis! Minima labore ullam nulla maiores eum harum repellendus quos, officia autem impedit!
                            Ut exercitationem vel dolores asperiores! Animi cum ratione pariatur iste beatae velit asperiores numquam atque incidunt culpa, suscipit veritatis necessitatibus, exercitationem harum illum tempora deleniti quod hic quasi fugit alias!
                        </Typography>
                </Paper>
            </section>
        </main>
    )
}

export default Contacto