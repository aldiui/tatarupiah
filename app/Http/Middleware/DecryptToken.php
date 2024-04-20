<?php

namespace App\Http\Middleware;

use App\Traits\ApiResponder;
use Closure;
use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\Crypt;
use PHPOpenSourceSaver\JWTAuth\Facades\JWTAuth;

class DecryptToken
{
    use ApiResponder;

    public function handle($request, Closure $next)
    {
        if ($request->hasHeader('Authorization')) {
            $encryptedToken = $request->bearerToken();
            try {
                $decryptedToken = Crypt::decrypt($encryptedToken);
                $user = JWTAuth::setToken($decryptedToken)->authenticate();
                if (!$user) {
                    return $this->errorResponse(null, 'Sesi Anda telah berakhir. silahkan login kembali.', 401);
                }
                App::setLocale($user->lang);
                $request->merge(['user' => $user]);

            } catch (\Exception $e) {
                return $this->errorResponse(null, 'Sesi Anda telah berakhir. silahkan login kembali.');
            }
        }
        return $next($request);
    }
}
