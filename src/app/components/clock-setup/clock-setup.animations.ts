import {
    animate,
    keyframes,
    query,
    stagger,
    state,
    style,
    transition,
    trigger
} from '@angular/animations';

export const clockSetupAnimations = [
    trigger('zoomer', [
        state('inactive', style({
            transform: 'scale(1)'
        })),
        state('active', style({
            transform: 'scale(1.5)'
        }))
    ]),

    trigger('stagger', [
        transition('* => *', [
            query(':enter', style({ opacity: 0 }), { optional: true }),
            query(':enter', stagger('40ms',
                [
                    animate('200ms cubic-bezier(0.4, 0.0, 0.2, 1)',
                        keyframes([
                                style({ opacity: 0, transform: 'translateY(10px)'}),
                                style({ opacity: 1, transform: 'translateY(0)'}),
                            ])
                    )
                ]
            ), { optional: true }),

            query(':leave',
                animate('200ms cubic-bezier(0.4, 0.0, 0.2, 1)',
                    keyframes([
                        style({ opacity: 1 }),
                        style({ opacity: 0 }),
                    ])
                ), { optional: true }
            )

        ])
    ])
];
