import gkx from "gkx"
import ix from "ix";
import CometCompositeStructureContext "CometCompositeStructureContext";
import CometIcon from "CometIcon";
import fbicon from "fbicon";
import React, {useContext} from "react"


const CometCompositeItemFocusIndicator = () => {
    const context = useContext(CometCompositeStructureContext)

    if (context.hideArrowSignifiers === true) {
        return null;
    }


    return (
        <>
           {context.horizontal === true ? (
                <React.Fragment>
                    <div className="x2bj2ny xn7ya7q x1su9jv1 xt02mhb xb4krs4 x1npaq5j x1c83p5e x1enjb0b x199158v xdk7pt x14ju556 x1nn3v0j xg83lxy xg8j3zb x1k2j06m x10l6tqk x1xc55vz x9otpla x67uiyb xwa60dl">
                        <CometIcon color="primary" icon={fbicon._(h("1739808"), 8)} />
                    </div>
                    <div className="x2bj2ny xn7ya7q x1su9jv1 xt02mhb xb4krs4 x1npaq5j x1c83p5e x1enjb0b x199158v xdk7pt x14ju556 x1nn3v0j xg83lxy xg8j3zb x1k2j06m x10l6tqk x1xc55vz x1wtad8d x9otpla xwa60dl">
                        <CometIcon color="primary" icon={fbicon._(h("897949"), 8)} />
                    </div>
                </React.Fragment>
            ) : null}

            {context.vertical === true ? (
                <React.Fragment>
                    <div className="x2bj2ny xn7ya7q x1su9jv1 xt02mhb xb4krs4 x1npaq5j x1c83p5e x1enjb0b x199158v xdk7pt x14ju556 x1nn3v0j xg83lxy xg8j3zb x1k2j06m x10l6tqk x1xc55vz x9otpla x67uiyb xwa60dl">
                        <CometIcon color="primary" icon={fbicon._(h("1739808"), 8)} />
                    </div>
                    <div className="x2bj2ny xn7ya7q x1su9jv1 xt02mhb xb4krs4 x1npaq5j x1c83p5e x1enjb0b x199158v xdk7pt x14ju556 x1nn3v0j xg83lxy xg8j3zb x1k2j06m x10l6tqk x1xc55vz x1wtad8d x9otpla xwa60dl">
                        <CometIcon color="primary" icon={fbicon._(h("897949"), 8)} />
                    </div>
                </React.Fragment>
            ) : null}
        </>
    )
}

export default CometCompositeItemFocusIndicator