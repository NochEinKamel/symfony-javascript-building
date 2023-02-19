<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class AppRouteController extends AbstractController
{
    #[Route('/app', name: 'app_route')]
    public function index(): Response
    {
        return $this->render('app_route/index.html.twig', [
            'controller_name' => 'AppRouteController',
        ]);
    }
}
