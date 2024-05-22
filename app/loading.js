export default function Loading() {
    return (
        <div className="h-screen w-screen fixed top-0 left-0 flex justify-center items-center overflow-hidden">
            <div className="absolute animate-spin rounded-full h-32 w-32 border-t-4 border-b-4 border-purple-500"></div>
            <div className="rounded-full flex justify-center items-center">
                <div className="h-6 text-2xl font-semibold">
                    AnhDH
                </div>
            </div>
        </div>
    )
}