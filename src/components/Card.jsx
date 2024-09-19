import React from 'react'

export default function Card() {
    return (
        <div className="w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="/">
                <img
                    className="p-8 rounded-t-lg w-full"
                    src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxISEhUSEhMVFRIVFRkXGBcXFxkXGBUSFxYXFxYSHRUYHTQhGiYlJxYXITEhJjUrLzAwFyEzODMtNygtLisBCgoKDg0OGxAQGy8lICUuLy4xNzItLTAtLTI1LS0tNzMtLy0tLzU1Ly0vLS0tLy0tLysvLS0tLy0tLS0tLy0tLf/AABEIANwA5QMBIgACEQEDEQH/xAAcAAEAAgIDAQAAAAAAAAAAAAAABQYEBwECAwj/xABFEAACAQIEAgcFBQQHCAMAAAABAgADEQQSITEFQQYHEyJRYXEUMoGRoSNCUoKxcpLB0TM1U2Jzs/AkJTRUsrTC4RVDov/EABoBAQADAQEBAAAAAAAAAAAAAAABAgMEBgX/xAAtEQEAAgIBAwIEBgIDAAAAAAAAAQIDESEEEjFBYQUiUZEUMnGB8PETsRWh4f/aAAwDAQACEQMRAD8A3ZERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQExeJcSpYdM9Zwq8vEnwCjUn0mUSBqdANz4Dxnzt0q6YmviajO4ADsqKToqBiAoH1PnJiNols3HdYovajS08XOp/Ku3zke/WBiDsKY/L/ADM1WvHwdmB9DODxhqncpnvNoLa2J5zTUQja9cX61K9K4DguN1VU7vqSPoJXq3WRxV9RXFMHbuqv0OpmJw/q/wAa64mqqZ/Z+Vye0NgxCAjvMAbkeOmplZLX13vzlfKWw+Dda2PosPaAmIpfesFVgPEMm35hNvcJ6T4XE0FxFOpdGOXLbvip/ZFBrm8h67T5gp3uMt8xNhbck7AWm1+rtqOHpubKKivkOwIYKM58r3t6C0rbURtNeZ02smKJ1y5R4E3PxtoPrOKuNCi5IAHOVdukKfiEgekfSTTKja5e6AdcxNrjzA1nJkzTWNurDgi9tT+qd4x01yN2dJcz+HMepOi+mpmAOkWNOudF8st/rcTH4F0RqVKFV1qZK1+4TqC4sxV7i9jcA21Gvhrg4PEF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APC07xEzsQ9XgCBi9I5MxuyfcLHdh+AnnbQ+F9Z5vwZuRv8AGTkTO1It5Wi0wq9bgFS4dbBhrfQ6zutCsNGosT/dK2PzOkssTL8PETuszDb8TMxEWiJ0rY4TXq6PaknPUMxHhpp/rnJ7CYRKSBEFl/U8yfGe0S9MNazvzKt81rx2+I+kIjiXR2jVINshGncCgH1FpEVehh+7UX4rb9JbolL9LivO5hri67PjjVbKQ3Q6sDdWpfUf+Mx6XQvEDIt6dlOpLE5hY6Hu+Jl/iZ/gcXu3/wCW6j2+yn4PoSCrCvUvdgQqHQAWOW5HlLdSpBVCqAFAsAOQnaJviw0x/lhy5+qy5/zyRETVzkREBERAREQEREBERASBrV+I+2sq06RwXYkqxNmNe2gJzX30ta1tb30kxjKjqhNNc76WW4F9ddSfC8xFxdf+w8j3repFx5ene30kxIg+HYri5wqtWo0VxXbEFQRbsbaMQHIBvcaE6AHc6W2YIxVawJo6lQcubZrtmGb4J+8fCdsFiarkh6WQAb5r66WG2u5+XnITM7lmREQgkfWq4nt8qohoZCcxNj2mtl39OXMyQkb7TiQADSBa3vA2F8qn3SfEld+V/KBg8CxXEGoBsVRRK/aMMqFT9nbuk2Yga3G50t46WATBrYqsPdo5tT94LpmOU+elj8fKe+CrO63dMhvoL3001/UfCRrke8REkJDdK6uNWiDgEpvWzgEVNhTsbkAsOeXnsTJmRlPF4i2tAE6bNl3tmFrnbUX57yYnUjtSqYntyGVOwybg657C43vvcbbTPp3trvI5sXiTTZhQCvplVmzX7wBJy7aEnflOTjMR3rULWBtdxcm+mg/nKVrr1WtbeuElE5nEsqREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERA//2Q=="
                    alt="product_image1"
                />
            </a>
            <div className="px-5 pb-5">
                <a href="/">
                    <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                        Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport
                    </h5>
                </a>
                <div className="flex items-center mt-2.5 mb-5">
                    <svg
                        className="w-4 h-4 text-yellow-300 mr-1"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                    >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <svg
                        className="w-4 h-4 text-yellow-300 mr-1"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                    >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <svg
                        className="w-4 h-4 text-yellow-300 mr-1"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                    >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <svg
                        className="w-4 h-4 text-yellow-300 mr-1"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                    >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <svg
                        className="w-4 h-4 text-gray-200 dark:text-gray-600"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                    >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
                        4.0
                    </span>
                </div>
                <div className="flex items-center justify-between">
                    <span className="text-3xl font-bold text-gray-900 dark:text-white">$599</span>
                    <a
                        href="/"
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                        Add to cart
                    </a>
                </div>
            </div>
        </div>
    );
}
