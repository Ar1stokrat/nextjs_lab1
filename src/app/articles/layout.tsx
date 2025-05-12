import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function ArticlesLayout ({children}:{children:React.ReactNode}){
    return(
        <div className='p-4'>
            <nav className='mb-4 space-x-4'>
            <ActiveLink href="/articles/favorite" label="Улюблені" />
            <ActiveLink href="/articles/create" label="Створити" />
            </nav>
            {children}
        </div>
    )
}

function ActiveLink ({href, label}: {href: string, label: string}){
    const pathname = typeof window !=='undefined' ? window.location.pathname :''
    const isActive = pathname ===href 
    return (
        <Link href={href} className={isActive ? 'text-blue-500':'text-gray-700'}>
            {label}
        </Link>
    )
}