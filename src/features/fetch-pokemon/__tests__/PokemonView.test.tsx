import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import PokemonView from '../ui/PokemonView'
import type { PokemonListResponse } from '../model/pokemonType'

const mockData: PokemonListResponse = {
    count: 2,
    next: 'next-page',
    previous: 'prev-page',
    results: [
        { name: 'pikachu', url: 'url-1' },
        { name: 'bulbasaur', url: 'url-2' },
    ],
}

describe('PokemonView', () => {
    it('renders pokemon list', () => {
        render(<PokemonView
            loading={false}
            error={null}
            data={mockData}
            handleNext={vi.fn()}
            handlePrevious={vi.fn()}
        />)
        expect(screen.getByText(/pikachu/i)).toBeInTheDocument()
        expect(screen.getByText(/bulbasaur/i)).toBeInTheDocument()
    });

    it('renders loading state', () => {
        render(<PokemonView
            loading={true}
            error={null}
            data={undefined}
            handleNext={vi.fn()}
            handlePrevious={vi.fn()}
        />)
        expect(screen.getByText(/loading/i)).toBeInTheDocument()
    })

    it('renders error state', () => {
        render(<PokemonView
            loading={false}
            error="Something went wrong"
            data={mockData}
            handleNext={vi.fn()}
            handlePrevious={vi.fn()}
        />)
        expect(screen.getByText('Something went wrong')).toBeInTheDocument()
    })

    it('calls handleNext when Next clicked', async () => {
        const mockNext = vi.fn()

        render(
            <PokemonView
                loading={false}
                error={null}
                data={mockData}
                handleNext={mockNext}
                handlePrevious={vi.fn()}
            />
        )

        await userEvent.click(screen.getByRole('button', { name: /next/i }))

        expect(mockNext).toHaveBeenCalledTimes(1)
    })

    it('disables Next button if no next page', () => {
        const dataWithoutNext = { ...mockData, next: null }

        render(
            <PokemonView
                loading={false}
                error={null}
                data={dataWithoutNext}
                handleNext={vi.fn()}
                handlePrevious={vi.fn()}
            />
        )

        expect(screen.getByRole('button', { name: /next/i })).toBeDisabled()
    })
})