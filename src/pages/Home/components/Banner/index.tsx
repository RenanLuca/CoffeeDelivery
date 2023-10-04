import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";
import { BannerContainer, BannerInfos, BannerInfosBulletPoints, BulletPointCart, BulletPointCoffee, BulletPointPackage, BulletPointTimer } from "./styles";

export function Banner() {
    return (
        <BannerContainer>
            <BannerInfos>
                <h1>
                    Encontre o café perfeito para qualquer hora do dia
                </h1>
                <p>
                    Com o Coffee Delivery você recebe seu café onde estiver,
                    a qualquer hora
                </p>
                <BannerInfosBulletPoints>
                    <BulletPointCart>
                        <div>
                            <ShoppingCart size={16} weight="fill"/>
                        </div>
                        <span>Compra simples e segura</span>
                    </BulletPointCart>
                    <BulletPointPackage>
                        <div>
                            <Package size={16} weight="fill" />
                        </div>
                        <span>Embalagem mantém o café intacto</span>
                    </BulletPointPackage>
                    <BulletPointTimer>
                        <div>
                            <Timer size={16} weight="fill" />
                        </div>
                        <span>Entrega rápida e rastreada</span>
                    </BulletPointTimer>
                    <BulletPointCoffee>
                        <div>
                            <Coffee size={16} weight="fill" />
                        </div>  
                        <span>O café chega fresquinho até você</span>
                    </BulletPointCoffee>
                </BannerInfosBulletPoints>
            </BannerInfos>
            <div className="img">
                <img src="public\assets\BannerHome.svg" alt="" />
            </div>
        </BannerContainer>
    )
}