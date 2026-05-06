import { cn } from "../utils/utils"


interface Props  {
    className?: string,

}

const Container = ({ children, className }: React.PropsWithChildren<Props>) => {
    return (
        <div className={cn('lg:w-5xl md:w-4xl mx-auto', className)}>
            {children}
        </div>
    )
}

export default Container