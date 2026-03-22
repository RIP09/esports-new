import React from 'react'
import Link from 'next/link'
import { FaTwitter, FaDiscord, FaYoutube, FaTwitch } from 'react-icons/fa'

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark-card border-t border-gray-800 mt-16">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">EsportsHub</h3>
            <p className="text-gray-400 text-sm">
              Your premier source for competitive gaming news, tournaments, and esports coverage.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="/" className="hover:text-accent">Home</Link></li>
              <li><Link href="/#">News</Link></li>
              <li><Link href="/#">Tournaments</Link></li>
              <li><Link href="/#">Contact</Link></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="font-semibold text-white mb-4">Categories</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="/#">League of Legends</Link></li>
              <li><Link href="/#">Valorant</Link></li>
              <li><Link href="/#">CS2</Link></li>
              <li><Link href="/#">Dota 2</Link></li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold text-white mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-accent transition-colors">
                <FaTwitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-accent transition-colors">
                <FaDiscord size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-accent transition-colors">
                <FaYoutube size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-accent transition-colors">
                <FaTwitch size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} EsportsHub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer